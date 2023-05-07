const mysql = require('mysql2/promise');
const dotenv = require("dotenv");
dotenv.config();

const connection = mysql.createPool({
    host: '6128',
    user: 'root',
    password: 'De0opgarg8NU0mNeQq1j', 
    database: 'railway'
});

module.exports = connection;