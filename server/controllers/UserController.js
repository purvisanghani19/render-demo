const UserModel = require("../model/UserModel");

const UserRegister = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(401).json({ result: "require email" });
  } else if (!password) {
    return res.status(401).json({ result: "require password" });
  }

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!isValidEmail(email)) {
    return res.status(400).json({ error: "Invalid email address" });
  }

  try {
    //cheack if email is already exists
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(409).json("Oops ! Email is already registered ");
    }

    // Create a new user--------
    const newUser = new UserModel({
      email,
      password,
    });
    console.log("newUser", newUser);
    const result = await newUser.save();
    res.status(201).json({
      message: "User registered successfully",
      result,
    });
  } catch (error) {
    res.status(401).json(error.message);
    console.log("userRegister error", error);
  }
};

const UserDetails = async (req, res) => {
  try {
    const userdata = await UserModel.find();
    console.log("userdata---", userdata);
    res.status(200).json({ userdata });
  } catch (error) {
    res.status(404).send(error);
  }
};

module.exports = {
  UserRegister,
  UserDetails,
};
