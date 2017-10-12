import React, { Component } from 'react';
import './field.css';


class FieldComponent extends Component {
  generateFieldMatrix (n) {
    let numberOfLines = 2 * n - 1;
    let fieldMatrix = [];
    for (let line = 0; line < numberOfLines; line++) {
      fieldMatrix[line] = [];
      let numOfCellInThisLine = 0;

      if (line < n - 1) {
        numOfCellInThisLine = line + n;
      } else if (line === n - 1) {
        numOfCellInThisLine = 2 * n - 1;
      } else {
        numOfCellInThisLine = numberOfLines - (line % n + 1);
      }

      for (let cellIndex = 0; cellIndex < numOfCellInThisLine; cellIndex++) {
        fieldMatrix[line][cellIndex] = cellIndex;
      }
    }
    return fieldMatrix;
  }

  generateBlocksField (fieldMatrix) {
    return (
      <div>
        {
          fieldMatrix.map((line) => {
            return (
              <div className='line-class' key={Math.random() * 124234234}>
                {
                  line.map((cell) => {
                    return (<div className='cell-class' key={Math.random() * 124234234} >&#x2b21;</div>);
                  })
                }
              </div>
            );
          })
        }
      </div>
    );
  }

  render () {
    let fieldMatrix = this.generateFieldMatrix(this.props.size);
    return this.generateBlocksField(fieldMatrix);
  }
}

export default FieldComponent;
