const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "todo_app",
});

const connectDB = () => {
  db.connect((err) => {
    if (err) {
      console.error("Error connecting to the database:", err);
      process.exit(1);
    }
    console.log("Connected to the MySQL database");
  });
};

module.exports = { connectDB };
