const mysql = require('mysql2');
const express = require('express');
const PORT = process.env.port || 3001;
const app = express();
var settings = require('./settings/settings.js');

// Express middleware
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

// COnnect to database
const db = mysql.createConnection(
    {
        host: '127.0.0.1',
        user: `${settings.username}`,
        password: `${settings.password}`,
        database: 'election'
    },
    console.log('Connected to the election database.')
);

app.use((req,res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
