const mongoose = require("mongoose");

const mongoDBUrl = process.env.MONGO_URL;

const connectdb = async () => {
  try {
    const urlWithDatabase = `${mongoDBUrl}`;
    await mongoose.connect(urlWithDatabase);
    console.log("db connect successfully");
  } catch (error) {
    console.log(error);
    process.exit(0);
  }
};

module.exports = connectdb;
