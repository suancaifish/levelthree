const {
    finds
} = require('./db')

let aa = {
    username: 'huahua',
    password: '123'
}

// console.log(aa.username);
finds('user', {
    username: 'huahua',
    password: '123'
}, (data) => {
    console.log(data);
})
// console.log(data);