var {
    createServer
} = require('http');

createServer((req, res) => {
    // res.setHeader('Access-Control-Allow-Origin', '*');

    // res.setHeader('name', 'suancaiyu');
    // res.write();
    res.end('hello world');
}).listen(9527);
console.log('启动服务器');