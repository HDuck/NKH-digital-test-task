$(function subMenu() {
    $('.sub-menu').accordion({
        active: false,
        collapsible: true,
        heightStyle: 'auto',
        beforeActivate: function(evt, ui) {
            ui.newHeader.height(47).css({
                padding: '19px 20px'
            });
            ui.oldHeader.height(67).css({
                padding: '27px 20px 19px'
            });
        }
    });
});