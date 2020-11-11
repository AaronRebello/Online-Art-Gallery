const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = Schema({
  id: {
    type: String,
    required: true,
  },
  category_name: {
    type: String,
    required: true,
  },
});

module.exports = Category = mongoose.model("category", CategorySchema);