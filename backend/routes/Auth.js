const express = require("express");
const router = express.Router();

const passport = require("passport");
const jwt = require("jsonwebtoken");

const bcrypt = require("bcryptjs");
const User = require("../models/Users");
const appConfig = require("../config/appConfig");
const{ ensureGuest }= require("../Helper/authHelper");

router.post("/login", ensureGuest, (req, res) => {
  User.findOne({ email: req.body.email }).then((user) => {
    if (!user) {
      res.status(400).json({ msg: "user with this email doesn't exist" });
    } else {
      bcrypt.compare(req.body.password, user.password, function (err, isMatch) {
        // console.log(isMatch);
        if (isMatch) {
          const payload = {
            _id: user._id,
            name: user.name,
            email: user.email,
            country: user.country,
          };
          jwt.sign(payload, appConfig.secretOrKey, (err, token) => {
            res.json({
              success: true,
              token: " bearer" + token,
            });
            // console.log(token)
          });
        } else {
          res.status(400).json({ msg: "password not matched" });
        }
      });
    }
  });
});

router.post("/register", (req, res) => {
  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      res.status(400).json({ msg: "user with this email already exists" });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        country: req.body.country,
        password: req.body.password,
      });
      bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(newUser.password, salt, function (err, hash) {
          newUser.password = hash;
          newUser.save().then((user) => {
            res.status(200).json({ msg: "successfully registered" });
            // console.log(user);
          });
        });
      });
    }
  });
});

router.get(
  "/verify-user",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json(req.user);
  }
);

module.exports = router;
