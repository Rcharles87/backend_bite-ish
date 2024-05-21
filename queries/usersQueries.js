const db = require("../db/dbConfig.js")

const getAllUsers = async () =>{
    const users = await db.any("SELECT * FROM users");
    return users;
};

const getUserById = async (id) => {
    const user = await db.oneOrNone("SELECT * FROM user WHERE id = $1", [id]);
    return user
};

//create

//update

const deleteUser = async (id) => {
   
};


module.exports = {
    getAllUsers,
    getUserById
};