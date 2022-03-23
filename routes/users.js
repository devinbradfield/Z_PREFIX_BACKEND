const express = require("express");
const router = express.Router();
const { hash, compare } = require("bcrypt");
const saltRounds = 10;
const { createUser, getPasswordHashForUser, getIdForUser } = require("../database/controllers");
const db = require("../database/controllers");

router
  .route("/")
  .get((req, res) => {
    console.log("query:", req.query);
    if (req.query !== {}) {
      db.getUserQueries(req.query)
        .then((data) => res.send(data))
        .catch((err) => {
          console.error(err);
          res.status(404).json({ message: "Nothing returned; did you provide the correct parameters?" });
        });
    } else {
      db.getAllUsers()
        .then((data) => res.send(data))
        .catch((err) => {
          console.error(err);
          res.status(404).json({ message: "Nothing returned; did you provide the correct parameters?", err });
        });
    }
  })
  .delete((req, res) => {
    console.log(req.params.id);
    db.removeUser(req.params.id)
      .then((data) => res.status(200).json(data))
      .catch((err) => {
        console.error(err);
        res.status(404).json({ message: "Something went wrong." });
      });
  });

router.route("/:id").get((req, res) => {
  db.getUserByid(req.params.id)
    .then((data) => res.send(data))
    .catch((err) => {
      console.error(err);
      res.status(404).json({ message: "Nothing returned; did you provide the correct parameters?" });
    });
});

router.route("/signup").post((req, res) => {
  let { firstname, lastname, username, password } = req.body;
  hash(password, saltRounds).then((passwordhashed) => {
    createUser(firstname, lastname, username, passwordhashed)
      .then((data) => res.status(201).json("User created successfully!"))
      .catch((err) => res.status(500).json(err));
  });
});

router.route("/login").post((req, res) => {
  let { username, password } = req.body;
     getPasswordHashForUser(username)
      .then((passwordhashed) => {
        console.log("hash", passwordhashed);
        compare(password, passwordhashed)
          .then((isMatch) => {
            if (isMatch) {
              getIdForUser(username)
                .then((response) => res.status(201).json(response))
                .catch((err) => res.status(500).json(err));
            } else res.status(401).json("Incorrect Username or password supplied");
          })
          .catch((err) => {
            res.status(500).json(err);
          });
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  
});

module.exports = router;
