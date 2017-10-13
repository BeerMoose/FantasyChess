import React, { Component } from 'react';
import { reactLocalStorage } from 'reactjs-localstorage';
import FieldComponent from './components/field/FieldComponent';
import Field from './components/field/Field';
import './game.css';

class GameComponent extends Component {
  getUserName () {
    return reactLocalStorage.get('userName') || 'user';
  }

  render () {
    const field = new Field(8);
    return (
      <div className='game-content'>
        <div className='game-header'>
          <div className='game-user'>
            <h1>Player: {this.getUserName()}</h1>
          </div>
        </div>
        <div className='game-body'>
          <FieldComponent field={field} />
        </div>
      </div>

    );
  }
}

export default GameComponent;
