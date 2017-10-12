import React, { Component } from 'react';
import { reactLocalStorage } from 'reactjs-localstorage';
import FieldComponent from './field/FieldComponent';
import './game.css';

class GameComponent extends Component {
  getUserName () {
    return reactLocalStorage.get('userName') || 'user';
  }

  render () {
    return (
      <div className='game-content'>
        <div className='game-header'>
          <div className='game-user'>
            <h1>Player: {this.getUserName()}</h1>
          </div>
        </div>
        <div className='game-body'>
          <FieldComponent size={8} />
        </div>
      </div>

    );
  }
}

export default GameComponent;
