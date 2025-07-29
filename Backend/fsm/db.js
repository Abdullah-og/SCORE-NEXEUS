const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',       // Replace with your MySQL host
  user: 'your_username',   // Replace with your MySQL username
  password: 'your_password', // Replace with your MySQL password
  database: 'your_database', // Replace with your MySQL database name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool.promise();
