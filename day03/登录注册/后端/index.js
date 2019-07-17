var express = require('express');
var fs = require('fs');
// 解析请求体的模块
var bodyParser = require('body-parser');
var app = express();
// 该app对象调用其他模块来去处理请求和响应
// app.use全局使用
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use((req, res, next) => {
    // 全局添加
    res.append('Access-Control-Allow-Origin', '*');
    next();
})

app.get('/index', (req, res) => {
    res.send('hello world!')
})



app.post('/login', (req, res) => {
    res.append('Access-Control-Allow-Origin', '*');
    // 前端给后端 request
    console.log(req.body);

    res.send('post请求');
})


app.get('/list', async (req, res) => {
    let data = await new Promise((resolve, reject) => {
        fs.readFile('./list.json', (err, data) => {
            err ? reject(err) : resolve(data);
        })
    })
    res.send(data);
})
app.listen(10251);
console.log('启动服务器9998');