import React, { Component } from 'react';
import './field.css';
import CellComponent from '../cell/CellComponent';


class FieldComponent extends Component {
  render () {
    const field = this.props.field;
    return (
      <div className='field-content'>
        {
          field.matrix.map((line) =>
            (
              <div className='line-class' key={Math.random() * 124234234}>
                {
                  line.map((cell) => <CellComponent cell={cell} key={'cell-component-key' + parseInt(Math.random() * 1234567, 10)} />)
                }
              </div>
            )
          )
        }
      </div>
    );
  }
}

export default FieldComponent;
