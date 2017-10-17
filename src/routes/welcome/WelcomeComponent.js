import React, { Component } from 'react';
import { Link } from 'react-router';
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
  }

  render () {
    return (
      <div className='welcome-content'>
        <div className='welcome-body'>
          <input value={this.state.inputValue} onChange={(e) => this.updateValue(e)} />
          <Link to='/game'>
            <button onClick={() => this.submitName()}>
              Submit
            </button>
          </Link>
        </div>
      </div>

    );
  }
}

export default WelcomeComponent;
