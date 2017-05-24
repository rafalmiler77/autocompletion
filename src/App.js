import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  onInputChange = e => {
    console.log('click')
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Auto-completion</h2>
        </div>
        <p className="App-intro">
          Input a github user login:
        </p>
        <div className="gh-form">
          <input
            type="text"
            name="name here"
            onChange={e => this.onInputChange(e)}
            className="gh-input"
            value='some value'
          />
        </div>          
      </div>
    );
  }
}

export default App;
