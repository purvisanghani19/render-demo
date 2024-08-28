require("dotenv").config();

const express = require("express");
const app = express();
const connectdb = require("./config/db");
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(
  cors({
    origin: "https://render-demo-client-6b5v.onrender.com",
    credentials: true,
  })
);

app.get("/get-data", (req, res) => {
  res.status(200).json({ res: "working" });
});

//db-port------------------------
connectdb()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log("Failed to connect to database", err);
  });
