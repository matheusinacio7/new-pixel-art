class Board {
  constructor({ columns, rows, canvas, defaultColor, squareSize }) {
    this.columnCount = columns;
    this.rowCount = rows;
    this.canvas = canvas;
    this.defaultColor = defaultColor;
    this.squareSize = squareSize;
  }

  render(selector) {
    const board = document.querySelector(selector);
    board.classList.add('board');
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
      board.appendChild(row);
    }

    return board;
  }
}
