import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Auxiliary from '../hoc/auxiliary';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[1 App.js constructor]');
  }
  state = {
    persons: [
      { id: "aaa1", name: 'Max', age: 28 },
      { id: "bbb1", name: 'Manu', age: 29 },
      { id: "ccc1", name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true
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

    this.setState({ persons: persons });
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

  render() {
    console.log('[3 App.js render]');
    let person = null;
    if (this.state.showPersons) {
      person =
        <Persons persons={this.state.persons} clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler} />
    }

    return (
      <Auxiliary>
        {/* <WithClass classes={classes.App}> */}
        {/* // <div className={classes.App}> */}
        <button onClick={() => {
          this.setState({ showCockpit: false });
        }}>Remove cockpit</button>
        {this.state.showCockpit ? (
          <Cockpit title={this.props.appTitle} showPersons={this.state.showPersons}
            personsLenght={this.state.persons.length} clicked={this.togglePersonsHandler} />
        ) : null}
        {person}
        {/* // </div> */}
        {/* </WithClass> */}
      </Auxiliary>
    );
  }
}

export default withClass(App, classes.App);
