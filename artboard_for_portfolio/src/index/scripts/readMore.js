// read more

$(document).ready(function() {
    $.fn.extend({
        toggleText: function(a, b) {
            return this.text(this.text() == a ? b : a);
        }
    });

    $('.blog__more-link').click(function() {
        $(this).toggleText('Read More', 'Read Less');
        $(this).parents('.blog__item').find('.blog__more').toggle(event);
        $(this).parents('.blog__item').find('.blog__dots').toggle(event);
    });
});