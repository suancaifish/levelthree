var fs = require('fs');
console.log(1);


var data = fs.readFileSync('../html/text.txt', {
    encoding: 'utf8',
    flag: 'r'
})
console.log(data);




fs.writeFile('../html/text.txt', 'hello world', (err) => {
    // if (err) throw err;
    // console.log('文件已被保存');

    if (err) {
        console.log('写入失败');
    } else {
        console.log('写入成功');
    }
});