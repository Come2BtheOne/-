(function () {

    window.onload = function () {
        $('.connect p').eq(0).animate({ 'left': '0%' }, 600);
        $('.connect p').eq(1).animate({ 'left': '0%' }, 400);
    }

    $('#submit').click(function () {
        let usn = $('#username').val();
        let psw = $('#password').val();
        if (!usn || !psw) {
            $('#ts').html('用户名或密码不能为空~');
            is_show();
        }
        else {
            $.ajax({
                type: 'post',
                url: '../api/order.php',
                data: {
                    ordertype: 'isadmin',
                    order: `SELECT * FROM usename WHERE name= "${usn}" AND permit = 'admin'`
                },
                success: (str) => {
                    if (str == 'allow') {
                        login();
                    }
                    else {
                        $('#ts').html('不是管理员账号，无法获取权限！');
                        is_show();
                    }
                }
            })
        }
    });

    function login() {
        $.ajax({
            type: 'post',
            url: '../api/order.php',
            data: {
                ordertype: 'login',
                order: `SELECT * FROM usename WHERE name='${$('#username').val()}' AND password='${$('#password').val()}'`,
            },
            success: (str) => {
                if (str == 'allow') {
                    $('#ts').html('登录成功！');
                    escape();
                }
                else {
                    $('#ts').html('账号或密码错误！');
                    is_show();
                }
            }
        })
    }

    function escape() {
        is_show();
        $('.btn').click(function () {
            is_hide();
            // setCookie('name', $('#username').val());
            sessionStorage.name = $('#username').val();
            location.href = '../admin.html';
        })
    }

    $('.btn').click(function () {
        is_hide();
    })

    function is_hide() {
        $('.alert').animate({ 'top': '-40%' }, 500);
        $('.cover').attr('style', 'display:none');
    };
    function is_show() {
        $('.alert').show().animate({ 'top': '45%' }, 500);
        $('.cover').attr('style', 'display:block');
    };

})();