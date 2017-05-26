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
    // this.props.getUser(e.target.value)
      // this.prepareDisplayedItems()
  }
  
  prepareDisplayedItems = () => {
    const people = this.props.people;
    console.log('people', this.props.people)

    // This regex filters items depending on input value
    let pattern = new RegExp("\\b" + this.state.inputValue);
    const regexedPeople = people.filter(
      man => pattern.test(man.name),
    );

    console.log('regexedPeople', regexedPeople)
    // It limits displayed number of items 
    const displayLimiter = 8;
    const mappedPeople = regexedPeople.slice(0, displayLimiter).map(
      man => <p key={man.id}>{man.name}</p>
    );
    console.log('mappedPeople', mappedPeople)

    // this.setState({ availablePeople: mappedPeople });
    // return mappedPeople
  }

  render() {
    const people = this.props.people;
    console.log('people', this.props.people)

    // This regex filters items depending on input value
    let pattern = new RegExp("\\b" + this.state.inputValue);
    const regexedPeople = people.filter(
      // item => item.name === this.state.inputValue,
      item => pattern.test(item.name)

    );

    console.log('regexedPeople', regexedPeople)
    // It limits displayed number of items 
    const displayLimiter = 8;
    const mappedPeople = regexedPeople.slice(0, displayLimiter).map(
      man => <p key={man.id}>{man.name}</p>
    );
    console.log('mappedPeople', mappedPeople)
    console.log('this.props.people[0]', this.props.people[0])
    console.log('this.props.people[0].name', this.props.people[0])
    return (
      <div className="gh-form">
        {/*<label>Input a github user login:</label>
        <br />
        <input
          type="text"
          name="ghLogin"
          onChange={e => this.onInputChange(e)}
          className="gh-input"
          value={this.state.inputValue}
        />*/}
        <label>Input a name from mock list:</label>
        <br />
        <input
          type="text"
          name="mockName"
          onChange={e => this.onInputChange(e)}
          className="gh-input"
          value={this.state.inputValue}
        />
        <div>

          {
            mappedPeople
          }
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputForm);

  {/*this.state.availablePeople*/ }
  {/*{this.prepareDisplayedItems}*/ }

