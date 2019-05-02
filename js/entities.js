function createMario() {
  return loadMario().then(sprites => {
    let mario = new Entity();
    mario.position.set(60, 200);
    mario.velocity.set(3, -5);

    var gravity = 0.9;
    var duration = 0.5;
    var upvelo = 30;
    var engageTime = 0;

    mario.draw = function drawMario(context) {
      sprites.draw('idle', context, this.position.x, this.position.y);
    };

    mario.jump = function jumpMario() {
      engageTime = duration;
    };

    mario.jumpStop = function jumpStop() {
      engageTime = 0;
    };

    mario.update = function updateMario() {
      if (engageTime > 0) {
        mario.position.y -= upvelo;
        engageTime -= 1 / 60;
      }
      // mario.position.x += mario.velocity.x;
      mario.position.y += mario.velocity.y;
      mario.velocity.y += gravity;
    };

    return mario;
  });
}
