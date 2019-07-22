var express = require('express');
var router = express.Router();
const {
    find,
    insert
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



router.post('/reg', async function (req, res, next) {
    let {
        regname,
        regpw,
        regemail
    } = req.body;
    // console.log(req.body);

    let data = await insert('students', [{
        name: `${regname}`,
        password: `${regpw}`,
        email: `${regemail}`
    }]);

    // console.log(data);
    if (data.insertedCount) {
        res.json("注册成功");
    } else {
        res.json("注册失败");
    }
    // res.json(data);


});

module.exports = router;