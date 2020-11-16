// const { json } = require("body-parser");
const express = require("express");
const router = express.Router();
const Art = require("../models/Art");

router.get("artist/arts", (req, res) => {
  Art.find({}).then((art) => {
    if (art.length > 0) {
      res.status(200).json(art);
    } else {
      res.status(404).json({ msg: "no art found" });
    }
  });
});

router.post("artist/arts", (req, res) => {
  const newArt = Art({
    title: req.body.title,
    image: req.body.image,
    description: req.body.description,
  });
  newArt
    .save()
    .then((art) => {
      res.status(200).json({ msg: " successfully added" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "something went wrong" });
    });
});

router.put("artist/arts/edit/:id", (req, res) => {
  Art.findByIdAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        title: req.body.title,
        image: req.body.image,
        description: req.body.description,
      },
    }
  )
    .then((art) => {
      res.status(200).json(art);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("artist/arts/delete/:id", (req, res) => {
  Art.findByIdAndDelete({ _id: req.params.id })
    .then((art) => {
      res.status(200);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
