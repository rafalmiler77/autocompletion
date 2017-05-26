import React, { Component } from 'react';
import { connect } from 'react-redux';
import './InputForm.css';
import AutoCompleter from '../auto-completer/AutoCompleter';
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
      inputValue: '',
      mockInputValue: '',
      selectedPerson: null,
    })
  }

  componentWillMount() {
    this.props.fetchData()
  }

  onInputChange = e => {
    this.setState({
      inputValue: e.target.value
    })
    // this.props.getUser(e.target.value)
  }

  onMockInputChange = e => {
    this.setState({
      mockInputValue: e.target.value
    })
  }
  selectItem = id => {
    this.setState({
      selectedPerson: this.props.people.filter(
        name => id === name.id
      )[0]
    })
  }
  
  render() {
    return (
      <div className="input-forms">
        {/*<label>Input a github user login:</label>
        <br />
        <input
          type="text"
          name="ghLogin"
          onChange={e => this.onInputChange(e)}
          className="gh-input"
          value={this.state.inputValue}
        />*/}
        <label>Pick a name from a mock list:</label>
        <br />
        <input
          type="text"
          name="mockName"
          onChange={e => this.onMockInputChange(e)}
          className="gh-input"
          value={this.state.mockInputValue}
        />
         {
           this.state.mockInputValue !== '' ?
            <div className='completer-mount'>
              <AutoCompleter
                searchData={this.props.people}
                inputValue={this.state.mockInputValue}
                handleItemSelect={this.selectItem}
              />
             </div>
             : null
         }
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


