const { Router } = require("express");
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../queries/usersQueries.js");

const usersController = Router();

usersController.get("/", async (request, response) => {
  try {
    const users = await getAllUsers();
    response.status(200).json({ data: users });
  } catch (err) {
    response.status(500).json({ error: err.message });
  }
});

usersController.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const user = await getUserById(Number(id));
    if (!user) {
      return response
        .status(404)
        .json({ error: `Cannot find user with ${id}` });
    }
    response.status(200).json({ data: user });
  } catch (err) {
    response.status(500).json({ error: err.message });
  }
});

usersController.post("/", async (request, response) => {
  try {
    const user = request.body;
    const persistedUser = await createUser(user);
    response.status(201).json({ data: persistedUser });
  } catch (err) {
    response.status(500).json({ error: err.message });
  }
});

usersController.put("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const user = request.body;
    const userFromDb = await getUserById(Number(id));
    if (!userFromDb) {
      return response
        .status(404)
        .json({ error: `Cannot find user with id ${id}` });
    }
    const updatedUser = await updateUser(Number(id), user);
    response.status(200).json({ data: updatedUser });
  } catch (err) {
    response.status(500).json({ error: err.message });
  }
});

usersController.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const userFromDb = await getUserById(Number(id));
    if (!userFromDb) {
      return response
        .status(404)
        .json({ error: `Cannot find user with id ${id}` });
    }
    const deletedUser = await deleteUser(Number(id));
    response.status(200).json({ data: deletedUser });
  } catch (err) {
    response.status(500).json({ error: err.message });
  }
});

module.exports = usersController;
