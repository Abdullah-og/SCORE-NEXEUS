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
    res.status(201).json({ message: "Match added successfully", match: req.body });
  });
});


router.put("/:Team1", (req, res) => {
  const { Team1 } = req.params;
  const { Team2, Date, Time, Venue } = req.body;

  const query = `UPDATE matches SET Team2 = ?, Date = ?, Time = ?, Venue = ? WHERE Team1 = ?`;
  db.query(query, [Team2, Date, Time, Venue, Team1], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0)
      return res.status(404).json({ error: "Match not found" });

    res.json({ message: "Match updated successfully" });
  });
});


router.delete("/:Team1", (req, res) => {
  const { Team1 } = req.params;
  db.query("DELETE FROM matches WHERE Team1 = ?", [Team1], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0)
      return res.status(404).json({ error: "Match not found" });

    res.json({ message: "Match deleted successfully" });
  });
});

module.exports = router;
