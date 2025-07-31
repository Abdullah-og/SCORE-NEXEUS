const express = require('express');
const router = express.Router();
const db = require('../db');


router.get("/", (req, res) => {
  db.query("SELECT * FROM players", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});


router.post("/", (req, res) => {
  const { playerName, playerRole, Team, BattingStyle, BowlingStyle, DateofBirth } = req.body;
  const query = `INSERT INTO players (playerName, playerRole, Team, BattingStyle, BowlingStyle, DateofBirth) VALUES (?, ?, ?, ?, ?, ?)`;
  db.query(query, [playerName, playerRole, Team, BattingStyle, BowlingStyle, DateofBirth], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: "Player added" });
  });
});


router.put("/:playerName", (req, res) => {
  const { playerRole, Team, BattingStyle, BowlingStyle, DateofBirth } = req.body;
  const playerName = req.params.playerName;
  const query = `
    UPDATE players 
    SET playerRole = ?, Team = ?, BattingStyle = ?, BowlingStyle = ?, DateofBirth = ? 
    WHERE playerName = ?
  `;
  db.query(query, [playerRole, Team, BattingStyle, BowlingStyle, DateofBirth, playerName], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Player updated" });
  });
});


router.delete("/:playerName", (req, res) => {
  const playerName = req.params.playerName;
  const query = `DELETE FROM players WHERE playerName = ?`;
  db.query(query, [playerName], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Player deleted" });
  });
});

module.exports = router;
