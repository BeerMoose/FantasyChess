class Cell {
  constructor () {
    this.unit = null;
    this.spell = null;
  }

  canMove () {
    return true;
  }

  canMoveThrough () {
    return true;
  }
}

export default Cell;
