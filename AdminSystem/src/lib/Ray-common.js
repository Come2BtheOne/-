/*
 * @Description: 
 * @Author: 子锐
 * @Date: 2019-07-23 17:47:11
 * @LastEditTime: 2019-08-08 10:09:47
 * @LastEditors: Please set LastEditors
 */


//查找ID 
function getid(id) {
    return document.getElementById(id);
}


//累乘函数
function x(num) {
    var val = 1;
    for (i = 1; i <= num; i++) {
        val = val * i;
    }
    return val;
}



//生成随机颜色
function ranColor(color) {
    if (color == 16) {
        var html = '1234567890abcdef';
        var res = '#'
        for (var i = 0; i < 6; i++) {       //获取6个16进制数字
            var k = parseInt(Math.random() * 16);   //不断获取0-15的随机整数
            var res = res + html[k];        //html[k]代表html里面的第k个字符
        }
    }
    else if (color == 'rgb') {
        var r = parseInt(Math.random() * 256);
        var g = parseInt(Math.random() * 256);
        var b = parseInt(Math.random() * 256);
        var res = 'rgb(' + r + ',' + g + ',' + b + ')';
    }
    return res;
}



//生成四位数随机验证码
function ranCode() {
    var html = '0123456789zxcvbnmasdfghjklqwertyuiopZXCVBNMASDFGHJKLQWERTYUIOP';
    var res = '';
    for (var i = 0; i < 4; i++) {
        var k = parseInt(Math.random() * (html.length));
        var res = res + html[k];
    }
    return res;
}


//获取任意范围的随机数
function ranNum(min, max) {
    //1 * max - min + min
    return parseInt(Math.random() * (max - min + 1)) + min;//0-1
}



//获取实参里面最大的值并返回
function ranCom() {
    var max = arguments[0];
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] >= res) {
            max = arguments[i];
        }
    } return max;
}


//判断数组里有没有这个数
function hasNum(arr, num) {
    return arr.indexOf(num);
}




//去重函数，输入一个数字数组，去掉数组中重复项
function norepeat(arr) {
    var newArr = [];
    arr.forEach(function (item) {
        if (newArr.indexOf(item) == -1) {
            newArr.push(item);
        }
    })
    return newArr;
}



//过滤关键词函数
function filterStr(str) {
    var arr = ['操', 'fuck', '垃圾', '妈蛋', '小学生']; //声明要过滤的词
    for (var i = 0; i < arr.length; i++) {   //用循环把输入的内容一遍一遍地过滤，每次过滤arr里的一个词
        var word = arr[i];
        var reg = new RegExp(word, 'ig'); //用构造函数的方法声明正则
        var str = str.replace(reg, '***');
    }
    return str;
}


//补零函数（07：26：09）
function toDb(num) {
    if (num < 10) {
        return '0' + num;
    } else {
        return '' + num;
    }
}


//把参数变成对象
function strToObj(str) {//name=laoxie&age=18&sex=male
    var obj = {};
    var arr = str.split('&');//["name=laoxie", "age=18", "sex=male"]
    arr.forEach(function (item) {
        var arr2 = item.split('=');
        obj[arr2[0]] = arr2[1];
    });
    return obj;
}


//把对象变参数
function objToStr(obj) {
    var str = '';
    for (var key in obj) {
        str += key + '=' + obj[key] + '&';
    }
    return str.slice(0, -1);
}


//设置和获取当前样式的属性值。输入的形参格式必须为(元素,属性，属性值)或(元素，属性),而且一次只能拿到一个属性值
function css() {
    if (arguments.length == 2) {
        //获取样式
        if (getComputedStyle(arguments[0], false)) {
            //高级浏览器
            return getComputedStyle(arguments[0], false)[arguments[1]];
            //getComputedStyle(h1, false)['top'];
        } else {
            //IE8-
            return arguments[0].currentStyle[arguments[1]];
        }
    } else if (arguments.length == 3) {
        //设置样式  ele.style.width = '200px'
        arguments[0].style[arguments[1]] = arguments[2];
    }
}


//                           时间篇

//毫秒数(纪元时间)-转成  xx年xx月xx日xx时xx分xx秒
function msecToDate(msec) {
    var date = new Date(msec);//毫秒转成日期对象 Thu Nov 14 2019 08:00:00 GMT+0800 (中国标准时间)
    //日期对象转换成年月日时分秒
    var year = date.getFullYear();//年
    var month = date.getMonth() + 1;//月
    var day = date.getDate();//日
    var hour = date.getHours();//时
    var mins = date.getMinutes();//分
    var sec = date.getSeconds();//秒
    return `${year}-${month}-${day}-${hour}-${mins}-${sec}`;

}


//获取当前时间戳(日期对象)及时间,返回数组
function getNewDate() {
    var date = new Date();
    var year = date.getFullYear();//年
    var month = date.getMonth() + 1;//月
    var day = date.getDate();//日
    var hour = date.getHours();//时
    var mins = date.getMinutes();//分
    var sec = date.getSeconds();//秒
    var time = [date, year, month, day, hour, mins, sec]
    return time;
}
//字符串转日期对象：new Date(str)
//日期对象转毫秒：timeObj.getTime()
//字符串转毫秒：Date.parse(str)
//毫秒转日期对象：new Date(msec)



//事件监听器
function bind(ele, type, fn) {
    if (ele.addEventListener) {
        //主流浏览器
        ele.addEventListener(type, fn, false);//false:冒泡
    } else {
        ele.attachEvent('on' + type, fn);
    }
}


//                  正则验证

var checkReg = {
    username: function (str) {
        var reg = /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/;
        return reg.test(str);
    },
    password: function (str) {
        var reg = /^[a-zA-Z]\w{5,17}$/;
        return reg.test(str);
    },
    confirm_pwd: function (str) {
        var reg = /^[a-zA-Z]\w{5,17}$/;
        return reg.test(str);
    },
    nickname: function (str) {
        var reg = /^[\u4E00-\u9FA5A-Za-z0-9]+$/;
        return reg.test(str);
    },
    realkname: function (str) {
        var reg = /^[\u4e00-\u9fa5]{0,}$/;
        return reg.test(str);
    },
    email: function (str) {
        var reg = /^[\w&%$#!\-]+@[\w&%$#!\-]+\.[a-zA-Z]+$/;
        return reg.test(str);
    },
    identity: function (str) {
        var reg = /^\d{15}|\d{18}$/;
        return reg.test(str);
    },
    phone: function (str) {
        var reg = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
        return reg.test(str);
    },
    birthday: function (str) {
        var reg = /^\d{4}-\d{1,2}-\d{1,2}/;
        return reg.test(str);
    },

}


// checkInput(ainputs[0],'username',infs[0],{
//     success: '账号验证通过',
//     failure: '账号验证不通过',
//     null: '账号不能为空'
// });


//                  表单验证

function checkInput(ele, reg, inf, meg) {
    /*
                参数一：ele 要正则验证的表单
                参数二：reg 正则不同
                参数三：inf 提示信息节点不同
                参数四：meg 提示信息不同,对象
    */

    // ele.onblur = function () {
        var val = ele.value.trim();
        // var index = this.dataset.index;//用自定义属性的值作为开关对象的属性名
        //1.非空验证
        if (val) {
            //2.正则验证
            // var regEmail = /^[\w&%$#!\-]+@[\w&%$#!\-]+\.[a-zA-Z]+$/;
            // var res = regEmail.test(email);
            // eval():把字符串转成js
            // var str = `checkReg.${reg}(val)`;//方法一：借助一个方法eval()
            var res = checkReg[reg](val);//方法二：利用对象属性名可以接收变量的特性实现
            // console.log(eval(str), res);
            // var res = reg(val);//实参
            // console.log(res);
            // var res = checkReg.email(val);
            if (res) {
                //符合规则
                inf.innerHTML = meg.success;
                inf.style.color = '#58bc58';
                // ele.istrue = true;
            } else {
                //不符合规则
                inf.innerHTML = meg.failure;
                inf.style.color = 'red';
                // ele.istrue = false;
            }
        } else {
            inf.innerHTML = meg.null;
            inf.style.color = 'orange';
            // ele.istrue = false;
        }
    // }
}





/*
	运动框架封装：startMove()过渡    jq animate()
	最终版：多对象，多属性，链式运动框架(运动队列)
	参数一：对象名
	参数二：属性，目标值  键名：属性名，键值：目标值    {'width':200,'heigth':400}  实现：宽度和高度一起改变，宽度变成200，高度变成400
	参数三：回调函数(可选参数)
 */

function startMove(obj, json, fnend) {

    clearInterval(obj.timer); //防止定时器叠加
    obj.timer = setInterval(function () {

        var istrue = true;

        //1.获取属性名，获取键名：属性名->初始值
        for (var key in json) { //key:键名   json[key] :键值
            //			console.log(key); //width heigth opacity
            var cur = 0; //存初始值

            if (key == 'opacity') { //初始值
                cur = css(obj, key) * 100; //透明度
            } else {
                cur = parseInt(css(obj, key)); // 300px  300  width heigth borderwidth px为单位的

            }

            //2.根据初始值和目标值，进行判断确定speed方向，变形：缓冲运动
            //距离越大，速度越大,下面的公式具备方向
            var speed = (json[key] - cur) / 6; //出现小数
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed); //不要小数部分，没有这句话或晃动

            //保证上一个属性全部都达到目标值了
            if (cur != json[key]) { //width 200 heigth 400
                istrue = false; //如果没有达到目标值，开关false
            } else {
                istrue = true; //true true
            }

            //3、运动
            if (key == 'opacity') {
                obj.style.opacity = (cur + speed) / 100; //0-1
                obj.style.filter = 'alpha(opacity:' + (cur + speed) + ')'; //0-100
            } else {
                obj.style[key] = cur + speed + 'px'; //针对普通属性 left  top height 
            }

        }

        //4.回调函数:准备一个开关,确保以上json所有的属性都已经达到目标值,才能调用这个回调函数
        if (istrue) { //如果为true,证明以上属性都达到目标值了
            clearInterval(obj.timer);
            if (fnend) { //可选参数的由来
                fnend();
            }
        }

    }, 30); //obj.timer 每个对象都有自己定时器
}




function ajax(opt) {
    let defaultData = {
        type: 'get',
        data: '',
        url: '',
        asyn: true,
        success: null,
        failure: null,
    }
    Object.assign(defaultData, opt);
    let xhr = new XMLHttpRequest();
    if (defaultData.type.toLowerCase() == 'get') {
        if (defaultData.data) {
            defaultData.data = objToStr(defaultData.data);
            defaultData.url += '?' + defaultData.data;
        }
        xhr.open('get', defaultData.url, defaultData.asyn);
        xhr.send(null);
    }
    else if (defaultData.type.toLowerCase() == 'post') {
        if (defaultData.data) {
            xhr.open('post', defaultData.url, defaultData.asyn);
            xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
            defaultData.data = objToStr(defaultData.data);
            xhr.send(defaultData.data)
        }
    }

    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
            if (xhr.status == 200 || xhr.status == 304) {
                let data = xhr.responseText;
                defaultData.success(data);
            }
            else {
                if (defaultData.failure) {
                    defaultData.failure(xhr.status);
                }
            }
        }
    }
}



//设置cookie
function setCookie(key, val, iDay) {
    //key：键名；val：键值；iDay：失效时间
    var now = new Date();
    now.setDate(now.getDate() + iDay);
    document.cookie = key + '=' + val + ';expires=' + now.toUTCString() + ';path=/';//设置一个站点内的文件可以共享此cookie
}

//获取cookie的值
function getCookie(key) {
    //uid=2; username=upjizirui9
    let arr = document.cookie.split('; ');// ["uid=2", "username=upjizirui9"]
    for (let ele of arr) {
        arr2 = ele.split('=');//["uid", "2"]   ["username", "upjizirui9"]
        if (key == arr2[0]) {
            return arr2[1];
        }
    }
}

//删除cookie
function removeCookie(key) {//删除：设置失效时间为过去的时间，立即失效
    setCookie(key, '', -1);  //调用设置cookie函数
}