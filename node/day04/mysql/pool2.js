var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cjw1905'
});


pool.getConnection(function (err, connection) {
    if (err) throw err;
    connection.query('SELECT * FROM computer', function (error, results, fields) {
        console.log(results);
        connection.release();
        if (error) throw error;
    });
});