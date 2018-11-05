$(function slider() {
    $('.slider').slick({
            arrows: false,
            draggable: false,
            speed: 600
    })
    $('.slider + .button').on('click', function(evt) {
        evt.stopPropagation();
        var slick = $('.slider').slick('getSlick');
        var currSlide = $('.slider').slick('slickCurrentSlide');
        var nextSlide;

        $('.slider').slick('slickNext');
    })
});