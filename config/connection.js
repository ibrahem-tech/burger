const mysql = require('mysql')
const dotenv = require('dotenv');
dotenv.config();
var connection;

if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: '127.0.0.1',
        port: 3306,
        user: 'root',
        password: process.env.PASSWORD,
        database: 'burgers_db'
    })
}


connection.connect((e) => {
    if(e) throw e
    
    console.log('Connected!')
});

module.exports = connection;
