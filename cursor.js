class Cursor {
  constructor() {
    document.querySelector('body').addEventListener('mouseup', this.setUp.bind(this));
    document.querySelector('body').addEventListener('mousedown', this.setDown.bind(this));
  }

  get isActive() {
    return this.active;
  }

  setUp() {
    this.active = false;
  }

  setDown() {
    this.active = true;
  }
}
