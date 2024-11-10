const express = require("express");
const { connectDB } = require("./config/db");
const app = express();

connectDB();

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});
