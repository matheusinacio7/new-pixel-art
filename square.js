class Square {
  constructor({ size, defaultColor, canvas }) {
    this.color = defaultColor;
    this.height = size;
    this.width = size;
    this.canvas = canvas;
    this.element = null;
  }

  setColor(newColor) {
    this.color = newColor;
  }

  render() {
    const element = document.createElement('div');
    element.classList.add('square');
    element.style.height = `${this.height}px`;
    element.style.width = `${this.width}px`;
    element.style.backgroundColor = this.color;

    element.addEventListener('click', () => {
      element.style.backgroundColor = this.canvas.getActiveColor();
    });

    this.element = element;
    return element;
  }
}
