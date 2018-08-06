$(document).ready(function () {
    window.animation = (window.animation === undefined) ? document.querySelector('.p5').dataset.animation : window.animation;
    if (window.location.pathname == '/' && window.animation == 0) {
        var p5Rain = new p5(function (p) {
            let width = window.innerWidth;
            let height = window.innerHeight;
            let drops = [];
            let angle = 0;
            let dropCount = 0;
            let strokeAlpha = 64;
            let isMobile = window.innerWidth < 600;

            function startingX() {
                return p.random(-(width / 4), width + (width / 4));
            }

            function startingY() {
                return p.random(height) - height;
            }

            function updateStroke() {
                isMobile ? strokeAlpha = 90 : strokeAlpha = 64;
            }

            function setupDrops() {
                drops = [];

                for (let i = 0; i < dropCount; i++) {
                    drops.push({
                        x: startingX(),
                        y: startingY(),
                        velocity: p.random(8, 12),
                        tail: p.random(6, 12),
                    });
                }
            }

            p.setup = function () {
                const canvas = p.createCanvas(width, height);
                canvas.parent('p5');
                updateStroke();
                p.frameRate(60);

                angle = p.random(-p.PI / 16, p.PI / 16);
                dropCount = p.random(width / 30, width / 3);

                setupDrops();

                const wrapper = document.querySelector('.p5');
                if (wrapper) wrapper.classList.add('active');
            }


            p.draw = function () {
                p.background(0);
                p.stroke(255, 255, 255, strokeAlpha);

                for (let i = 0; i < drops.length; i++) {
                    const tailX = drops[i].tail * p.sin(-angle) + drops[i].x;

                    p.line(drops[i].x, drops[i].y, tailX, drops[i].y - drops[i].tail);
                }

                update();
            }

            function update() {
                for (let i = 0; i < drops.length; i++) {
                    const newX = drops[i].tail * p.sin(angle) + drops[i].x;

                    drops[i].x = newX;
                    drops[i].y += drops[i].velocity;

                    if (drops[i].y > (height + drops[i].tail)) {
                        drops[i].x = startingX();
                        drops[i].y = startingY();
                    }
                }
            }

            p.windowResized = function () {
                width = window.innerWidth;
                height = window.innerHeight;
                isMobile = window.innerWidth < 600
                dropCount = p.random(0, width / 2);

                updateStroke();
                p.resizeCanvas(p.windowWidth, p.windowHeight);
            }
        });
    }
});
