const mysql = require('mysql2');
const settings = require('../settings/settings.js');

// Connect to database
const db = mysql.createConnection(
    {
        host: "127.0.0.1",
        user: `${settings.username}`,
        password: `${settings.password}`,
        database: "election",
    },
);

module.exports = db;