const express = require("express");
const router = express.Router();
const db = require("../database/controllers"); 

router
    .route("/")
    .get((req,res) => {
        db.getAllPosts()
        .then((data) => res.send(data))
        .catch((err) => {
            console.error(err)
            res.status(404).json({message: "Nothing returned; ddid you provide the correct parameters?"})
        })
    })
    .post((req,res) =>{
        db.postPost(req.body)
        .then((data) => res.status(201).json(data))
        .catch((err) => {
        console.error(err)
        res.status(404).json({message: "Nothing returned; ddid you provide the correct parameters?"})
        })
    })

    router
  .route("/:userid")
  .get((req, res) => {
    db.getPostByUserid(req.params.userid)
      .then((data) => res.send(data))
      .catch((err) => {
        console.error(err);
        res.status(404).json({ message: "Nothing returned; did you provide the correct parameters?" });
      });
  })
  router
  .route("/:id")
  .get((req, res) => {
    db.getPostByUserid(req.params.id)
      .then((data) => res.send(data))
      .catch((err) => {
        console.error(err);
        res.status(404).json({ message: "Nothing returned; did you provide the correct parameters?" });
      });
  })
  .put((req, res) => {
    db.updatePost(req.params.id, req.body)
      .then((data) => res.status(200).json(data))
      .catch((err) => {
        console.error(err);
        res.status(404).json({ message: "Something went wrong." });
      });
  })
  .patch((req, res) => {
    console.log("req.params id", req.params.id);
    console.log("req.body", req.body.updatePost);

    db.updatePost(req.params.id, req.body.updatePost)
      .then((data) => res.status(200).json(data))
      .catch((err) => {
        console.error(err);
        res.status(404).json({ message: "Something went wrong." });
      });
  })
  .delete((req, res) => {
    console.log(req.params.id);
    db.removePost(req.params.id)
      .then((data) => res.status(200).json(data))
      .catch((err) => {
        console.error(err);
        res.status(404).json({ message: "Something went wrong." });
      });
  });

  module.exports = router;
