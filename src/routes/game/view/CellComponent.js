import React, { Component } from 'react';
import './styles/cell.css';
class CellComponent extends Component {

  constructor () {
    super();
    this.state = {
      cell: null
    };
  }

  componentWillMount () {
    this.setState({
      cell: this.props.cell
    });
  }

  generateStyleForUnit () {
    let style = {};
    let cell = this.state.cell;
    style.background = (cell.unit) ? 'url(\'' + cell.unit.data.pictUrl + '\') no-repeat 50px 50px transparent' : 'red';
    return style;
  }

  getUrlToPict () {
    let cell = this.state.cell;
    return (cell.unit) ? cell.unit.data.pictUrl : '';
  }

  render () {
    return (
      <div className='cell-container'>
        <div className='cell-inside'>
          <div className='unit-value' style={this.generateStyleForUnit()} />
        </div>
      </div>
    );
  }
}

export default CellComponent;
