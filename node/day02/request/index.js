// const request = require('request');
const fs = require('fs');


var request = require('request');

const jsdom = require('jsdom');
const {
    JSDOM
} = jsdom;
request('http://www.fengniao.com/', function (error, response, body) {
    // console.log('error:', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the Google homepage.
    // fs.writeFile('./baidu.html', body, (err, data) => {
    //     if (err) throw err;
    //     console.log('写入成功');
    // })

    const {
        window
    } = new JSDOM(body);
    const $ = require("jquery")(window);
    $('img').each((index, ele) => {
        let src = $(ele).attr('src')
        console.log(src)
        request(encodeURI($(ele).attr('src'))).pipe(fs.createWriteStream(`./imgs/${index}.png`)); //request的一个方法
    })

});