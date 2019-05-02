class Environment {
  constructor() {
    this.comp = new Compositor();
    this.entities = new Set();
    this.tiles = new GridMatrix();
  }

  update() {
    this.entities.forEach(entity => {
      entity.update();
    });
  }
}
