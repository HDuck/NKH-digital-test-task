$(function mainMenu() {

    $('.main-menu__burger').click(function(evt) {
        evt.preventDefault();
        evt.stopPropagation();

        $('.burger-content').addClass('burger-content_show');
        $('.burger-content__list').addClass('burger-content__list_show');
        $('.burger-content__social').addClass('burger-content__social_show');
    });

    $('.burger-content__back').click(function(evt) {
        evt.stopPropagation();

        
        setTimeout(function() {
            $('.burger-content').removeClass('burger-content_show');
        }, 450);

        $('.burger-content__list').removeClass('burger-content__list_show');
        $('.burger-content__social').removeClass('burger-content__social_show');
    });
});