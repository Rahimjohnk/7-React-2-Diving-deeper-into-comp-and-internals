import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Auxiliary from '../hoc/auxiliary';
import AuthContext from '../context/auth-context';


class App extends Component {
  constructor(props) {
    super(props);
    console.log('[1 App.js constructor]');
  }
  state = {
    persons: [
      { id: "aaa1", name: 'Max', age: 28 },
      { id: "bbb1", name: 'Rahim', age: 25 },
      { id: "ccc1", name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[2 App.js getDerivedStateFromProps]', props);
    return state;
  }

  // componentWillMount() {
  //   console.log('[ App.js componentWillMount]');
  // }

  componentDidMount() {
    console.log('[6 App.js componentDidMount]');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[ App.js componentDidUpdate]');
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('[ App.js componentDidUpdate]');
  }


  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });


    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    // this.setState({ persons: persons });
    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      }
    });
    // but this is the better way and the
    //  recommended way of updating the state when you're depending on old state
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }
  loginHandler = () => {
    this.setState({ authenticated: true });
  }

  render() {
    console.log('[3 App.js render]');
    let person = null;
    if (this.state.showPersons) {
      person =
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          isAuthenticated={this.state.authenticated}
        />
    }

    return (
      <Auxiliary>
        <button onClick={() => {
          this.setState({ showCockpit: false });
        }}>Remove cockpit</button>
        {/* AuthContext --> data,  that can be passed between React components 
        .Provider to set paasing data*/}
        <AuthContext.Provider value={{
          authenticated: this.state.authenticated,
          login: this.loginHandler
        }}>
          {this.state.showCockpit ? (
            <Cockpit title={this.props.appTitle} showPersons={this.state.showPersons}
              personsLenght={this.state.persons.length} clicked={this.togglePersonsHandler}
              // login={this.loginHandler} 
              />
          ) : null}
          {person}
        </AuthContext.Provider>
      </Auxiliary>
    );
  }
}

export default withClass(App, classes.App);
