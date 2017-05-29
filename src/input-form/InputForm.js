import React, { Component } from 'react';
import { connect } from 'react-redux';
import './InputForm.css';
import AutoCompleter from '../auto-completer/AutoCompleter';
import fetchUser, { fetchPeople } from '../state/actionCreators';

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
      inputValue: '',
      mockInputValue: '',
      selectedPerson: null,
      moreInfo: '',
      selectedLogin: null,
    })
  }
  // fetches people data from mock file
  componentWillMount() {
    this.props.fetchData()
  }
  // fires on input change; args: event object
  // fetches users based on typed input
  onInputChange = e => {
    this.setState({
      inputValue: e.target.value
    })
    this.props.getUser(e.target.value)
  }
  // fires on input change; args: event object
  onMockInputChange = e => {
    this.setState({
      mockInputValue: e.target.value,
    })
  }
  // fires when a name is picked in AutoCompleter; args: id of a person
  // the person is filtered from array and person object goes to state
  selectPerson = id => {
    this.setState({
      selectedPerson: this.props.people.filter(
        name => id === name.id
      )[0],
      mockInputValue: ''
    })
  }
    // fires when a login is picked in AutoCompleter; args: id of a user
  // the user is filtered from array and user object goes to state
  selectLogin = id => {
    this.setState({
      selectedLogin: this.props.users.items.filter(
        user => id === user.id
      )[0],
      inputValue: ''
    })
  }
  // fires when a name in AutoCompleter is hovered; args: id of a person
  // the person is filtered from array and persons surname string goes to state
  showSurname = id => {
    this.setState({
      moreInfo: this.props.people.filter(
        name => id === name.id
      )[0].surname
    })
  }
    // fires when an item in AutoCompleter is hovered; args: id of a person
  // the person is filtered from array and users id string goes to state
  showId = id => {
    this.setState({
      githubUserId: this.props.users.items.filter(
        item => id === item.id
      )[0].id
    })
  }
  // it makes the other AutoCompleter dissapear by putting its value to zero
  handleGithubOnFocus = () => {
    this.setState({
      mockInputValue: ''
    })
  }
  // it makes the other AutoCompleter dissapear by putting its value to zero
  handleMockOnFocus = () => {
    this.setState({
      inputValue: ''
    })
  }
  // if ESC pressed, input values reset and AutoCompleter dissapeaers
  handleKeyDown = e => {
    if (e.keyCode === 27) {
      this.setState({
        inputValue: '',
        mockInputValue: ''
      })
    }
  }

  render() {
    // console.log('this.props.users',this.props.users)
    // console.log('this.props.users.items',this.props.users.items)
    return (
      <div className="input-forms">
        <label>Input a github user login:</label>
        <br />
        <input
          type="text"
          name="ghLogin"
          onChange={e => this.onInputChange(e)}
          onFocus={this.handleGithubOnFocus}
          onKeyDown={this.handleKeyDown}
          className="gh-input"
          value={this.state.inputValue}
        />
        {/*if an input value is not empty, AutoCompleter appears*/}
        {
          this.state.inputValue.length >= 1 && this.props.users ?
            <div className='completer-mount'>
              <AutoCompleter
                searchData={this.props.users.items}
                searchFor='login'
                inputValue={this.state.inputValue}
                handleItemSelect={this.selectLogin}
                searchForMore='id'
                displayMoreInfo={this.showId}
                moreInfo={this.state.githubUserId}
              />
            </div>
            : null
        }
        {/*display of a github login with its id*/}
        {
          this.state.selectedLogin !== null ?
            <div className="selected-item">
              You selected {this.state.selectedLogin.login}, <br />
              whose id is {this.state.selectedLogin.id}
            </div>
            :
            null
        }
        <label>Pick a name from a mock list:</label>
        <br />
        <input
          type="text"
          name="mockName"
          onChange={e => this.onMockInputChange(e)}
          onFocus={this.handleMockOnFocus}
          onKeyDown={this.handleKeyDown}
          className="gh-input"
          value={this.state.mockInputValue}
        />
        {/*if an input value is not empty, AutoCompleter appears*/}
        {
          this.state.mockInputValue !== '' ?
            <div className='completer-mount'>
              <AutoCompleter
                searchData={this.props.people}
                searchFor='name'
                inputValue={this.state.mockInputValue}
                handleItemSelect={this.selectPerson}
                searchForMore='surname'
                displayMoreInfo={this.showSurname}
                moreInfo={this.state.moreInfo}
              />
            </div>
            : null
        }
        {/*display of some details of a person, like name and email*/}
        {
          this.state.selectedPerson !== null ?
            <div className="selected-item">
              You selected {this.state.selectedPerson.name}, <br />
              whose e-mail is {this.state.selectedPerson.email}
            </div>
            :
            null
        }
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputForm);

