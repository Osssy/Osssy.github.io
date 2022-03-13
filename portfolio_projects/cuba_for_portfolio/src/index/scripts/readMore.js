// readmore

$(document).ready(function() {
    $.fn.extend({
        toggleText: function(a, b) {
            return this.text(this.text() == a ? b : a);
        }
    });

    $('.more-link').click(function() {
        $(this).toggleText('Read More>>', 'Read Less<<');
        $(this).parents('p').find('.more').toggle(event);
    });
});