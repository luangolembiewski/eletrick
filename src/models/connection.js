const mysql = require('mysql2/promise');
const env = require("dotenv");
env.config();

const connection = mysql.createPool({
    host: process.env.HOST || 'localhost',
    user: process.env.USER || 'luan',
    password: process.env.PASSWORD || '123456', 
    database: process.env.DATABASE || 'eletrick',
    port: process.env.PORTDB || '3306'
    
});

module.exports = connection;