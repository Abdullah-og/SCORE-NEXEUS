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
  const { Team1, Team2, Date, Time, Venue, user_id } = req.body;

  const query = `
    INSERT INTO matches (Team1, Team2, Date, Time, Venue, user_id)
    VALUES (?, ?, ?, ?, ?, ?)
  `;
  db.query(query, [Team1, Team2, Date, Time, Venue, user_id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({
      message: "Match added successfully",
      matchId: result.insertId,
      match: req.body
    });
  });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { Team1, Team2, Date, Time, Venue } = req.body;

  const query = `
    UPDATE matches 
    SET Team1 = ?, Team2 = ?, Date = ?, Time = ?, Venue = ?
    WHERE id = ?
  `;
  db.query(query, [Team1, Team2, Date, Time, Venue, id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0)
      return res.status(404).json({ error: "Match not found" });

    res.json({ message: "Match updated successfully" });
  });
});


router.delete("/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM matches WHERE id = ?", [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0)
      return res.status(404).json({ error: "Match not found" });

    res.json({ message: "Match deleted successfully" });
  });
});

module.exports = router;
