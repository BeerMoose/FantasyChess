import Cell from './Cell';
import unitsStore from '../store/units';
import Unit from './Unit';


class Field {
  constructor (size) {
    this.size = size;
    this.matrix = [];
    this.generateMatrix();
    this.lastSelectedCellWithUnit = null;
  }

  generateMatrix () {
    let numberOfLines = 2 * this.size - 1;
    for (let line = 0; line < numberOfLines; line++) {
      this.matrix[line] = [];
      let numOfCellInThisLine = numberOfLines - Math.abs(line - this.size + 1);
      for (let cellIndex = 0; cellIndex < numOfCellInThisLine; cellIndex++) {
        this.matrix[line][cellIndex] = new Cell(line, cellIndex);
      }
    }
    this.generateUnits();
  }

  generateUnits () {
    let units = [
      new Unit(unitsStore[0]),
      new Unit(unitsStore[1]),
      new Unit(unitsStore[2]),
      new Unit(unitsStore[3])
    ];
    this.matrix[0][0].unit = units[0];
    this.matrix[7][7].unit = units[1];
    this.matrix[6][7].unit = units[2];
    this.matrix[9][3].unit = units[3];
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

  inMatrixRange (line, i, j) {
    return !(i < 0 || j < 0 || i >= this.matrix.length || j >= this.matrix[line].length);
  }

  generateDirections (line) {
    let directions = [
      [0, -1],
      [0, 1],
      [-1, 0],
      [1, 0]
    ];
    if (line === this.size - 1) {
      directions.push([-1, -1], [1, -1]);
    } else if (line < this.size - 1) {
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
      if (this.inMatrixRange(line, i, j) && this.matrix[i][j].canMove()) {
        this.matrix[i][j].availableForMove = true;
      }
    });
  }
}

export default Field;
