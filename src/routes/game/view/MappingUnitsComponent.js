import React, { Component } from 'react';
import units from '../store/units';
import classes from '../model/classes';
import CellComponent from './CellComponent';
import './styles/mapping-units.css';

class MappingUnitsComponent extends Component {
  constructor () {
    super();
    this.state = {
      classId: 0,
      selectedUnit: -1
    };
    this.field = [];
    this.clickOnCell = this.clickOnCell.bind(this);
    this.readyToGoClick = null;
  }

  componentWillMount () {
    this.field = this.props.field || [];
    this.readyToGoClick = this.props.readyToGoClick;
  }

  getClassName () {
    return classes[this.state.classId];
  }

  classClick (id) {
    this.setState({
      classId: id
    });
  }

  clickOnCell (line, cellIndex) {
    if (!this.field.matrix[line][cellIndex].unit && this.state.selectedUnit !== -1) {
      this.field.matrix[line][cellIndex].unit = this.state.selectedUnit;
      this.setState({
        selectedUnit: -1
      });
    }
  }

  clickOnUnit (unit) {
    this.setState({
      selectedUnit: unit
    });
  }

  createUnitsSelecter (units) {
    return (
      <div className='units-selector-container'>
        <div className='unit-names'>
          {
            classes.map((unitClass) =>
              (
                <div className={'unit-class' + ((classes.indexOf(unitClass) === this.state.classId) ? ' active' : '')}
                  onClick={(e) => this.classClick(classes.indexOf(unitClass))}
                  key={'unit-class-key' + unitClass}
                >
                  {unitClass}
                </div>
              ))
          }
        </div>
        <div className='units-container'>
          {
            units.map((unit) => (
              <div className={'unit-data' + ((unit === this.state.selectedUnit) ? ' active' : '')}
                key={'unit-data-key' + unit.name}
                onClick={(e) => this.clickOnUnit(unit)}>
                <div className='unit-pict'>
                  <img src={unit.pictUrl} alt='' />
                </div>
                <div className='unit-name'>
                  {unit.name}
                </div>
              </div>
            ))
          }
        </div>
      </div>
    );
  }

  render () {
    return (
      <div className='prepare-container'>
        <div className='prepare-field-container'>
          {
            this.field.matrix[0].map((cell) =>
              <CellComponent clickHandler={this.clickOnCell}
                key={'prepare-field-cell-' + parseInt(Math.random() * 100000, 10)}
                cell={cell} />)
          }
        </div>
        {this.createUnitsSelecter(units.filter((unit) => unit.class === this.state.classId))}
        <button className='ready-to-go-button' onClick={(e) => this.readyToGoClick(this.field)}>
          Ready to war
        </button>
      </div>
    );
  }
}

export default MappingUnitsComponent;
