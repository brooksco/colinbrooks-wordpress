$.fancybox.defaults.buttons = ['close'];
$.fancybox.defaults.infobar = false;

$('.wp-block-gallery .blocks-gallery-item a')
  .fancybox()
  .attr('data-fancybox', 'gallery');

const $gallery = $('.gallery').isotope({
  itemSelector: '.gallery-item',
  percentPosition: true,
});

// Some other kind of gallery gets made now?
const $galleryBlock = $('.wp-block-gallery').isotope({
  itemSelector: '.blocks-gallery-item',
  percentPosition: true,
});

$gallery.one('arrangeComplete', () => {
  $gallery.addClass('active');
});

$galleryBlock.one('arrangeComplete', () => {
  $galleryBlock.addClass('active');
});

document.addEventListener('DOMContentLoaded', () => {
  $gallery.isotope();
  $galleryBlock.isotope();
});

window.addEventListener('load', () => {
  $gallery.isotope();
  $galleryBlock.isotope();
});
