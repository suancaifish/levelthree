var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    // 数据库名字
    database: 'cjw1905'
});
// 执行连接
connection.connect();

connection.query('SELECT * FROM computer', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
});
// 执行关闭
connection.end();