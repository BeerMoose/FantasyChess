class Cell {
  constructor (line, cellIndex) {
    this.line = line;
    this.cellIndex = cellIndex;
    this.unit = null;
    this.spell = null;
    this.availableForMove = false;
  }

  canMove () {
    return !(this.unit);
  }
}

export default Cell;
