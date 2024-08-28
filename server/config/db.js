const mongoose = require("mongoose");

const mongoDBUrl = process.env.MONGO_URL;
const databaseName = process.env.DATABASE;

const connectdb = async () => {
  try {
    const urlWithDatabase = `${mongoDBUrl}${databaseName}`;
    await mongoose.connect(urlWithDatabase);
    console.log("db connect successfully");
  } catch (error) {
    console.log(error);
    process.exit(0);
  }
};

module.exports = connectdb;
