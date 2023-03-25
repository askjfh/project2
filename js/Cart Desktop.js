$(document).ready(function () {
    $('.showmenu').click(function (e) { 
        e.preventDefault();
        $('body').toggleClass('menu-show');
    });
    $('.product li').click(function (e) { 
        e.preventDefault();
        $(this).addClass('select');
        $(this).siblings().removeClass('select');
    });
    $('.hamburger, .all').click(function (e) { 
        e.preventDefault();
        $('.meal').show();
    });
    $('.other').click(function (e) { 
        e.preventDefault();
        $('.meal').hide();
    });
    $('.mobile-list li').click(function (e) { 
        e.preventDefault();
        $(this).addClass('mobile-select');
        $(this).siblings().removeClass('mobile-select');
    });
    $('.hamburger, .all').click(function (e) { 
        e.preventDefault();
        $('.mobile-meal').show();
    });
    $('.other').click(function (e) { 
        e.preventDefault();
        $('.mobile-meal').hide();
    });
    $('.meal span').click(function (e) { 
        e.preventDefault();
        $(this).toggleClass('favorite');
    });
    $('.mobile-meal span').click(function (e) { 
        e.preventDefault();
        $(this).toggleClass('favorite');
    });
});