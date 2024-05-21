const express = require("express");
const usersController = express.Router();
const { getAllUsers, getUserById } = require("../queries/usersQueries.js");

usersController.get("/", async (request, response) => {
  try {
    const users = await getAllUsers();
    response.status(200).json({ data: users });
  } catch (err) {
    response.status(500).json({ error: err.message });
  }
});

module.exports = usersController;
