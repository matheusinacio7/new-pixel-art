const canvas = new Canvas({
  defaultColor: 'black',
  colors: ['black', 'red', 'green', 'yellow'],
});

canvas.render('#canvas');

const board = new Board({
  columns: 10,
  rows: 10,
  canvas,
  defaultColor: 'white',
  squareSize: 40,
  selector: '#board',
});

board.render();
