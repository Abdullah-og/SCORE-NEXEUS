const express = require("express");
const router = express.Router();
const db = require("../db"); 


router.post("/signup", (req, res) => {
  const { Email, Password } = req.body;

  if (!Email || !Password) {
    return res.status(400).json({ message: "Email and Password are required." });
  }

 
  const checkSql = "SELECT * FROM users WHERE Email = ?";
  db.query(checkSql, [Email], (checkErr, checkResults) => {
    if (checkErr) {
      return res.status(500).json({ message: "Database error", error: checkErr });
    }
    if (checkResults.length > 0) {
      return res.status(409).json({ message: "User already exists" });
    }

    
    const insertSql = "INSERT INTO users (Email, Password) VALUES (?, ?)";
    db.query(insertSql, [Email, Password], (insertErr) => {
      if (insertErr) {
        return res.status(500).json({ message: "Failed to create user", error: insertErr });
      }
    
      res.status(201).json({ message: "User registered successfully", user: { Email } });
    });
  });
});


router.post("/login", (req, res) => {
  const { Email, Password } = req.body;

  if (!Email || !Password) {
    return res.status(400).json({ message: "Email and Password are required." });
  }

  const sql = "SELECT * FROM users WHERE Email = ? AND Password = ?";
  db.query(sql, [Email, Password], (err, results) => {
    if (err) {
      return res.status(500).json({ message: "Database error", error: err });
    }
    if (results.length === 0) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    
    res.status(200).json({
      message: "Login successful",
      user: { Email: results[0].Email },
    });
  });
});

module.exports = router;
