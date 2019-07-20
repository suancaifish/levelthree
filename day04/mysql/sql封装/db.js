var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cjw1905'
});

// 查询===============
const getConnection = () => {
    return new Promise((resolve, reject) => {
        pool.getConnection(function (err, connection) {
            if (err) {
                reject(err);
                throw err;
            } else {
                resolve(connection);
            }
        })
    });
}

const query = (connection, sql, params) => {
    return new Promise((resolve, reject) => {

        connection.query(sql, [params ? params : ''], function (error, results, fields) {
            console.log(results);
            // When done with the connection, release it.
            connection.release();

            // Handle error after the release.
            if (error) {
                reject(error);
                throw error;
                s
            } else {
                resolve(results)
            }

            // Don't use the connection here, it has been returned to the pool.
        });
    });
}


const find = async (table, params) => {
    const connection = await getConnection();
    // if()
    if (params) {
        return await query(connection, `SELECT * FROM ${table} where ?`, params);
    } else {
        return await query(connection, `SELECT * FROM ${table} `, null);
    }
}

// 增加===============
const insertgetConnection = () => {
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
}

const insertquery = (connection, sql, params) => {
    return new Promise((resolve, reject) => {
        connection.query(sql, params, function (error, results, fields) {
            console.log(results);
            connection.release();
            if (error) {
                reject(error);
                throw error;
            } else {
                resolve(results)
            }
        });
    });
}


const insert = async (table, params) => {
    let connection = await insertgetConnection();
    return await insertquery(connection, `INSERT INTO ${table} VALUES (${params.id},'${params.name}')`);
}


// 删除================
const delgetConnection = () => {
    return new Promise((resolve, reject) => {
        pool.getConnection(function (err, connection) {
            if (err) {
                reject(err);
                throw err;
            } else {
                resolve(connection)
            }
        });
    });
}

const delquery = (connection, sql, params) => {
    return new Promise((resolve, reject) => {
        connection.query(sql, params, function (error, results, fields) {
            console.log(results);
            connection.release();
            if (error) {
                reject(error);
                throw error;
            } else {
                resolve(results)
            }
        });
    });
}

const del = async (table, params) => {
    let connection = await delgetConnection();
    let valname = Object.keys(params)[0];
    let name = params[Object.keys(params)[0]];
    await delquery(connection, `DELETE FROM ${table} WHERE ${valname}='${name}'`);
}
//改================

const updategetConnection = () => {
    return new Promise((resolve, reject) => {
        pool.getConnection(function (err, connection) {
            if (err) {
                reject(err);
                throw err;
            } else {
                resolve(connection)
            }
        });
    });
}

const updatequery = (connection, sql, params) => {
    return new Promise((resolve, reject) => {
        connection.query(sql, params, function (error, results, fields) {
            console.log(results);
            connection.release();
            if (error) {
                reject(error);
                throw error;
            } else {
                resolve(results)
            }
        });
    });
}

const update = async (table, params) => {
    let connection = await updategetConnection();
    await updatequery(connection, `UPDATE ${table} SET ${Object.keys(params)[0]}='${params[Object.keys(params)[0]]}' WHERE ${Object.keys(params)[1]}=${params[Object.keys(params)[1]]}`);
}



// ===========login
const logingetConnection = () => {
    return new Promise((resolve, reject) => {
        pool.getConnection(function (err, connection) {
            if (err) {
                reject(err);
                throw err;
            } else {
                resolve(connection);
            }
        })
    });
}

const loginquery = (connection, sql, params) => {
    return new Promise((resolve, reject) => {

        connection.query(sql, [params ? params : ''], function (error, results, fields) {
            console.log(results);
            // When done with the connection, release it.
            connection.release();

            // Handle error after the release.
            if (error) {
                reject(error);
                throw error;
                s
            } else {
                resolve(results)
            }

            // Don't use the connection here, it has been returned to the pool.
        });
    });
}


const login = async (table, params) => {
    const connection = await logingetConnection();
    // if()
    if (params) {
        return await loginquery(connection, `SELECT * FROM user WHERE name='${params.username}' AND PASSWORD=${params.password}`);
    } else {
        return await loginquery(connection, `SELECT * FROM ${table} `, null);
    }
}


module.exports = {
    find, //查
    insert, //增
    del, //删 
    update,
    login
}