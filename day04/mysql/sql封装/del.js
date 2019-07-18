const {
    del
} = require('./db')

let result = del('user', {
    id: 8
});
console.log(result);