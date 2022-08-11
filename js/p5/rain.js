// Rain
if (window.location.pathname.startsWith('/about')) {
  document.addEventListener('DOMContentLoaded', () => {
    const p5Rain = new p5(function (p) {
      let width = window.innerWidth;
      let height = window.innerHeight;
      let drops = [];
      let angle = 0;
      let dropCount = 0;
      let strokeAlpha = 0;
      let isMobile = window.innerWidth < 600;

      function startingX() {
        return p.random(-(width / 4), width + width / 4);
      }

      function startingY() {
        return p.random(height) - height;
      }

      function updateStroke() {
        isMobile ? (strokeAlpha = 80) : (strokeAlpha = 64);
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
        dropCount = p.random(width / 16, width / 2);

        setupDrops();

        const wrapper = document.querySelector('.p5');
        if (wrapper) wrapper.classList.add('active');
      };

      p.draw = function () {
        if (window.colorMode === 'light') {
          p.background(255);
          p.stroke(0, 0, 0, strokeAlpha);
        } else {
          p.background(0);
          p.stroke(255, 255, 255, strokeAlpha);
        }

        // p.background(0);
        // p.stroke(255, 255, 255, strokeAlpha);

        for (let i = 0; i < drops.length; i++) {
          const tailX = drops[i].tail * p.sin(-angle) + drops[i].x;

          p.line(drops[i].x, drops[i].y, tailX, drops[i].y - drops[i].tail);
        }

        update();
      };

      function update() {
        for (let i = 0; i < drops.length; i++) {
          const newX = drops[i].tail * p.sin(angle) + drops[i].x;

          drops[i].x = newX;
          drops[i].y += drops[i].velocity;

          if (drops[i].y > height + drops[i].tail) {
            drops[i].x = startingX();
            drops[i].y = startingY();
          }
        }
      }

      p.windowResized = function () {
        // Don't run on small height changes because realistically it's mobile and the navbar moving
        const currentWidth = window.innerWidth;
        const currentHeight = window.innerHeight;
        // If the width or height (larger) changed...
        if (width != currentWidth || currentHeight > height + 128) {
          width = currentWidth;
          height = window.innerHeight;

          isMobile = window.innerWidth < 600;
          dropCount = p.random(0, width / 2);
          updateStroke();

          p.resizeCanvas(p.windowWidth, p.windowHeight);
        }
      };
    });
  });
}
