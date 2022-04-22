const canvas = new Canvas();
const board = new Board({
  columns: 10,
  rows: 10,
  canvas,
  defaultColor: 'white',
  squareSize: 40,
});

board.render('#board');
