const express = require("express");
const cors = require("cors");
const usersController = require("./controllers/usersController.js");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/users", usersController);

app.get("/", (req, res) => {
  res.status(200).json({ data: "Service is running" });
});


module.exports = app;
