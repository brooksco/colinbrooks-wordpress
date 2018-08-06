$(document).ready(function () {
    window.animation = (window.animation === undefined) ? document.querySelector('.p5').dataset.animation : window.animation;
    if (window.location.pathname == '/' && window.animation == 1) {
        var p5Lines = new p5(function (p) {
            let width = window.innerWidth;
            let height = window.innerHeight;
            let particles = [];
            let minParticles = 200;
            let maxParticles = minParticles * 2;
            let isMobile = window.innerWidth < 600;

            let noiseScale = 100;

            function startingX() {
                return p.random(-(width / 4), width + (width / 4));
            }

            function startingY() {
                return p.random(height);
            }

            p.setup = function () {
                const canvas = p.createCanvas(width, height);
                canvas.parent('p5');

                p.frameRate(60);

                minParticles = p.windowWidth / 5;
                maxParticles = minParticles * 2;

                for (let i = 0; i < minParticles; i++) {
                    let newParticle = new particle(startingX(), startingY());
                    particles.push(newParticle);
                }

                const wrapper = document.querySelector('.p5');
                if (wrapper) wrapper.classList.add('active');
            }


            p.draw = function () {
                p.background(0, 0, 0, 4);
                p.noStroke();

                for (let i = 0; i < particles.length; i++) {
                    particles[i].move();
                    particles[i].draw();
                }

                update();
            }

            function update() {

                if (p.frameCount % 10 == 0) {
                    if (particles.length < maxParticles) {
                        let newParticle = new particle(startingX(), startingY());
                        particles.push(newParticle);
                    }
                }
            }

            function particle(x, y) {
                this.position = p.createVector(x, y);
                this.direction = p.createVector(p.random(-1, 1), p.random(-1, 1));
                this.speed = 1;

                this.move = function () {
                    let angle = p.noise(this.position.x / noiseScale, this.position.y / noiseScale) * p.TWO_PI;
                    // let angle =
                    this.direction.x = p.cos(angle);
                    this.direction.y = p.sin(angle);

                    this.direction.mult(this.speed);
                    this.position.add(this.direction);

                    if (this.position.x > p.windowWidth || this.position.x < 0 || this.position.y > p.windowHeight || this.position.y < 0) {
                        this.position = p.createVector(p.random(p.windowWidth), p.random(p.windowHeight));
                    }
                }

                this.draw = function () {
                    p.fill(128, 128, 255, 16);
                    p.ellipse(this.position.x, this.position.y, 2, 2);
                }
            }

            p.windowResized = function () {
                minParticles = p.windowWidth / 5;
                maxParticles = minParticles * 2;

                p.resizeCanvas(p.windowWidth, p.windowHeight);
            }
        });
    }
});
