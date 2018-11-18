// Set up MySQL connection.
var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Murphy1!",
  database: "glutton_db"
});

con.connect(function(err) {
  if (err) {
    console.log("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + con.threadId);
});

module.exports = con;