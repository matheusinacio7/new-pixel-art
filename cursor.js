class Cursor {
  constructor() {
    document.body.addEventListener('mouseup', this.setUp.bind(this));
    document.body.addEventListener('mousedown', this.handleMouseDown.bind(this));
    document.body.addEventListener('contextmenu', this.handleContextMenu.bind(this));
  }

  get activeButton() {
    return this.currentActiveButton;
  }

  setUp() {
    this.currentActiveButton = null;
  }

  handleMouseDown(event) {
    if (event.button === 0) {
      this.setDown.bind(this)('left');
    }
  }

  handleContextMenu(event) {
    this.setDown.bind(this)('right');
    event.preventDefault();
    return false;
  }

  setDown(newButton) {
    this.currentActiveButton = newButton;
  }
}
