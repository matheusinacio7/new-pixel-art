class Board {
  constructor({ columns, rows, canvas, defaultColor, selector, squareSize }) {
    this.columnCount = columns;
    this.rowCount = rows;
    this.canvas = canvas;
    this.defaultColor = defaultColor;
    this.board = document.querySelector(selector);
    this.squareSize = squareSize;
  }

  render() {
    this.board.classList.add('board');
    for (let i = 0; i < this.rowCount; i++) {
      const row = document.createElement('section');
      row.classList.add('row');
      for (let j = 0; j < this.columnCount; j++) {
        const square = new Square({
          canvas: this.canvas,
          defaultColor: this.defaultColor,
          size: this.squareSize,
        }).render();

        row.appendChild(square);
      }
      this.board.appendChild(row);
    }

    return this.board;
  }

  reset() {
    this.board.innerHTML = '';
    this.render();
  }
}
