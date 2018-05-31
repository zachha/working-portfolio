(function ($) {
    'use strict';

    $('#nav-icon').on('click', function () {
        $(this).toggleClass('open');
        $('.fplus-menu-area').toggleClass('menu-open');
    });

    $("#scrollDown").on('click', function () {
        $('html, body').animate({
            scrollTop: $("#projects").offset().top - 70
        }, 1500);
    });

    if ($.fn.counterUp) {
        $('.counter').counterUp({
            delay: 10,
            time: 2000
        });
    }

    if ($.fn.onePageNav) {
        $('#fplusNav').onePageNav({
            currentClass: 'active',
            scrollSpeed: 2000,
            easing: 'easeOutQuad'
        });
    }

    $("a[href='#']").on('click', function ($) {
        $.preventDefault();
    });

    if ($.fn.init) {
        new WOW().init();
    }

    if ($.fn.matchHeight) {
        $('.item').matchHeight();
    }

    var $window = $(window);

    $window.on('load', function () {
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

})(jQuery);