require("dotenv").config();
const path = require("path");
const generateHTML = require("./generateHTML");
const express = require("express");
const app = express();

app.use("/public", express.static("public"));

app.get("*", (req, res) => {
  res.set("Content-Type", "text/html");
  res.send(generateHTML());
});

app.listen(process.env.PORT, () => {
  console.log(
    `Levelup.Animate placeholder listening on port ${process.env.PORT}!`
  );
});
