const express = require("express");
const morgan = require("morgan");
const users = require("./routes/users");
const posts = require("./routes/posts");
const db = require("./database/controllers");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));
app.use("/users", users);
app.use("/posts", posts);

app.get("/", (req, res) => {
  res.status(200).send("The FaceSpace.");
});

module.exports = app;
