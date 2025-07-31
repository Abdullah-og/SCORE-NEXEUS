const express = require('express');
const router = express.Router();
const db = require('../db');


router.get("/", (req, res) => {
  db.query("SELECT * FROM matches", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

router.post("/", (req, res) => {
  const { Team1, Team2, Date, Time, Venue } = req.body;
  const query = `INSERT INTO matches (Team1, Team2, Date, Time, Venue) VALUES (?, ?, ?, ?, ?)`;
  db.query(query, [Team1, Team2, Date, Time, Venue], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: "match added" });
  });
});

module.exports = router;
