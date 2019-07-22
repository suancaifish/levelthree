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
} = require('./db');


//注册
router.post("/add", function (req, res, next) {
  let {
    username,
    password
  } = req.body;
  // console.log(req.body);
  find('users', username, (results) => {

    if (results == "no") {
      res.send('该用户已被注册');
    } else {
      add("users", username, password, (rest) => {
        if (rest) {
          rest = "注册成功";
          console.log(rest);
          res.send(rest);
        }
      });
    }
  })
});

//查找账户密码(登录)
router.post('/find', function (req, res, next) {
  let userPass = {
    huhua,
    password
  } = req.body;

  finds('users', userPass, (results) => {
    console.log(results);
    if (results == 'yes') {
      res.send('登录成功');
    } else {
      res.send('登录失败');
    }

  })

});

console.log("启动服务器123");

module.exports = router;