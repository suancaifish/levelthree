var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cjw1905'
});


const getConnection = () => {
    return new Promise((resolve, reject) => {
        pool.getConnection(function (err, connection) {
            if (err) {
                reject(err);
                throw err;
            } else {
                resolve(connection);
            }
        });
    });
};

const query = (connection, sql, params) => {
    return new Promise((resolve, reject) => {
        connection.query(sql, [params ? params : ""], function (
            error,
            results,
            fields
        ) {
            // console.log(results);
            connection.release(); //释放

            if (error) {
                reject(error);
                throw error;
            } else {
                resolve(results);
            }
            // console.log('The solution is: ', results);
        });
    });
};

//查找用户或全部查找(注册)
const find = async (tableName, usernames, callback) => {
    const connection = await getConnection();
    if (usernames) {
        let results = await query(
            connection,
            `SELECT * FROM ${tableName} where name ='${usernames}'`,
        );
        if (results.length) {
            callback('no'); //账户存在，不给注册
        } else {
            callback('yes'); //账户不存在，可以注册
        }
    } else {
        let results = await query(connection, `SELECT * FROM ${tableName}`, null);
        callback(results);
    }
};

//查找用户和密码（登录）
const finds = async (tableName, userPass, callback) => {
    console.log(userPass);
    const connection = await getConnection();
    let results = await query(
        connection,
        `SELECT * FROM ${tableName} where name ='${userPass.name}' and password = '${userPass.password}'`,
    );
    if (results.length) {
        callback('yes'); //查询匹配，可以登录
    } else {
        callback('no'); //查询不到，不给登录
    }
};

//增加
const add = async (tableName, name, password, callback) => {
    const connection = await getConnection();

    let results = await query(
        connection,
        `INSERT INTO ${tableName}(name,password) VALUES('${name}',${password})`
    );
    callback(results);

};


//删除
const dalect = async (tableName, name, callback) => {
    const connection = await getConnection();

    let results = await query(
        connection,
        `DELETE FROM ${tableName} WHERE name = '${name}'`
    );
    callback(results);

};

//更改
const change = async (tableName, name, password, callback) => {
    const connection = await getConnection();

    let results = await query(
        connection,
        `UPDATE ${tableName} SET password = ${password} WHERE name = '${name}'`
    );
    callback(results);

};

module.exports = {
    find,
    add,
    dalect,
    change,
    finds
};