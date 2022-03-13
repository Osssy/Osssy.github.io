//spoiler

$(document).ready(function() {
    let toggle = $('.main-nav__toggle');
    let list = $('.main-nav__list');

    toggle.click(function() {
        list.toggleClass('hide-mobile');
        $(this).find('.fa').toggleClass('fa-caret-up');
        $(this).find('.fa').toggleClass('fa-caret-down');
    });

    $(window).resize(function() {
        if (window.innerWidth < 575) {
            list.addClass('hide-mobile');
            toggle.find('.fa').removeClass('fa-caret-up').addClass('fa-caret-down');
        } else {
            return false;
        }
    });
});