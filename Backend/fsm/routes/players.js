const express = require('express');
const router = express.Router();
const db = require('../db');


router.get("/", (req, res) => {
  const { user_id } = req.query;
  const query = user_id
    ? "SELECT * FROM players WHERE user_id = ?"
    : "SELECT * FROM players";
  const params = user_id ? [user_id] : [];

  db.query(query, params, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});


router.post("/", (req, res) => {
  const {
    playerName,
    playerRole,
    Team,
    BattingStyle,
    BowlingStyle,
    DateofBirth,
    user_id
  } = req.body;

  const query = `
    INSERT INTO players 
    (playerName, playerRole, Team, BattingStyle, BowlingStyle, DateofBirth, user_id) 
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(query, [playerName, playerRole, Team, BattingStyle, BowlingStyle, DateofBirth, user_id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: "Player added" });
  });
});


router.put("/:id", (req, res) => {
  const {
    playerName,
    playerRole,
    Team,
    BattingStyle,
    BowlingStyle,
    DateofBirth
  } = req.body;
  const { id } = req.params;

  const query = `
    UPDATE players 
    SET playerName = ?, playerRole = ?, Team = ?, BattingStyle = ?, BowlingStyle = ?, DateofBirth = ? 
    WHERE id = ?
  `;

  db.query(query, [playerName, playerRole, Team, BattingStyle, BowlingStyle, DateofBirth, id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Player updated" });
  });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  db.query("DELETE FROM players WHERE id = ?", [id], (err, result) => {
    if (err) return res.sendStatus(500);
    if (result.affectedRows === 0) return res.sendStatus(404);

    db.query("SELECT COUNT(*) AS count FROM players", (err2, results) => {
      if (err2) return res.sendStatus(500);

      if (results[0].count === 0) {
        db.query("ALTER TABLE players AUTO_INCREMENT = 1", () => {
          return res.sendStatus(200);
        });
      } else {
        res.sendStatus(200);
      }
    });
  });
});


module.exports = router;
