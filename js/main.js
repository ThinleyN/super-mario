const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');

Promise.all([loadBackground(), createMario()]).then(
  ([backgroundSprites, mario]) => {
    const comp = new Compositor();

    const backgroundLayer = createBackgroundLayer(
      level1.background,
      backgroundSprites
    );
    comp.layers.push(backgroundLayer);

    const spriteLayer = createSpriteLayer(mario);
    comp.layers.push(spriteLayer);

    const input = new Keyboard();
    input.addMapping(32, keyState => {
      if (keyState) {
        mario.jump();
      } else {
        mario.jumpStop();
      }
    });
    input.listenTo(window);

    function update() {
      comp.draw(context);
      mario.update();

      requestAnimationFrame(update);
    }
    update();
  }
);
