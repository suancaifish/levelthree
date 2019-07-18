var express = require('express');
var router = express.Router();
const {
    login
} = require('../../mysql/sql封装/db')


//
router.get('/find', function (req, res, next) {
    // 再找views里面index.jade
    // res.send('stu')

    res.append('Access-Control-Allow-Origin', '*');
    let {
        username,
        password
    } = req.body;

    let result = login('user', {
        username: username,
        password: password
    });
    
    if (result.lenght) {
        res.send('登陆成功');
    } else {
        res.send('登陆失败');
    }

});

module.exports = router;