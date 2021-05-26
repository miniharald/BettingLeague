
const mysql = require("mysql2");

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PW,
    database: process.env.DB_NAME,
    namedPlaceholders: true,
});

module.exports = pool;

pool.query("SELECT 1", (error) => {
    if (!error) console.log("connected to database!");
})

async function query(args) {
    return new Promise((resolve, reject) => {
        pool.query(args, (error, rows) => !error ? resolve(rows) : reject(error));
    });
}

module.exports = { query }