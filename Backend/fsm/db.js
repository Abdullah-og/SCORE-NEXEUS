const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',      
  user: 'root', 
  password: 'abdullah@321',
  database: 'scorenexus'
});

db.connect((err) => {
  if (err) {
    console.error('MySQL Connection Error:', err);
    return;
  }
  console.log('Connected to MySQL Database ');
});

module.exports = db;
