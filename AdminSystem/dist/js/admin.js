'use strict';

(function () {
    var usn = sessionStorage.name;
    $('#nav_user').html(usn);

    if (usn) {
        $('#content').height($(window).height() - 60);
        $('#nav_c').click(function () {
            var cfm = confirm('确定要退出吗？');
            if (cfm) {
                sessionStorage.name = '';
                location.href = 'html/login.html';
            }
        });

        $('#menu_list ul').attr('isok', 'true');
        $('#menu_list').on('click', 'h2', function () {
            var target = $(this).next();
            var len = $(this).next().children().length * 36;
            // $('#menu_list').children('ul').css('height', 0);
            if (target.attr('isok') == 'true') {
                target.css('height', len).attr('isok', 'false');
            } else if (target.attr('isok') == 'false') {
                target.css('height', 0).attr('isok', 'true');
            }
        });

        var arr = ['html/userinf.html', 'html/reg.html', 'html/goodslist.html', 'html/goodsinf.html', 'html/addgoods.html', 'html/buyinf.html'];
        $('#menu_list li').each(function (index, item) {
            $(item).attr('index', index);
        });
        $('#menu_list li').click(function () {
            $('#menu_list li').removeClass('active');
            $(this).addClass('active');
            var url = arr[$(this).attr('index')];
            $('#content').attr('src', url);
        });
    } else {
        location.href = 'html/login.html';
    }
})();