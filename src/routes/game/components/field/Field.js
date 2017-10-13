import Cell from '../cell/Cell';

class Field {
  constructor (size) {
    this.size = size;
    this.matrix = [];
    this.generateMatrix();
  }

  generateMatrix () {
    let numberOfLines = 2 * this.size - 1;
    for (let line = 0; line < numberOfLines; line++) {
      this.matrix[line] = [];
      let numOfCellInThisLine = numberOfLines - Math.abs(line - this.size + 1);
      for (let cellIndex = 0; cellIndex < numOfCellInThisLine; cellIndex++) {
        this.matrix[line][cellIndex] = new Cell();
      }
    }
  }
}

export default Field;
