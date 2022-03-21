const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));


app.get("/", (req, res) => {
  res.status(200).send("The FaceSpace.");
});

module.exports = app;
