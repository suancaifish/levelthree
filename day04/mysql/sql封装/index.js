const {
    login
} = require('./db')

let result = login('user', {
    username: 'huahua',
    password: '1234'
});

if (result.lenght) {
    console.log(1);
} else {
    console.log(2);
}
// console.log(result);