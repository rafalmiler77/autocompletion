import React, { Component } from 'react';
import { connect } from 'react-redux';
import './InputForm.css';
import fetchUser from '../state/actionCreators';
import { fetchPeople } from '../state/actionCreators';

const mapStateToProps = state => ({
  users: state.userData.users,
  people: state.userData.people,
})
const mapDispatchToProps = dispatch => ({
  getUser: user => dispatch(fetchUser(user)),
  fetchData: () => dispatch(fetchPeople()),
});

class InputForm extends Component {
  constructor() {
    super()
    this.state = ({
      inputValue: ''
    })
  }

  componentWillMount() {
    this.props.fetchData()
  }

  onInputChange = e => {
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
