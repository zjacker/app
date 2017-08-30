$(function() {
    var num = 0,
        timer = 0;
    $('.inp input').focus(function() {
        $('.slider,.guide,footer').hide(300);
        $('#search').css({
            'box-shadow': '1px 2px 5px #ddd',
        })
    }).blur(function() {
        $('.slider,.guide,footer').show(300);
        $('#search').css({
            'box-shadow': 0,
        })
    })
    // 轮播开始
    $('.slider-img li').eq(0).clone(true).appendTo($('.slider-img'));
    $('.slider-img').swipeRight(function() {

        if (num <= 0) {
            $(this).css('left', '-' + ($('.slider-img li').length - 1) + '00%');
            num = $('.slider-img li').length - 1;
        }
        num--;
        $('.slider-img').animate({
            'left': '-' + num + '00%'
        }, 500)
        clearInterval(timer);
        slider();
    }).swipeLeft(function() {
        num++;
        if (num > $('.slider-img li').length - 1) {
            num = 0;
        }
        $('.slider-img').animate({
            'left': '-' + num + '00%'
        }, 500, function() {
            // 当动画结束的时候,执行的函数
            if (num >= $('.slider-img li').length - 1) {
                // 将图片直接定位到第一张图片(用户看不到切换的过程)
                $(this).css('left', 0);
                // 恢复index的值为0
                num = 0;
            }
        })
        clearInterval(timer);
        slider();
    })
    slider();

    function slider() {
        timer = setInterval(function() {
            num++;
            if (num > $('.slider-img li').length - 1) {
                num = 0;
            }
            $('.slider-img').animate({
                'left': '-' + num + '00%'
            }, 500)
        }, 5000)
    }
    // 轮播结束
})