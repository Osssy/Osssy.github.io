//side menu toggle

$(document).ready(function() {
    let toggle = $('.side-nav__toggle');

    toggle.click(function() {
        $('.side-nav__menu').toggleClass('hide');
        $(this).find('.fa').toggleClass('fa-bars');
        $(this).find('.fa').toggleClass('fa-close');
    });
});