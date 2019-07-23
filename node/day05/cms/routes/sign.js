var express = require('express');
var router = express.Router();
const {
    find,
    insert
} = require('../libs/mdb')
/* GET users listing. */

const {
    createToken, //加密
    decodeToken, //解码
    checkToken //校验
} = require('../libs/token')

router.use((req, res, next) => {
    // 全局添加
    res.append("Access-Control-Allow-Origin", "*");
    next();
});

router.post('/login', async function (req, res, next) {
    let {
        name,
        password
    } = req.body;
    // console.log(req.body);

    let data = await find('students', {
        name: `${name}`,
        password: `${password}`
    });
    let token = createToken({
        name: name
        // password: password
    }, 300)
    console.log(token);
    if (data.length) {
        res.json({
            result: '登录成功',
            lingpai: token
        });

    } else {
        res.json('登录失败');
    }
    // // res.send(JSON.stringify(data));

});



router.post('/reg', async function (req, res, next) {
    let {
        regname,
        regpassword,
        regemail
    } = req.body;
    console.log(req.body);

    let data = await insert('students', [{
        name: regname,
        password: regpassword
        // email: `${regemail}`
    }]);

    // console.log(data);
    if (data.insertedCount) {
        res.json("注册成功");
    } else {
        res.json("注册失败");
    }
    // res.json(data);


});

// router.get('/cookie', async function (req, res, next) {

//     res.json('cookie');
// });


module.exports = router;