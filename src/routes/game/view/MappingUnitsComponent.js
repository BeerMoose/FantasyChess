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
      selectedUnit: null
    };
    this.field = [];
    this.clickOnCell = this.clickOnCell.bind(this);
    this.createUnitsField = this.createUnitsField.bind(this);
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
    if (!this.field.matrix[line][cellIndex].unit && this.state.selectedUnit) {
      this.field.matrix[line][cellIndex].unit = this.state.selectedUnit;
      this.setState({
        selectedUnit: null
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

  createUnitsField () {
    return (
      <div className='prepare-field-container'>
        {
          this.field.matrix[0].map((cell) =>
            <CellComponent clickHandler={this.clickOnCell}
              key={'prepare-field-cell-' + parseInt(Math.random() * 100000, 10)}
              cell={cell} />)
        }
      </div>
    );
  }

  createUnitsInfo () {
    let unit = this.state.selectedUnit;
    if (!unit) {
      return '';
    }
    console.log(unit);
    return (
      <div className='units-info-container'>
        <div className='units-info-pict'>
          <img src={unit.pictUrl} />
        </div>
        <div className='units-info-class'>
          {classes[unit.class]}
        </div>
        <div className='units-info-stats'>
          <div className='units-info-stats-hp'>
            <img src='styles/images/sword.svg' alt='' />
            {unit.hp}
          </div>
          <div className='units-info-stats-def'>
            <img src='styles/images/shield.svg' alt='' />
            {unit.def}
          </div>
        </div>
      </div>
    );
  }

  render () {
    return (
      <div className='prepare-container'>
        <div className='prepare-container-left'>
          {this.createUnitsField()}
          {this.createUnitsSelecter(units.filter((unit) => unit.class === this.state.classId))}
          <button className='ready-to-go-button' onClick={(e) => this.readyToGoClick(this.field)}>
            Ready to war
          </button>
        </div>
        {
          (this.state.selectedUnit) ? (
            <div className='prepare-container-right'>
              {this.createUnitsInfo()}
            </div>
          ) : ''
        }
      </div>
    );
  }
}

export default MappingUnitsComponent;
