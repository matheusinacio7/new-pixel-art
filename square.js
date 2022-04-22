class Square {
  constructor({ size, defaultColor, canvas, cursor }) {
    this.defaultColor = defaultColor;
    this.color = defaultColor;
    this.height = size;
    this.width = size;
    this.canvas = canvas;
    this.cursor = cursor;
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

    element.addEventListener('mouseenter', () => {
      const activeButton = this.cursor.activeButton;

      if (!['left', 'right'].includes(activeButton)) {
        return;
      }

      const newColors = {
        'right': this.defaultColor,
        'left': this.canvas.getActiveColor(),
      };

      element.style.backgroundColor = newColors[activeButton];
    });

    this.element = element;
    return element;
  }
}
