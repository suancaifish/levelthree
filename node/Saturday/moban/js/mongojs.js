$('#setbtn').click(() => {
    let name = $('#required').val().trim();
    let email = $('#email').val().trim();
    let password = $('#password').val().trim();


    $.ajax({
        dataType: 'JSON',
        type: 'post',
        data: {
            name,
            email,
            password
        },
        url: 'http://localhost:3000/set/add'
    }).done((result) => {
        console.log(result);
    })
})