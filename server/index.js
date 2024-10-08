require("dotenv").config();

const express = require("express");
const app = express();
const connectdb = require("./config/db");
const UserRoutes = require("./routes/UserRoutes");
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(
  cors({
    origin: "https://render-demo-client-6b5v.onrender.com",
    // origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use("/user", UserRoutes);

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
