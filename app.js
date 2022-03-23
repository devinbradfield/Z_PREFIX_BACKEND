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

myUrl = {
  development: `postgres://postgres:docker@localhost:5432/facespace`,
  production:`https://facespace1.herokuapp.com/`,
  }[process.env.NODE_ENV || "development"]

app.get("/", (req, res) => {
  res.status(200).send("The FaceSpace.");
});

module.exports = app;
