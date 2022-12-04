const mongoose = require("mongoose");
const schema = mongoose.Schema({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
  gender: {
    type: String,
  },
  email: {
    type: String,
  },
  isActive: {
    type: Boolean,
  },
});

const userModel = mongoose.model("user", schema);

module.exports = userModel;
