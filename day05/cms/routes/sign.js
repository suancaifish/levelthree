var express = require('express');
var router = express.Router();
const {
    find
} = require('../libs/mdb')
/* GET users listing. */

router.use((req, res, next) => {
    // 全局添加
    res.append("Access-Control-Allow-Origin", "*");
    next();
});

router.post('/login', async function (req, res, next) {
    let {
        email,
        password
    } = req.body;
    // console.log(req.body);

    let data = await find('students', {
        email: `${email}`,
        password: `${password}`
    });
    if (data.length) {
        res.json("登录成功");
    } else {
        res.json("登录失败");
    }
    // // res.send(JSON.stringify(data));

});

module.exports = router;