if (window.location.pathname == '/') {
    let width = window.innerWidth;
    let height = window.innerHeight;
    let particles = [];
    let angle = 0;
    let minParticles = 200;
    let maxParticles = minParticles * 2;
    let particleCount = 0;
    let strokeAlpha = 64;
    let isMobile = window.innerWidth < 600;

    let noiseScale = 100;

    function startingX() {
        return random(-(width / 4), width + (width / 4));
    }

    function startingY() {
        return random(height);
    }

    function setup() {
        const canvas = createCanvas(width, height);
        canvas.parent('p5');

        frameRate(60);

        minParticles = windowWidth / 5;
        maxParticles = minParticles * 2;

        for (let i = 0; i < minParticles; i++) {
            let newParticle = new particle(startingX(), startingY());
            particles.push(newParticle);
        }

        const wrapper = document.querySelector('.p5');
        if (wrapper) wrapper.classList.add('active');
    }


    function draw() {
        background(0, 0, 0, 4);
        noStroke();
        // stroke(255, 255, 255, 0.1);

        for (let i = 0; i < particles.length; i++) {
            particles[i].move();
            particles[i].draw();
        }

        update();
    }

    function update() {

        if (frameCount % 10 == 0) {
            if (particles.length < maxParticles) {
                let newParticle = new particle(startingX(), startingY());
                particles.push(newParticle);
            }
        }
    }

    function particle(x, y) {
        this.position = createVector(x, y);
        this.direction = createVector(random(-1, 1), random(-1, 1));
        this.speed = 1;

        // noise(this.position.x, this.position.y) * TWO_PI;

        this.move = function () {
            let angle = noise(this.position.x / noiseScale, this.position.y / noiseScale) * TWO_PI;
            // let angle =
            this.direction.x = cos(angle);
            this.direction.y = sin(angle);

            this.direction.mult(this.speed);
            this.position.add(this.direction);

            if (this.position.x > windowWidth || this.position.x < 0 || this.position.y > windowHeight || this.position.y < 0) {
                this.position = createVector(random(windowWidth), random(windowHeight));
            }
        }

        this.draw = function () {
            fill(128, 128, 255, 16);
            ellipse(this.position.x, this.position.y, 2, 2);
        }
    }

    function windowResized() {
        // particleCount = random(0, width / 2);
        minParticles = windowWidth / 5;
        maxParticles = minParticles * 2;

        resizeCanvas(windowWidth, windowHeight);
    }
}
