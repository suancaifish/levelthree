var {
    createServer
} = require('htttp');
var {
    appendFile
} = require('fs');



createServer(async (req, res) => {
    let message = decodeURI(req.url.split('=')[1]);
    console.log(decodeURI(req.url.split('=')[1]));
}).listen(9527);