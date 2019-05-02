const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');

Promise.all([createMario(), loadLevel()]).then(([mario, environment]) => {
  const input = new Keyboard();
  input.addMapping(32, keyState => {
    if (keyState) {
      mario.jump();
    } else {
      mario.jumpStop();
    }
  });
  input.listenTo(window);

  environment.entities.add(mario);
  calculateTiles(level1, environment);

  function update() {
    environment.comp.draw(context);
    environment.update();

    requestAnimationFrame(update);
  }
  update();
});
