'use strict';

(function () {

    $('#reg').click(function () {
        var b2p1 = $('#b2p1').val();
        var b1s = $('#b1s').val();
        var b2s = $('#b2s').val();
        var stock = $('#stock').val();
        var b3h6 = $('#b3h6').val();
        var pb1 = $('#pb1').val();
        var pb2 = $('#pb2').val();
        var pb3 = $('#pb3').val();
        var pb4 = $('#pb4').val();
        var pb5 = $('#pb5').val();

        if (!b2p1 || !b1s || !b2s || !stock || !b3h6 || !pb1) {
            alert('请填写完整信息');
        } else {
            $.ajax({
                type: 'post',
                url: '../api/order.php',
                data: {
                    ordertype: 'addgoods',
                    order: 'INSERT INTO taobao(b2p1,b1s,b2s,stock,b3h6,pt,pb1,pb2,pb3,pb4,pb5) VALUES (\'' + b2p1 + '\',\'' + b1s + '\',\'' + b2s + '\',\'' + stock + '\',\'' + b3h6 + '\',\'' + pb1 + '\',\'' + pb1 + '\',\'' + pb2 + '\',\'' + pb3 + '\',\'' + pb4 + '\',\'' + pb5 + '\')'
                },
                success: function success(str) {
                    // console.log(str);
                    if (str == 'success') {
                        alert('添加成功');
                        $('#con_main input').val('');
                    }
                }
            });
        }
    });

    $('#empty').click(function () {
        $('#con_main input').val('');
    });
})();