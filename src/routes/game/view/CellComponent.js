import React, { Component } from 'react';
import './styles/cell.css';
class CellComponent extends Component {

  constructor () {
    super();
    this.state = {
      cell: null,
      clickHandler: null
    };
  }

  componentWillMount () {
    this.setState({
      cell: this.props.cell,
      clickHandler: this.props.clickHandler
    });
  }

  generateStyleForUnit () {
    let style = {};
    let cell = this.state.cell;
    style.display = (cell.unit) ? 'block' : 'none';
    return style;
  }

  generateStyleForContainer () {
    let style = {};
    let cell = this.state.cell;
    style.background = (cell.availableForMove) ? 'yellow' : '#798A8A';
    return style;
  }

  getUrlToPict () {
    let cell = this.state.cell;
    return (cell.unit) ? cell.unit.data.pictUrl : '';
  }

  render () {
    let { cell, clickHandler } = this.state;
    return (
      <div className='cell-container' onClick={() => clickHandler(cell.line, cell.cellIndex)}>
        <div className='cell-inside' style={this.generateStyleForContainer()}>
          <img src={this.getUrlToPict()} className='unit-value' alt='' style={this.generateStyleForUnit()} />
        </div>
      </div>
    );
  }
}

export default CellComponent;
