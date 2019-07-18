const {
    update
} = require('./db')

let result = update('user', {
    name: '如花',
    id: 4
});
console.log(result);