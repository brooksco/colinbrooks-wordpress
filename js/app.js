// Shuffle gallery order
[...document.querySelectorAll('.wp-block-gallery')].forEach((gallery) => {
  for (let i = gallery.children.length; i >= 0; i--) {
    gallery.appendChild(gallery.children[(Math.random() * i) | 0]);
  }
});

// Setup fancybox
$.fancybox.defaults.buttons = ['close'];
$.fancybox.defaults.infobar = false;

$('.wp-block-gallery a').fancybox().attr('data-fancybox', 'gallery');

// Classic gallery
const $gallery = $('.gallery').isotope({
  itemSelector: '.gallery-item',
  percentPosition: true,
});

$gallery.one('arrangeComplete', () => {
  $gallery.addClass('active');
});

// Block gallery
const $galleryBlock = $('.wp-block-gallery').isotope({
  itemSelector: '.wp-block-image',
  percentPosition: true,
});

$galleryBlock.one('arrangeComplete', () => {
  $galleryBlock.addClass('active');
});

// Re-layout on document ready and load
document.addEventListener('DOMContentLoaded', () => {
  $gallery.isotope();
  $galleryBlock.isotope();
});

window.addEventListener('load', () => {
  $gallery.isotope();
  $galleryBlock.isotope();
});
