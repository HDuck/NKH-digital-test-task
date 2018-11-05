$(function slider() {
    $('.slider').slick({
            arrows: false,
            draggable: false,
            speed: 600
    })
    $('.slider + .button').on('click', function() {
        $('.slider').slick('slickNext');
    });
});