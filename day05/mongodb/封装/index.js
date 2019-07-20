const {
    find,
    ObjectId,
    insert,
    Update,
    Remove

} = require('./mdb');
!(async () => {



    //查
    let data = await find('students', {
        email: '123@qq.com',
        password: 123
    });


    //增
    // let data = await insert('students', [{
    //     name: '酸菜鱼',
    //     age: '17'
    // }]);

    //改
    // let data = await Update('students', [{
    //     a: 1
    // }, {
    //     name: 'xinsong',
    //     age: 27,
    //     skills: 'fly'
    // }])

    // let data = await Remove('students', {
    //     a: '16'
    // })


    console.log(data);










})();