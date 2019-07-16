const cheerio = require('cheerio')
const fs = require('fs');
var request = require('request');
// const $ = cheerio.load('<h2 class="title">Hello world</h2>')



request('http://www.win4000.com/meitu.html', function (error, response, body) {
    const $ = cheerio.load(body);
    $('img').each((index, ele) => {
        let src = $(ele).attr('src');
        console.log(src);
        request(encodeURI($(ele).attr('src'))).pipe(fs.createWriteStream(`./img/${index}.jpg`));
    })
});