class Canvas {
  constructor({ colors, defaultColor, selector }) {
    this.activeColor = defaultColor;
    this.colors = colors;
    this.container = document.querySelector(selector);
    this.container.classList.add('canvas');
  }

  changeActiveColor(newColor) {
    this.activeColor = newColor;
  }

  changeCanvasSize(newSize) {
    const delta = newSize - this.colors.length;
    if (delta < 0) {
      this.colors = this.colors.slice(0, newSize);
    } else {
      this.colors = [...this.colors, ...Array(delta).fill(this.defaultColor)];
    }
    this.render();
  }

  getActiveColor() {
    return this.activeColor;
  }

  render() {
    this.container.classList.add('color-pickers');
    this.container.innerHTML = '';

    this.colors.forEach((color) => {
      const colorPicker = document.createElement('div');
      colorPicker.classList.add('color-picker');
      colorPicker.style.backgroundColor = color;
      colorPicker.addEventListener('click', () => {
        this.changeActiveColor(color);
      });
      this.container.appendChild(colorPicker);
    });

    return this.container;
  }
}
