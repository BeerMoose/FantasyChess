import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import { reactLocalStorage } from 'reactjs-localstorage';
import './welcome.css';

class WelcomeComponent extends Component {
  constructor () {
    super();
    this.state = {
      inputValue: ''
    };

    this.updateValue = this.updateValue.bind(this);
    this.submitName = this.submitName.bind(this);
  }

  updateValue (e) {
    this.setState({
      inputValue: e.target.value
    });
  }

  submitName () {
    reactLocalStorage.set('userName', this.state.inputValue);
    hashHistory.push('/game');
  }

  render () {
    return (
      <div className='welcome-content'>
        <div className='welcome-header'>
          <div className='welcome-logo'>
            <img src='styles/images/logo.png' alt='' />
          </div>
        </div>
        <div className='welcome-body'>
          <form onSubmit={this.submitName} className='welcome-form'>
            <input className='input-value' value={this.state.inputValue} onChange={this.updateValue} placeholder='Enter your name:' />
            <input className='input-submit' type='submit' value='Submit' />
          </form>
        </div>
      </div>

    );
  }
}

export default WelcomeComponent;
