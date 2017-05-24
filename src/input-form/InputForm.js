import React, { Component } from 'react';
import './InputForm.css';

class InputForm extends Component {
  constructor() {
    super()
    this.state = ({
      inputValue: ''
    })
  }
  onInputChange = e => {
    console.log('click', e.target.value)
    this.setState({
      inputValue: e.target.value
    })
  }

  render() {
    return (
      <div className="gh-form">
        <label>Input a github user login:</label>
        <br />
        <input
          type="text"
          name="name here"
          onChange={e => this.onInputChange(e)}
          className="gh-input"
          value={this.state.inputValue}
        />
      </div>
    );
  }
}

export default InputForm;
