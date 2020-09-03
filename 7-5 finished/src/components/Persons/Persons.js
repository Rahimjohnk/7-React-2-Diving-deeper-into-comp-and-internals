import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent { 
    // static getDerivedStateFromProps(props, state) {
    //     console.log('1 com [Persons.js] getDerivedStateFromProps');
    //     return state;
    // }

    // componentWillReceiveProps(nextProps) {
    //     console.log(' com [Persons.js] componentWillReceiveProps', nextProps);
    // }

    
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('3 com [Persons.js] getSnapshotBeforeUpdate');
        return null;
    }
    // componentWillUpdate(nextProps, nextState) {

    // }

    componentDidUpdate(prevProps, prevState) {
        console.log('5 com [Persons.js] componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('com [Persons.js] componentWillUnmount like component destroy removed form view');
    }


    render() {
        console.log('4 [Persons.js render]');
        return this.props.persons.map((person, index) => {
            return (<Person
                name={person.name}
                age={person.age}
                click={() => this.props.clicked(index)}
                key={person.id}
                changed={(event) => this.props.changed(event, person.id)}
                isAuth={this.props.isAuthenticated}
            />);
        });
    }
}

export default Persons;
