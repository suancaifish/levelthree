const http = require('http');

const fs = require('fs');

http.get('http://wufazhuce.com/', (res) => {
    res.setEncoding('utf8');
    let rawData = ''; //空容器

    res.on('data', (chunk) => {
        rawData += chunk;
    });
    res.on('end', () => {
        fs.writeFile('../test.html', rawData, (err, data) => {})
    });
}).on('error', (e) => {
    console.error(`出现错误: ${e.message}`);
});
// console.log(http);


// http.get({
//     hostname: 'localhost',
//     port: 1905,
//     path: '/',
//     agent: false // 仅为此一个请求创建一个新代理。
// }, (res) => {
//     // 用响应做些事情。
//     console.log('sss');
// });