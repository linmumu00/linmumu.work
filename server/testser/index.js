const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'biaobb123',
    database: 'mynew_schema'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to database');
        console.error(err);
        return;
    }
    console.log('Connected to database');
});



module.exports = connection;
