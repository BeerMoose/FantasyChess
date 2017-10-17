import React, { Component } from 'react';
import { reactLocalStorage } from 'reactjs-localstorage';
import FieldComponent from '../view/FieldComponent';
import Field from '../controllers/Field';
import MappingUnitsComponent from './MappingUnitsComponent';
import '../view/styles/game.css';


class GameComponent extends Component {
  constructor () {
    super();
    this.state = {
      prepare: true
    };
    this.gameField = new Field(8);
    this.readyToGoClick = this.readyToGoClick.bind(this);
  }

  getUserName () {
    return reactLocalStorage.get('userName') || 'user';
  }

  readyToGoClick (units) {
    this.setState({
      prepare: !this.state.prepare
    });
    this.gameField.matrix[0] = units.matrix[0];
  }

  render () {
    const prepareGameField = new Field(8, 1);
    return (
      <div className='game-content'>
        <div className='game-header'>
          <div className='game-user'>
            <h1>Player: {this.getUserName()}</h1>
          </div>
        </div>
        <div className='game-body'>
          {
            (this.state.prepare) ? <MappingUnitsComponent readyToGoClick={this.readyToGoClick} field={prepareGameField} /> : <FieldComponent field={this.gameField} />
          }
        </div>
      </div>

    );
  }

}

export default GameComponent;
