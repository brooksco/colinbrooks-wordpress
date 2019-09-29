$.fancybox.defaults.buttons = [
'close'
];

$.fancybox.defaults.infobar = false;

// $('.blocks-gallery-item img').fancybox({
// 	type: 'image'
// 	// Options will go here
// });

$('.wp-block-gallery .blocks-gallery-item a').fancybox().attr('data-fancybox', 'gallery');

const $gallery = $('.gallery').isotope({
	itemSelector: '.gallery-item',
	percentPosition: true,
});

// Some other kind of gallery gets made now?
const $galleryBlock = $('.wp-block-gallery').isotope({
	itemSelector: '.blocks-gallery-item',
	percentPosition: true,
});

$gallery.one('arrangeComplete', function () {
	$gallery.addClass('active');
});

$galleryBlock.one('arrangeComplete', function () {
	$galleryBlock.addClass('active');
});

$(document).ready(function () {
	$gallery.isotope();
	$galleryBlock.isotope();
});

$(window).on('load', function () {
	$gallery.isotope();
	$galleryBlock.isotope();
});

// Setup color mode handling
function setColorMode(mode) {
	// if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {}

	const colorModeEl = document.querySelector('.footer__color-mode');
	const metaThemeColor = document.querySelector('meta[name=theme-color]');
	if (mode == 'light') {
		window.colorMode = 'light';
		document.body.classList.add('light');
		colorModeEl.innerHTML = '🌑';
		if (metaThemeColor) metaThemeColor.setAttribute('content', '#ffffff');
		sessionStorage.setItem('colorMode', 'light');

	} else {
		window.colorMode = 'dark';
		document.body.classList.remove('light');
		colorModeEl.innerHTML = '💡';
		if (metaThemeColor) metaThemeColor.setAttribute('content', '#000000');
		sessionStorage.setItem('colorMode', 'dark');
	}
}

// const mql = window.matchMedia('(prefers-color-scheme: dark)');
// mql.addListener(setColorMode);

window.colorMode = 'dark';
document.addEventListener('DOMContentLoaded', function() {
	const previousColorMode = sessionStorage.getItem('colorMode');
	if (previousColorMode) {
		setColorMode(previousColorMode);
	}

	const colorModeEl = document.querySelector('.footer__color-mode');
	if (colorModeEl) colorModeEl.addEventListener('click', function() {
		const newColorMode = window.colorMode == 'dark' ? 'light' : 'dark';
		console.log('new color mode', newColorMode);
		setColorMode(newColorMode);
	});
});

