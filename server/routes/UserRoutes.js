const express = require("express");
const { UserRegister, UserDetails } = require("../controllers/UserController");
const user = express.Router();

user.route("/register").post(UserRegister);
user.route("/get-user").get(UserDetails);

module.exports = user;
