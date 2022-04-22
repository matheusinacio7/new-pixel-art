class Canvas {
  constructor() {
    this.activeColor = 'white';
  }

  changeActiveColor(newColor) {
    this.activeColor = newColor;
  }

  getActiveColor() {
    return this.activeColor;
  }
}
