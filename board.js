class Board {
  constructor({ columns, rows, gridded, canvas, defaultColor, selector, squareSize, cursor }) {
    this.columnCount = columns;
    this.rowCount = rows;
    this.canvas = canvas;
    this.gridded = gridded;
    this.cursor = cursor;
    this.defaultColor = defaultColor;
    this.board = document.querySelector(selector);
    this.squareSize = squareSize;
    this.squares = Array.from(Array(rows), () => Array(columns).fill(null));
  }
  
  clear() {
    this.board.innerHTML = '';
  }

  export() {
    const grid = this.squares.map((row) => row.map((square) => square.color));
    const json = JSON.stringify(grid, null, 2);
    const downloadFileElement = document.createElement('a');
    downloadFileElement.href = 'data:text/json;charset=utf-8,' + encodeURIComponent(json);
    downloadFileElement.download = 'myPixelArt.json';
    document.body.appendChild(downloadFileElement);
    downloadFileElement.click();
    document.body.removeChild(downloadFileElement);
  }

  load(jsonText) {
    const loadedSquares = JSON.parse(jsonText);
    this.clear();
    this.render(loadedSquares);
  }

  toggleGrid(gridded) {
    this.gridded = gridded;

    this.squares
      .reduce((acc, row) => [...acc, ...row], [])
      .forEach((square) => {
        square.setGrid(this.gridded);
      });
  }

  render(loadedSquares) {
    this.board.classList.add('board');
    for (let i = 0; i < this.rowCount; i++) {
      const row = document.createElement('section');
      row.classList.add('row');
      for (let j = 0; j < this.columnCount; j++) {
        const square = new Square({
          canvas: this.canvas,
          defaultColor: this.defaultColor,
          size: this.squareSize,
          cursor: this.cursor,
        });
        square.setGrid(true);
        if (loadedSquares) {
          square.color = loadedSquares[i][j];
        }

        this.squares[i][j] = square;

        row.appendChild(square.render());
      }
      this.board.appendChild(row);
    }

    return this.board;
  }

  reset() {
    this.clear();
    this.render();
  }
}
