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
    })
  }
  // fetches people data from mock file
  componentWillMount() {
    this.props.fetchData()
  }
  // fires on input change; args: event object
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
  selectItem = id => {
    this.setState({
      selectedPerson: this.props.people.filter(
        name => id === name.id
      )[0],
      mockInputValue: ''
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
          className="gh-input"
          value={this.state.inputValue}
        />
        {
          this.state.inputValue.length >= 1 && this.props.users ?
            <div className='completer-mount'>
              <AutoCompleter
                searchData={this.props.users.items}
                searchFor='login'
                inputValue={this.state.inputValue}
                handleItemSelect={this.selectItem}
              />
            </div>
            : null
        }
        <label>Pick a name from a mock list:</label>
        <br />
        <input
          type="text"
          name="mockName"
          onChange={e => this.onMockInputChange(e)}
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
                handleItemSelect={this.selectItem}
                displayMoreInfo={this.showSurname}
                moreInfoKey='surname'
                moreInfo={this.state.moreInfo}
              />
            </div>
            : null
        }
        {/*display of some details of a person, like name and email*/}
        {
          this.state.selectedPerson !== null ?
            <div className="selected-person">
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

