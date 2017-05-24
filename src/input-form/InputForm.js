import React, { Component } from 'react';
import { connect } from 'react-redux';
import './InputForm.css';
import fetchUser from '../state/actionCreators';

const mapStateToProps = state => ({
  users: state.userData.users
})
const mapDispatchToProps = dispatch => ({
  getUser: user => dispatch(fetchUser(user)),
});

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
    this.props.getUser(e.target.value)
  }

  render() {
    console.log('this.props.users', this.props.users)
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

export default connect(mapStateToProps, mapDispatchToProps)(InputForm);
