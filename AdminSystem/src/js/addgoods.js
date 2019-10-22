(function () {

    $('#reg').click(function () {
        let b2p1 = $('#b2p1').val();
        let b1s = $('#b1s').val();
        let b2s = $('#b2s').val();
        let stock = $('#stock').val();
        let b3h6 = $('#b3h6').val();
        let pb1 = $('#pb1').val();
        let pb2 = $('#pb2').val();
        let pb3 = $('#pb3').val();
        let pb4 = $('#pb4').val();
        let pb5 = $('#pb5').val();

        if (!b2p1 || !b1s || !b2s || !stock || !b3h6 || !pb1) {
            alert('请填写完整信息');
        }
        else {
            $.ajax({
                type: 'post',
                url: '../api/order.php',
                data: {
                    ordertype: 'addgoods',
                    order: `INSERT INTO taobao(b2p1,b1s,b2s,stock,b3h6,pt,pb1,pb2,pb3,pb4,pb5) VALUES ('${b2p1}','${b1s}','${b2s}','${stock}','${b3h6}','${pb1}','${pb1}','${pb2}','${pb3}','${pb4}','${pb5}')`,
                },
                success: (str) => {
                    // console.log(str);
                    if (str == 'success') {
                        alert('添加成功');
                        $('#con_main input').val('');
                    }
                }
            })
        }
    })

    $('#empty').click(function () {
        $('#con_main input').val('');
    })

})();