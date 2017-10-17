import Cell from './Cell';

class Field {
  constructor (numberCellOfFirstLine, numberOfLines) {
    this.numberCellOfFirstLine = numberCellOfFirstLine;
    this.numberOfLines = numberOfLines;
    this.matrix = [];
    this.generateMatrix();
    this.lastSelectedCellWithUnit = null;
  }

  generateMatrix () {
    let numberOfLines = this.numberOfLines || 2 * this.numberCellOfFirstLine - 1;
    for (let line = 0; line < numberOfLines; line++) {
      this.matrix[line] = [];
      let numOfCellInThisLine = Math.max(this.numberCellOfFirstLine, numberOfLines - Math.abs(line - this.numberCellOfFirstLine + 1));
      for (let cellIndex = 0; cellIndex < numOfCellInThisLine; cellIndex++) {
        this.matrix[line][cellIndex] = new Cell(line, cellIndex);
      }
    }
  }

  clickHandler (line, cellIndex) {
    let cell = this.matrix[line][cellIndex];
    if (cell.unit) {
      this.clearAvailableMove();
      this.selectUnit(line, cellIndex);
    } else {
      if (cell.availableForMove) {
        this.makeMove(line, cellIndex);
      }
      this.clearAvailableMove();
    }
  }

  makeMove (line, cellIndex) {
    let cell = this.matrix[line][cellIndex];
    if (cell.availableForMove) {
      cell.unit = this.lastSelectedCellWithUnit.unit;
      this.lastSelectedCellWithUnit.unit = null;
    }
  }

  clearAvailableMove () {
    for (let line = 0; line < this.matrix.length; line++) {
      for (let cellIndex = 0; cellIndex < this.matrix[line].length; cellIndex++) {
        this.matrix[line][cellIndex].availableForMove = false;
      }
    }
  }

  selectUnit (line, cellIndex) {
    this.lastSelectedCellWithUnit = this.matrix[line][cellIndex];
    this.showAvailableMove(line, cellIndex);
  }

  inMatrixRange (i, j) {
    return !(i < 0 || j < 0 || i >= this.matrix.length || j >= this.matrix[i].length || j >= this.matrix[i].length);
  }

  generateDirections (line) {
    let directions = [
      [0, -1],
      [0, 1],
      [-1, 0],
      [1, 0]
    ];
    if (line === this.numberCellOfFirstLine - 1) {
      directions.push([-1, -1], [1, -1]);
    } else if (line < this.numberCellOfFirstLine - 1) {
      directions.push([-1, -1], [1, 1]);
    } else {
      directions.push([-1, 1], [1, -1]);
    }
    return directions;
  }

  showAvailableMove (line, cellIndex) {
    let directions = this.generateDirections(line);
    directions.forEach((direction) => {
      let i = line + direction[0];
      let j = cellIndex + direction[1];
      if (this.inMatrixRange(i, j) && this.matrix[i][j].canMove()) {
        this.matrix[i][j].availableForMove = true;
      }
    });
  }
}

export default Field;
