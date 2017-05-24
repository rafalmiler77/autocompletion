import React, { Component } from 'react';
import InputForm from './input-form/InputForm';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Auto-completion</h2>
        </div>
        <InputForm />
      </div>
    );
  }
}

export default App;
