// var obj = require('./homeWork')
// // console.log(arr)
// // console.log(arr[0](9, 16))
// // console.log(obj)
// // console.log(obj.plus(99, 55))
// // console.log(obj.sub(99, 55))
// console.log(obj);

// var fs = require('fs');


// var data = fs.readFileSync('./html/text.txt', {
//     encoding: 'utf8',
//     flag: 'r'
// })

// console.log(data);


var step = () => {
    //注意大小写
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(1);
            resolve();
        }, 1000);
    });
}

var step2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(2)
            resolve()
        }, 1000)
    })
}

var step3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(3)

        }, 1000)
    })
}


// step().then(step2).then(step3)

(async () => {
    await step();
    await step2();
    step3();
    console.log(4);
})();