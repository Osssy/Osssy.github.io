//slider

$(document).ready(function() {
    $('.team__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
});