const express = require('express');
const cors = require("cors");
const { interpret } = require("xstate");
const machine = require("./stateMachine.js");
const log = require("./log.js");
const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const logger = log("server.js");


const keys = {};

function createService(key) {
  const service = interpret(machine, {
    actions: {
      sendCtx: (context, event) => {
        logger.info(`sendCtx action called with context: ${JSON.stringify(context)}, event: ${JSON.stringify(event)}`);
       
      }
    }
  }).onTransition((state) => {
    logger.info(`Key: ${key} State: ${JSON.stringify(state.value)} NextEvents: ${state.nextEvents}`);
  }).onDone(() => {
    logger.info(`Key: ${key} Machine reached final state and stopped.`);
    if (keys[key]) {
      delete keys[key];
    }
  });

  service.start();
  return service;
}

app.use((req, res, next) => {
  logger.info(`Incoming ${req.method} request to ${req.url}`);
  logger.info(`Request body: ${JSON.stringify(req.body)}`);
  next();
});



app.post('/fsm/machine', (req, res) => {
  console.log("Incoming FSM payload:", req.body);
  
  try {
    const httpReq = req.body || {};
    const key = httpReq.key;

    if (!key) {
      logger.info("Request Token key is missing!");
      return res.status(400).json({ error: "Request Token key is missing!" });
    }

    if (!keys[key]) {
      keys[key] = {
        service: createService(key),
      };
    }

    const service = keys[key].service;
    const jsonObj = httpReq.data || {};
    const transition = httpReq.transition;

    logger.info(`Data from Front-End = ${JSON.stringify(jsonObj)}`);
    logger.info(`Front-End transition = ${transition}`);

    if (!transition) {
      return res.status(400).json({ code: "FSM-03", errorMessage: "Missing transition event" });
    }

    if (service.state.nextEvents.includes(transition)) {
      service.send({
        ...jsonObj,
        type: transition,
      });
      return res.json({
        state: service.state.value,
        context: service.state.context,
        nextEvents: service.state.nextEvents,
      });
    } else {
      return res.status(400).json({
        code: "FSM-01",
        errorMessage: "Invalid transition event for current state",
        currentState: service.state.value,
        nextEvents: service.state.nextEvents,
        context: service.state.context,
      });
    }
  } catch (error) {
    logger.error(`Error processing request: ${error.message}`);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

app.use((req, res) => {
  logger.info(`Received request for unknown route: ${req.method} ${req.url}`);
  res.status(404).json({ error: "Route not found" });
});

app.use((err, req, res, next) => {
  logger.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
