const { response } = require("express");
const getUserById = require("../queries/usersQueries");

const USER_FIELDS = [
  "first_name",
  "last_name",
  "user_name",
  "password",
  "phone_num",
];

const validateIdMiddleware = (request, response, next) => {
  const { id } = request.params;
  if (!Number.isInteger(Number(id)) || Number(id) < 1) {
    return response
      .status(400)
      .json({ error: `id param must be a positive integer; received ${id}.` });
  } else {
    request.id = Number(id);
    next();
  }
};

const validateUserMiddleware = (request, response, next) => {
  const user = request.body;

  for (const field of USER_FIELDS) {
    if (!user.hasOwnProperty(field) || typeof user[field] !== "string") {
      return response.status(400).json({
        error: `Field ${field} is not present or wrong type, recieved ${user[field]}`,
      });
    }
  }

  for (const field in user) {
    if (!USER_FIELDS.includes(field)) {
      return response
        .status(400)
        .json({ error: `Field ${field} not allowed.` });
    }
  }
  request.user = user;
  next();
};

const validateUserExistsMiddleware = async (request, response, next) => {
  const { id } = request;

  const user = await getUserById(id);
  if (!user) {
    return response
      .status(404)
      .json({ error: `Cannot find user with id ${id}.` });
  }
  request.user = user;
  next();
};

module.exports = {
    validateIdMiddleware,
    validateUserMiddleware,
    validateUserExistsMiddleware
}
