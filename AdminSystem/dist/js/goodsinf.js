'use strict';

(function () {
    //节点
    var tbody = document.getElementById('tbody');
    function originData() {
        $.ajax({
            type: 'post',
            url: '../api/order.php',
            data: {
                ordertype: 'getuserinf',
                order: 'SELECT * FROM taobao'
            },
            success: function success(str) {
                var arr = JSON.parse(str);
                console.log(arr);
                gongneng(arr);
                checkit();
            }
        });
    }
    originData();

    function gongneng(data) {
        var html = data.map(function (item, index) {
            return '\n            <tr>\n                <td><input type="checkbox" class="checkbtn"></td>\n                <td>' + item.id + '</td>\n                <td contenteditable="true">' + item.b1s + '</td>\n                <td contenteditable="true"">' + item.b1h6 + '</td>\n                <td contenteditable="true"">' + item.b2p1 + '</td>\n                <td contenteditable="true"">' + item.stock + '</td>\n                <td>\n                    <input type="button" value="\u4FEE\u6539\u5E76\u4FDD\u5B58" class="alter">\n                    <input type="button" value="\u5220\u9664" class="del">\n                </td>\n            </tr>\n            ';
        }).join('');
        tbody.innerHTML = html;
    }

    $('#tbody').on('click', 'input', function () {
        if ($(this).attr('class') == 'alter') {
            var _thisID = $(this).parent().prev().prev().prev().prev().prev().html();
            var alterPrice = $(this).parent().prev().prev().prev().prev().html();
            var alterDeal = $(this).parent().prev().prev().prev().html();
            var alterName = $(this).parent().prev().prev().html();
            var alterNum = $(this).parent().prev().html();
            //修改数据功能
            alert('请不要随意修改数据！');
            var cfrm = confirm('您确定要修改吗？');
            if (cfrm) {
                $.ajax({
                    type: 'post',
                    url: '../api/order.php',
                    data: {
                        ordertype: 'changegoodsinf',
                        order: 'UPDATE taobao SET b1s = \'' + alterPrice + '\',b1h6 = \'' + alterDeal + '\',b2p1 = \'' + alterName + '\',stock = \'' + alterNum + '\' WHERE id = ' + _thisID
                    },
                    success: function success(str) {
                        console.log(str);
                    }
                });
            }
        } else if ($(this).attr('class') == 'del') {
            //删除功能
            alert('数据将永久删除，并且无法恢复');
            var _cfrm = confirm('您确定要删除吗？');
            if (_cfrm) {
                $.ajax({
                    type: 'post',
                    url: '../api/order.php',
                    data: {
                        ordertype: 'delID',
                        order: 'DELETE FROM usename WHERE uid = ' + thisID
                    },
                    success: function success(str) {
                        console.log(str);
                    }
                });
                $(this).parent().parent().remove();
            }
        }
    });

    function checkit() {
        $('#allcheck').click(function () {
            var isok = $('#allcheck').prop('checked');
            $('.checkbtn').prop('checked', isok);
        });

        $('#fcheck').click(function () {
            $('.checkbtn').each(function (index, ele) {
                var val = !$(ele).prop('checked');
                $(ele).prop('checked', val);
            });
        });
    }

    function checkedArr() {
        var arr = []; //存放勾选复选框的下标
        $('.checkbtn').each(function (index, item) {
            if ($(item).prop('checked')) {
                //被勾选了
                arr.push(index);
            }
        });
        return arr;
    }

    $('#delall').click(function () {
        var checkall = checkedArr().reverse(); //返回被勾选的下标数组
        var ok = confirm('您确定要删除我们？');
        if (ok) {
            checkall.forEach(function (item, index) {
                $('#tbody tr').eq(checkall[index]).remove();
            });
        }
    });

    $('#searchbtn').click(function () {
        if ($('#searchID').val()) {
            var searchData = $('#searchID').val();
            $.ajax({
                type: 'post',
                url: '../api/order.php',
                data: {
                    ordertype: 'control',
                    order: 'SELECT * FROM taobao WHERE id = \'' + searchData + '\''
                },
                success: function success(str) {
                    // console.log(str)
                    var arr = JSON.parse(str);
                    gongneng(arr);
                }
            });
        }
    });

    $('#searchID').blur(function () {
        if (!$('#searchID').val()) {
            originData();
        }
    });
})();