class Board {
  constructor({ columns, rows, selector, canvas, defaultColor, squareSize }) {
    this.columnCount = columns;
    this.rowCount = rows;
    this.selector = selector;
    this.canvas = canvas;
    this.defaultColor = defaultColor;
    this.squareSize = squareSize;
  }

  render() {
    const board = document.createElement('div');
    for (let i; i < this.rowCount; i++) {
      const row = document.createElement('section');
      for (let j; j < this.columnCount; j++) {
        const square = new Square({
          canvas: this.canvas,
          defaultColor: this.defaultColor,
          canvas: this.canvas,
        });

        row.appendChild(square);
      }
      board.appendChild(row);
    }

    return board;
  }
}
