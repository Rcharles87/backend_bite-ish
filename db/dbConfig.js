require("dotenv").config();
const pgp = require("pg-promise")();


// const databaseUrl = process.env.DB_URL;

// const connectionString = process.env["DB_URL"];
// if(!connectionString){
//     throw new Error("No connection string; did you set process.env.DB_URL");
// }

const cn = {
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_DATABASE,
    user: process.env.PG_USER
    // connectionString,
    // allowExitOnIdle: true,
    // max: 30,
};

const db = pgp(cn)

module.exports = db;