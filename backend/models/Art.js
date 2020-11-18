const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ArtSchema = Schema({
  categoryId: {
    type: String,
    // todo and required
  },
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Art = mongoose.model("art", ArtSchema);
