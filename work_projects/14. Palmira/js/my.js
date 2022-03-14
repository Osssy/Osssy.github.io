// ============ READ MORE ============= 
$(document).ready(function(){
        $.fn.extend({
            toggleText: function(a, b) {
                return this.text(this.text() == a ? b : a);
            }
        });

        $('.more-link').click(function() {
            $(this).toggleText('Показать', 'Скрыть');
            $(this).parents('.excerpt').find('.more').toggle(event);
            $(this).parents('.excerpt').find('.dots').toggle(event);
        });
});