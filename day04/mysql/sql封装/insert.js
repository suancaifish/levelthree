const {
    insert
} = require('./db')

let result = insert('user', {
    id: 9,
    name: 'hehe'
});
console.log(result);