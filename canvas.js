class Canvas {
  constructor({ colors, defaultColor }) {
    this.activeColor = defaultColor;
    this.colors = colors;
  }

  changeActiveColor(newColor) {
    this.activeColor = newColor;
  }

  getActiveColor() {
    return this.activeColor;
  }

  render(selector) {
    const container = document.querySelector(selector);
    container.classList.add('canvas');

    this.colors.forEach((color) => {
      const colorPicker = document.createElement('div');
      colorPicker.classList.add('color-picker');
      colorPicker.style.backgroundColor = color;
      colorPicker.addEventListener('click', () => {
        this.changeActiveColor(color);
      });
      container.appendChild(colorPicker);
    });

    return container;
  }
}
