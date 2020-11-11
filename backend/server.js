const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 5000;

const mongoURI = require("./config/keys");
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => {
    console.log("ArtGallery mongoDB is connected");
  })
  .catch((err) => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

passport.initialize();

app.use(cors());

const Auth = require("./routes/Auth");
const Art = require("./routes/Art");

app.use("/", Auth, Art);

app.listen(PORT, () => {
  console.log(`port is running on ${PORT}`);
});
