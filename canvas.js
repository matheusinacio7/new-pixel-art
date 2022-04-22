class Canvas {
  constructor({ colors, defaultColor, selector }) {
    this.activeColor = defaultColor;
    this.newSwapColor = null;
    this.colors = colors;
    this.colorPickers = [];
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

  changeColor(newColor, index) {
    this.colors[index] = newColor;
    this.colorPickers[index].style.backgroundColor = newColor;
    this.render();
    this.newColor = null;
  }

  setNewColor(newColor) {
    this.newColor = newColor;
  }

  getActiveColor() {
    return this.activeColor;
  }

  render() {
    this.container.classList.add('color-pickers');
    this.container.innerHTML = '';
    this.colorPickers = [];

    this.colors.forEach((color, index) => {
      const colorPicker = document.createElement('div');
      colorPicker.classList.add('color-picker');
      colorPicker.style.backgroundColor = color;
      colorPicker.addEventListener('click', () => {
        if (this.newColor) {
          this.changeColor(this.newColor, index);
        } else {
          this.changeActiveColor(color);
        }
      });
      this.colorPickers.push(colorPicker);
      this.container.appendChild(colorPicker);
    });

    return this.container;
  }
}
