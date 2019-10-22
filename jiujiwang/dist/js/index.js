(function () {

    carousel(
        $('.demo2'), //必选， 要轮播模块(id/class/tagname均可)，必须为jQuery元素
        {
            type: 'fade', //可选，默认左右(leftright) - 'leftright' / 'updown' / 'fade' (左右/上下/渐隐渐现)
            arrowtype: 'move', //可选，默认一直显示 - 'move' / 'none'  (鼠标移上显示 / 不显示 )
            autoplay: true, //可选，默认true - true / false (开启轮播/关闭轮播)
            time: 3000 //可选，默认3000
        }
    );

    carousel(
        $('.sale-left'), //必选， 要轮播模块(id/class/tagname均可)，必须为jQuery元素
        {
            type: 'leftright', //可选，默认左右(leftright) - 'leftright' / 'updown' / 'fade' (左右/上下/渐隐渐现)
            arrowtype: 'move', //可选，默认一直显示 - 'move' / 'none'  (鼠标移上显示 / 不显示 )
            autoplay: false, //可选，默认true - true / false (开启轮播/关闭轮播)
            time: 3000 //可选，默认3000
        }
    );



    function jump() {

        let showHeight = $('#topic').offset().top;
        $(window).scroll(function () {
            let scrollTop = window.scrollY;
            if (scrollTop >= showHeight) {
                $('#jumpfloor').fadeIn()
            }
            else {
                $('#jumpfloor').fadeOut()
            }
        });
        $('#jumpfloor a').click(function () {
            jump_where = $(this).index();
            jumpHeight = $('#jiuji .floor').eq(jump_where).offset().top;
            // console.log(jumpHeight);
            // $(window).scrollTop(jumpHeight-33);
            $('#jumpfloor a').removeClass('active-jump');
            $(this).addClass('active-jump');
            $("html,body").animate({ scrollTop: jumpHeight - 33 }, 500);
        });
        $('#backtop').click(function () {
            backTopSlow({
                id: 'backtop',
                setSpeed: 100,
                setTime: 10,
            })
        });
    }
    jump();

    $('.close').click(function(){
        $('#guanggao').css('display','none');
    })
    

})();