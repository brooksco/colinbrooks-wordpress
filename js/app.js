$.fancybox.defaults.buttons = [
    "close"
];

$.fancybox.defaults.infobar = false;

const $gallery = $('.gallery').isotope({
    itemSelector: '.gallery-item',
    percentPosition: true,
});

$gallery.one('arrangeComplete', function () {
    $gallery.addClass('active');
});

$(document).ready(function () {
    $gallery.isotope();
});

$(window).on('load', function () {
    $gallery.isotope();
});
