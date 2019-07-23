var express = require('express');
var router = express.Router();

const {
    insert //增加
} = require('../libs/mdb')

router.use((req, res, next) => {
    // 全局添加
    res.append("Access-Control-Allow-Origin", "*");
    next();
});


/* GET users listing. */
router.post('/add', async function (req, res, next) {
    // res.send('respond with a resource');
    let {
        name,
        email,
        password
    } = req.body;

    let data = await insert('students', [{
        name,
        email,
        password
    }])

    console.log(data.result);
    if (data.result.ok) {
        res.json('添加成功')
    } else {
        res.json('添加失败')
    }

});

module.exports = router;