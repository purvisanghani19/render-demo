const mongoose = require("mongoose");

const UserModel = new mongoose.Schema({
  email: {
    type: String,
    require: [true, "email is required"],
    unique: true,
  },
  password: {
    type: String,
    Number,
    require: [true, "password is required"],
  },
});

module.exports = mongoose.model("user", UserModel);
