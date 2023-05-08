const mysql = require('mysql2/promise');
const dotenv = require("dotenv");
dotenv.config();

const connection = mysql.createPool({
    host: 'containers-us-west-210.railway.app',
    user: 'root',
    password: 'k2VFPgdxcWLd4hQuzVlC', 
    database: 'railway'
});

module.exports = connection;