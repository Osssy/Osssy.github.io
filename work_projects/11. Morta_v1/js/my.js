// ============ READ MORE ============= 
$(document).ready(function(){
        $.fn.extend({
            toggleText: function(a, b) {
                return this.text(this.text() == a ? b : a);
            }
        });

        $('.more-link').click(function() {
            $(this).toggleText('Показать', 'Скрыть');
            $(this).parents('.blog-post').find('.more').toggle(event);
            $(this).parents('.blog-post').find('.dots').toggle(event);
        });
});