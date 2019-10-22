(function () {

    let username = document.getElementById('username');
    let password = document.getElementById('password');
    let regbtn = document.getElementById('regbtn');
    let loginbtn = document.getElementById('loginbtn');
    let inf1 = document.getElementById('inf1');
    let inf2 = document.getElementById('inf2');

    let oldname = getCookie('name');
    if (oldname) {
        alert('您已登录,系统将自动跳转至首页');
        location.href = 'main.html';
    }

    loginbtn.onclick = function () {
        if (username.value && password.value) {
            ajax({
                type: 'post',
                url: '../api/order.php',
                data: {
                    ordertype: 'login',
                    order: `SELECT * FROM usename WHERE name='${username.value}' AND password='${password.value}'`,
                },
                success: (str) => {
                    if (str == 'allow') {
                        setCookie('name', username.value, 3);
                        inf1.innerHTML = '';
                        inf2.innerHTML = '';
                        alert('登录成功');
                        let url = localStorage.url;
                        if (!url) {
                            location.href = 'main.html';
                        } else {
                            location.href = url;
                        }
                        console.log(url)
                    }
                    else if (str == 'notallow') {
                        inf1.innerHTML = '账号或密码错误';
                        getStyle(inf1, 'color', 'red');
                    }
                }
            })
        }
    }

    regbtn.onclick = function () {
        location.href = 'reg.html';
        username.value = '';
        password.value = '';
        removeCookie('name');
    }

})();