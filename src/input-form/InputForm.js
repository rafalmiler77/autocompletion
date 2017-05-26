import React, { Component } from 'react';
import { connect } from 'react-redux';
import './InputForm.css';
import AutoCompleter from '../auto-completer/AutoCompleter';
import fetchPeople from '../state/actionCreators';

const mapStateToProps = state => ({
  people: state.userData.people,
})
const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(fetchPeople()),
});

class InputForm extends Component {
  constructor() {
    super()
    this.state = ({
      mockInputValue: '',
      selectedPerson: null,
      surname: '',
    })
  }
// fetches people data
  componentWillMount() {
    this.props.fetchData()
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
      surname: this.props.people.filter(
        name => id === name.id
      )[0].surname
    })
  }

  render() {
    return (
      <div className="input-forms">
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
                inputValue={this.state.mockInputValue}
                handleItemSelect={this.selectItem}
                showSurname={this.showSurname}
                surnameValue={this.state.surname}
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


