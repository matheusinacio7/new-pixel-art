const canvas = new Canvas();
const square = new Square({ defaultColor: 'white', size: 30, canvas });

document
  .getElementById('teste-legal')
  .appendChild(square.render());
