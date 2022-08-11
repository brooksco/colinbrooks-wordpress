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

// Setup color mode handling
// ..."storage" determines if we save the setting or not (only if it was a choice)
// ...and colorMode must be stored on the window for the p5 sketches
function setColorMode(mode, storage = false) {
  const colorModeEl = document.querySelector('.footer__color-mode');
  const metaThemeColor = document.querySelector('meta[name=theme-color]');

  if (mode === 'light') {
    window.colorMode = 'light';
    document.body.classList.add('light');
    colorModeEl.innerHTML = '🌑';
    if (metaThemeColor) metaThemeColor.setAttribute('content', '#ffffff');
    if (storage) localStorage.setItem('colorMode', 'light');
  } else {
    window.colorMode = 'dark';
    document.body.classList.remove('light');
    colorModeEl.innerHTML = '💡';
    if (metaThemeColor) metaThemeColor.setAttribute('content', '#000000');
    if (storage) localStorage.setItem('colorMode', 'dark');
  }
}

// If color mode has already been chosen, go with that
// ...otherwise, respect the browser preference
const previousColorMode = localStorage.getItem('colorMode');
if (previousColorMode) {
  console.log('pref');
  setColorMode(previousColorMode);
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  setColorMode('dark', false);
} else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
  setColorMode('light', false);
}

document.addEventListener('DOMContentLoaded', () => {
  // Set up listener for changing color mode
  const colorModeEl = document.querySelector('.footer__color-mode');
  if (colorModeEl)
    colorModeEl.addEventListener('click', () => {
      const newColorMode = window.colorMode === 'dark' ? 'light' : 'dark';
      setColorMode(newColorMode, true);
    });

  $gallery.isotope();
  $galleryBlock.isotope();
});

window.addEventListener('load', () => {
  $gallery.isotope();
  $galleryBlock.isotope();
});
