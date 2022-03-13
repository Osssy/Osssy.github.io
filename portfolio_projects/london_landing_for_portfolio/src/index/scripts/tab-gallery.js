//tab gallery

$(document).ready(function() {
    $('.gallery__button').click(function() {
        let alt = $(this).parents('.gallery__item').find('.gallery__image').attr('alt');
        let image = $(this).parents('.gallery__item').find('.gallery__image').attr('src');

        $('.tab__image').attr('src', image);
        $('.tab__description').text(alt);
        $('.tab_container').fadeIn();
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".tab_container").offset().top
        }, 700);

        if (window.matchMedia('(max-width: 767px)').matches) {
            $('body').addClass('no-scrolled');
        } else {
            $('body').removeClass('no-scrolled');
        }

        $(window).resize(function() {
            if (window.matchMedia('(max-width: 767px)').matches) {
                if ($('.tab_container').hasClass('hide')) {
                    $('body').removeClass('no-scrolled');
                } else {
                    $('body').addClass('no-scrolled');
                }
            } else {
                $('body').removeClass('no-scrolled');
            }
        });
    });

    $('.tab__close').click(function() {
        $('.tab_container').fadeOut();
        $('body').removeClass('no-scrolled');
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".trip__title").offset().top
        }, 700);
    });

    $('body').keydown(function(event) {
        if (event.keyCode == 27) {
            $('.tab_container').fadeOut();
            $('body').removeClass('no-scrolled');
        }
    });
});