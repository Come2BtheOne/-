(function () {

    function gongneng(data) {
        var html = data.map(function (item) {
            return `<li data-id="${item.id}">
            <div class="photo">
                <div class="p-t">
                    <img src="${item.pt}" alt="">
                </div>
                <div class="p-b">
                    <img src="${item.pb1}" alt="">
                    <img src="${item.pb2}" alt="">
                    <img src="${item.pb3}" alt="">
                    <img src="${item.pb4}" alt="">
                    <img src="${item.pb5}" alt="">
                </div>
            </div>
            <div class="box1">
                <span>
                    <strong>￥${item.b1s}</strong>
                </span>
                <h6>${item.b1h6}人购买</h6>
            </div>
            <div class="box2">
                <p>${item.b2p1}
                </p>
            </div>
        </li>`
        }).join('');

        var list = document.getElementById('list');
        list.innerHTML = html;
        var list = document.getElementById('list');
        var aLis = list.getElementsByTagName('li');

        var p_b = document.querySelectorAll('.p-b img');
        for (var i = 0; i < p_b.length; i++) {
            p_b[i].onmouseover = function () {
                this.parentNode.previousElementSibling.firstElementChild.src = this.src;
            }
        }
    }

    let ipage = 1;
    let num = 10;
    let pages = document.getElementById('pages');

    setPage = () => {
        index = (ipage - 1) * num;
        ajax({
            type: 'get',
            url: '../api/order.php',
            data: {
                ordertype: 'setpage',
                order: `SELECT * FROM taobao LIMIT ${index},${num}`,
                order2: 'SELECT * FROM taobao',
                page: ipage,
                num: num,
            },
            success: (str) => {
                let data = JSON.parse(str);
                // console.log(data);
                gongneng(data.data);
                let total = Math.ceil(data.total / data.num);
                let aStr = '';
                for (let i = 1; i <= total; i++) {
                    aStr += `<a href="###">${i}</a>`;
                }
                pages.innerHTML = aStr;
                pages.children[ipage - 1].className = 'active';
            }
        });
    }
    setPage();

    pages.onclick = (ev) => {
        if (ev.target.tagName == 'A') {
            ipage = ev.target.innerHTML;
            setPage();
        }
    }


    var price = document.getElementById('price');
    var highlow = document.getElementById('highlow');
    var isok = true;
    price.onclick = function () {
        if (isok) {
            highlow.style.display = 'block';
        }
        else {
            highlow.style.display = 'none';
        }
        isok = !isok;
    }

    var htol = document.getElementById('htol');
    var ltoh = document.getElementById('ltoh');
    // var order = '';
    htol.onclick = function () {
        highlow.style.display = 'none';
        isok = true;
        ajax({
            type: 'get',
            data: {
                ordertype: 'control',
                order: `SELECT * FROM taobao ORDER BY b1s DESC LIMIT 0,${num}`
            },
            url: '../api/order.php',
            success: str => {
                var data = JSON.parse(str);
                gongneng(data);
            }
        })
    }


    ltoh.onclick = function () {
        highlow.style.display = 'none';
        isok = true;
        ajax({
            type: 'get',
            data: {
                ordertype: 'control',
                order: `SELECT * FROM taobao ORDER BY b1s ASC LIMIT 0,${num}`
            },
            url: '../api/order.php',
            success: str => {
                var data = JSON.parse(str);
                gongneng(data);
            }
        })
    }

    var price_btn = document.getElementById('price_btn');
    var price_min = document.getElementById('price_min');
    var price_max = document.getElementById('price_max');

    price_btn.onclick = function () {
        var min = price_min.value;
        var max = price_max.value;
        if (min && max) {
            ajax({
                type: 'get',
                data: {
                    ordertype: 'control',
                    order: `SELECT * FROM taobao WHERE b1s BETWEEN ${min} AND ${max} LIMIT 0,${num}`
                },
                url: '../api/order.php',
                success: str => {
                    var data = JSON.parse(str);
                    gongneng(data);
                }
            });
        }
    }

    var search = document.getElementById('search');
    var search_btn = document.getElementById('search_btn');

    search_btn.onclick = function () {
        var seek = search.value;
        ajax({
            type: 'get',
            data: {
                ordertype: 'control',
                order: `SELECT * FROM taobao WHERE b2p1 LIKE '%${seek}%' LIMIT 0,${num}`
            },
            url: '../api/order.php',
            success: str => {
                var data = JSON.parse(str);
                gongneng(data);
            }
        });
    }


})();