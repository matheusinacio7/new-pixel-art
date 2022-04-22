const canvas = new Canvas({
  defaultColor: 'black',
  colors: ['black', 'red', 'green', 'yellow'],
  selector: '#canvas',
});

canvas.render();
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

function changeColorCount(event) {
  const newCount = document.getElementById('color-count-input').value;
  if (newCount < 1 || newCount > 20) {
    return;
  }
  canvas.changeCanvasSize(newCount);
  event.preventDefault();
}

document.getElementById('color-count-form').addEventListener('submit', changeColorCount);

function handleAddNewColor(event) {
  const newColor = document.getElementById('new-color-input').value;
  canvas.setNewColor(newColor);
  event.preventDefault();
}

document.getElementById('new-color').addEventListener('submit', handleAddNewColor);
