const canvas = new Canvas({
  defaultColor: 'black',
  colors: ['black', 'red', 'green', 'yellow'],
});

canvas.render('#canvas');
const cursor = new Cursor();

const board = new Board({
  columns: 10,
  rows: 10,
  canvas,
  defaultColor: 'white',
  squareSize: 40,
  selector: '#board',
  cursor,
  gridded: true,
});

board.render();

function handleFileUpload(event) {
  const file = document.getElementById('file-upload').files[0];
  const reader = new FileReader();
  reader.readAsText(file, 'utf-8');
  reader.onload = function(event) {
    const resultJsonString = event.target.result;
    board.load(resultJsonString);
  }
  event.preventDefault();
}

document.getElementById('form-submit').addEventListener('submit', handleFileUpload);
