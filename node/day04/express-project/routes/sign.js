// var express = require('express');
// var router = express.Router();

// const {
//     finds
// } = require('../libs/db')
// router.use((req, res, next) => {
//     // 全局添加
//     res.append("Access-Control-Allow-Origin", "*");
//     next();
// });

// /* GET users listing. */
// router.post('/login', async function (req, res, next) {
//     // res.send('respond with a resource');
//     // {
//     //     username: 'huahua',
//     //     password: '123'
//     // }
//     let {
//         name,
//         password
//     } = req.body;
//     // console.log(req.body);
//     // console.log(aa);
//     let result = finds('user', {
//         name,
//         password
//     }, (results) => {
//         console.log(results);
//         if (results == 'yes') {
//             res.json('登录成功');
//         } else {
//             res.json('登录失败');
//         }

//     });
//     // res.send(result);
//     // console.log(result);


// });



var express = require("express");
var router = express.Router();
// var app = express();
var bodyParser = require("body-parser");

router.use(
    bodyParser.urlencoded({
        extended: false
    })
);

router.use((req, res, next) => {
    // 全局添加
    res.append("Access-Control-Allow-Origin", "*");
    next();
});

var {
    finds,
    find,
    add
} = require('../libs/db');


//查找账户密码(登录)
router.post('/sign', function (req, res, next) {
    let userPass = {
        name,
        password
    } = req.body;
    // console.log(666);
    finds('user', userPass, (results) => {
        // console.log(results);
        if (results == 'yes') {
            res.json('登录成功');
        } else {
            res.json('登录失败');
        }

    })
    // res.send('123')

});



//注册
router.post("/add", function (req, res, next) {
    let {
        regname,
        regpassword
    } = req.body;
    // console.log(req.body);
    find('user', regname, (results) => {

        if (results == "no") {
            res.json('该用户已被注册');
        } else {
            add("user", regname, regpassword, (rest) => {
                if (rest) {
                    // rest = "注册成功";
                    // console.log(rest);
                    res.json("注册成功");
                } else {
                    res.json("注册失败");
                }
            });
        }
    })
});

module.exports = router;