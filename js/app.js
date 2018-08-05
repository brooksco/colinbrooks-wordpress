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

let width = window.innerWidth;
let height = window.innerHeight;
let drops = [];
let angle = 0;
let dropCount = 0;
let strokeAlpha = 64;
let isMobile = window.innerWidth < 600;

// P5 drawing on homepage only
if (window.location.pathname == '/') {

    function startingX() {
        return random(-(width / 4), width + (width / 4));
    }

    function startingY() {
        return random(height) - height;
    }

    function updateStroke() {
        isMobile ? strokeAlpha = 90 : strokeAlpha = 64;
    }

    function setupDrops() {
        drops = [];

        for (let i = 0; i < dropCount; i++) {
            drops.push({
                x: startingX(),
                y: random(height) - height,
                velocity: random(8, 12),
                tail: random(6, 12),
            });
        }
    }

    function setup() {
        const canvas = createCanvas(width, height);
        if (window.location.pathname == '/') canvas.parent('p5');
        updateStroke();
        frameRate(60);

        angle = random(-PI / 16, PI / 16);
        dropCount = random(width / 30, width / 3);

        setupDrops();

        const wrapper = document.querySelector('.p5');
        if (wrapper) wrapper.classList.add('active');
    }


    function draw() {
        background(0);
        stroke(255, 255, 255, strokeAlpha);

        for (let i = 0; i < drops.length; i++) {
            const tailX = drops[i].tail * sin(-angle) + drops[i].x;

            line(drops[i].x, drops[i].y, tailX, drops[i].y - drops[i].tail);
        }

        update();
    }

    function update() {
        for (let i = 0; i < drops.length; i++) {
            const newX = drops[i].tail * sin(angle) + drops[i].x;

            drops[i].x = newX;
            drops[i].y += drops[i].velocity;

            if (drops[i].y > (height + drops[i].tail)) {
                drops[i].x = startingX();
                drops[i].y = startingY();
            }
        }
    }

    function windowResized() {
        width = window.innerWidth;
        height = window.innerHeight;
        isMobile = window.innerWidth < 600
        dropCount = random(0, width / 2);

        updateStroke();
        resizeCanvas(windowWidth, windowHeight);
    }
}
