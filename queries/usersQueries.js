const db = require("../db/dbConfig.js");

const getAllUsers = async () => {
  const users = await db.any("SELECT * FROM users");
  return users;
};

const getUserById = async (id) => {
  const user = await db.oneOrNone("SELECT * FROM users WHERE id = $1", [id]);
  return user;
};

//create
const createUser = async (user) => {
  const newUser = await db.oneOrNone(
    "INSERT INTO users (first_name, last_name, user_name, password, phone_num) VALUES ($1, $2, $3, $4, $5) RETURNING *",
    [user.firstName, user.lastName, user.userName, user.password, user.phoneNum]
  );
  return newUser;
};

//update
const updateUser = async (id, user) => {
  const updatedUser = await db.oneOrNone(
    "UPDATE users SET first_name = $1, last_name = $2, user_name = $3, password = $4, phone_num = $5 WHERE id = $6 RETURNING *",
    [
      user.firstName,
      user.lastName,
      user.userName,
      user.password,
      user.phoneNum,
      id,
    ]
  );
  return updatedUser;
};

const deleteUser = async (id) => {
  const deletedUser = await db.oneOrNone(
    "DELETE FROM users WHERE id = $1 RETURNING *",
    id
  );
  return deletedUser;
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
