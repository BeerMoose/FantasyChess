import React, { Component } from 'react';
import '../view/styles/field.css';
import CellComponent from '../view/CellComponent';


class FieldComponent extends Component {

  constructor () {
    super();
    this.state = {
      field: []
    };

    this.clickHandler = this.clickHandler.bind(this);
  }

  componentWillMount () {
    this.setState({
      field: this.props.field || []
    });
  }

  clickHandler (line, cellIndex) {
    this.state.field.clickHandler(line, cellIndex);
    this.forceUpdate();
  }

  render () {
    const field = this.state.field;
    return (
      <div className='field-content'>
        {
          field.matrix.map((line) =>
            (
              <div className='line-class' key={Math.random() * 124234234}>
                {
                  line.map((cell) => <CellComponent clickHandler={this.clickHandler} cell={cell} key={'cell-component-key' + parseInt(Math.random() * 1234567, 10)} />)
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
