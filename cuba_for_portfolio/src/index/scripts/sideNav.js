// side menu

$(document).ready(function() {

    $('.side-navigation__toggle').click(function() {
        $('.header-navigation').toggle('slow', function() {});
        $(this).find('.fa').toggleClass('fa-bars');
        $(this).find('.fa').toggleClass('fa-close');
    });

    if (window.matchMedia('(max-width: 767px)').matches) {
        $('.company-info').appendTo('.header-navigation');
        $('.discover-info').appendTo('.header-navigation');
    } else {
        $('.company-info').prependTo('.footer__full-navigation');
        $('.discover-info').prependTo('.footer__full-navigation');
    }

    $(window).resize(function() {
        if (window.innerWidth < 768) {
            $('.header-navigation').hide();
            $('.side-navigation__toggle').find('.fa').removeClass('fa-close').addClass('fa-bars');
            $('.company-info').appendTo('.header-navigation');
            $('.discover-info').appendTo('.header-navigation');
        } else {
            $('.header-navigation').show();
            $('.company-info').prependTo('.footer__full-navigation');
            $('.discover-info').prependTo('.footer__full-navigation');
        }
    });
});