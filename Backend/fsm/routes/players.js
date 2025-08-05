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
  const query = `DELETE FROM players WHERE id = ?`;

  db.query(query, [id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Player deleted" });
  });
});

module.exports = router;
