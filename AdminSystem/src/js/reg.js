(function () {

    $('#con_l span').click(function () {
        let index = $(this).index();
        $('#con_l').children().removeClass('active');
        $('#con_l').children().eq(index).addClass('active');
        $('#con_main').children().attr('style', 'display: none');
        $('#con_main .hidebox').eq(index).attr('style', 'display: block');
    })

    $('#username').blur(function () {
        checkInput(username, 'username', inf1, {
            success: '账号验证通过',
            failure: '账号验证不通过',
            null: '账号不能为空',
        });
        if ($('#inf1').html() == '账号验证通过') {
            $.ajax({
                type: 'post',
                url: '../api/order.php',
                data: {
                    ordertype: 'verify',
                    order: `SELECT * FROM usename WHERE name='${$('#username').val()}'`
                },
                success: (str) => {
                    if (str == 'yes') {
                        $('#inf1').html('可以注册');
                        $('#inf1').attr('style', 'color: #58bc58');
                    }
                    else if (str == 'no') {
                        $('#inf1').html('该用户已被注册');
                        $('#inf1').attr('style', 'color: red');
                    }
                }
            })
        }
    })
    $('#password').blur(function () {
        checkInput(password, 'password', inf2, {
            success: '密码验证通过',
            failure: '密码验证不通过',
            null: '密码不能为空',
        });
    })
    $('#reg1').click(function () {
        if ($('#username').val() == false) {
            $('#inf1').html('账号不能为空');
            $('#inf1').attr('style', 'color: orange');
        }
        else if ($('#password').val() == false) {
            $('#inf2').html('密码不能为空');
            $('#inf2').attr('style', 'color: orange');
        }
        else if ($('#username').val() && $('#password').val()) {
            if ($('#inf1').html() == '可以注册' && $('#inf2').html() == '密码验证通过') {
                let order = '';
                if ($('#adminbtn').prop('checked')) {
                    order = `INSERT INTO usename(name,password,permit) VALUES ('${$('#username').val()}','${$('#password').val()}','admin')`;
                }
                else{
                    order = `INSERT INTO usename(name,password) VALUES ('${$('#username').val()}','${$('#password').val()}')`;
                }
                $.ajax({
                    type: 'post',
                    url: '../api/order.php',
                    data: {
                        ordertype: 'reg',
                        order: order
                    },
                    success: (str) => {
                        console.log(str);
                        if (str == 'success') {
                            alert('注册成功');
                            $('#username').val('');
                            $('#password').val('');
                            $('#inf1').html('');
                            $('#inf2').html('');
                            $('#adminbtn').prop('checked',false);
                        }
                    }
                })
            }
            else {
                alert('注册失败');
            }
        }
    })


})();