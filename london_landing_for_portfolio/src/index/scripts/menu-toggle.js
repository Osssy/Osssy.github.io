// menu toggle

$(document).ready(function() {
    let body = $('body');
    let nav = $('.navigation');
    let navOpen = $('.navigation__open');
    let navClose = $('.navigation__close');
    let navLink = $('.navigation__link');

    navOpen.click(function() {
        nav.fadeIn();
        navClose.fadeIn();
        $(this).fadeOut();
        body.addClass('no-scrolled');
    });

    navClose.click(function() {
        nav.fadeOut();
        navOpen.fadeIn();
        $(this).fadeOut();
        body.removeClass('no-scrolled');
    });

    body.keydown(function(event) {
        if (event.keyCode == 27) {
            nav.fadeOut();
            navOpen.fadeIn();
            navClose.fadeOut();
            body.removeClass('no-scrolled');
        }
    });

    navLink.click(function() {
        nav.fadeOut();
        navOpen.fadeIn();
        navClose.fadeOut();
        body.removeClass('no-scrolled');
    });
});