import Cell from './Cell';
import unitsStore from '../store/units';
import Unit from './Unit';


class Field {
  constructor (size) {
    this.size = size;
    this.matrix = [];
    this.generateMatrix();
  }

  generateMatrix () {
    let units = [
      new Unit(unitsStore[0]),
      new Unit(unitsStore[1]),
      new Unit(unitsStore[2]),
      new Unit(unitsStore[3])
    ];
    console.log(units);
    let numberOfLines = 2 * this.size - 1;
    for (let line = 0; line < numberOfLines; line++) {
      this.matrix[line] = [];
      let numOfCellInThisLine = numberOfLines - Math.abs(line - this.size + 1);
      for (let cellIndex = 0; cellIndex < numOfCellInThisLine; cellIndex++) {
        this.matrix[line][cellIndex] = new Cell();
      }
    }

    this.matrix[3][3].unit = units[0];
    this.matrix[6][7].unit = units[1];
    this.matrix[0][0].unit = units[2];
    this.matrix[9][3].unit = units[3];
  }
}

export default Field;
