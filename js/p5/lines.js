// Lines (Perlin)
if (window.location.pathname == '/') {
  document.addEventListener('DOMContentLoaded', () => {
    const p5Lines = new p5((p) => {
      let width = window.innerWidth;
      let height = window.innerHeight;
      let particles = [];
      let minParticles = 0;
      let maxParticles = 0;
      let noiseScale = 200;
      // Not light is default
      let fillAlpha = window.colorMode === 'light' ? 32 : 48;
      let backgroundAlpha = window.colorMode === 'light' ? 10 : 6;

      function startingX() {
        return p.random(-(width / 4), width + width / 4);
      }

      function startingY() {
        return p.random(height);
      }

      // Set min/max particles, critical to performance threshold
      function setupParticleCounts(width) {
        // Could be more complex for other rendering scenarios (multipliers)
        minParticles = width * 0.67;
        maxParticles = minParticles;
      }

      p.setup = function () {
        const canvas = p.createCanvas(width, height);
        canvas.parent('p5');

        p.frameRate(60);

        setupParticleCounts(p.windowWidth);

        for (let i = 0; i < minParticles; i++) {
          const newParticle = new particle(startingX(), startingY());
          particles.push(newParticle);
        }

        const wrapper = document.querySelector('.p5');
        if (wrapper) wrapper.classList.add('active');
      };

      p.draw = function () {
        if (window.colorMode === 'light') {
          p.background(255, 255, 255, backgroundAlpha);
        } else {
          p.background(0, 0, 0, backgroundAlpha);
        }

        p.noStroke();

        for (let i = 0; i < particles.length; i++) {
          particles[i].move();
          particles[i].draw();
        }

        update();
      };

      function update() {
        if (particles.length < maxParticles) {
          const newParticle = new particle(startingX(), startingY());
          particles.push(newParticle);
        }
      }

      function particle(x, y) {
        this.position = p.createVector(x, y);
        this.direction = p.createVector(p.random(-1, 1), p.random(-1, 1));
        this.speed = 2;

        this.color = p.random(-1, 1) > 0 ? [128, 128, 255] : [255, 128, 128];

        this.changeSpeed = p.random(100, 1000);

        // this.changeDirection = p.createVector(p.random(-1, 1), p.random(-1, 1));

        this.move = function () {
          const angle =
            p.noise(
              this.position.x / noiseScale,
              this.position.y / noiseScale
            ) * p.TWO_PI;

          const changeAngle =
            p.noise(this.position.y / 200, this.position.x / 200) * p.TWO_PI;

          const dynamicChangeAngle =
            p.noise(
              p.frameCount / this.changeSpeed,
              p.frameCount / this.changeSpeed
            ) * p.TWO_PI;

          this.direction.x = p.cos(
            angle + changeAngle + dynamicChangeAngle * 2
          );
          this.direction.y = p.sin(
            angle + changeAngle + dynamicChangeAngle * 1.5
          );

          // this.direction.x = p.cos(angle );
          // this.direction.y = p.sin(angle );

          this.direction.mult(this.speed);
          this.position.add(this.direction);

          if (
            this.position.x > width ||
            this.position.x < 0 ||
            this.position.y > height ||
            this.position.y < 0
          ) {
            this.position = p.createVector(p.random(width), p.random(height));
          }
        };

        this.draw = function () {
          const noiseColorVal = p.noise(
            this.position.x / 400,
            this.position.y / 400
          );
          const colorVal = p.map(noiseColorVal, 0, 1, 0, 256);

          p.fill(colorVal, 0, 255 - colorVal, fillAlpha);
          // p.fill(128, 128, 255, fillAlpha);
          p.ellipse(this.position.x, this.position.y, 2, 2);
        };
      }

      p.windowResized = function () {
        // Don't run on small height changes because realistically it's mobile and the navbar moving
        const currentWidth = window.innerWidth;
        const currentHeight = window.innerHeight;
        // If the width or height (larger) changed...
        if (width != currentWidth || currentHeight > height + 128) {
          width = currentWidth;
          height = window.innerHeight;

          setupParticleCounts(width);

          p.resizeCanvas(p.windowWidth, p.windowHeight);
        }
      };
    });
  });
}
