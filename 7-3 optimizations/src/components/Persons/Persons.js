import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
    // static getDerivedStateFromProps(props, state) {
    //     console.log('1 com [Persons.js] getDerivedStateFromProps');
    //     return state;
    // }

    // componentWillReceiveProps(nextProps) {
    //     console.log(' com [Persons.js] componentWillReceiveProps', nextProps);
    // }

    shouldComponentUpdate(nextProps, nextState) { // it uses for class based component optimization
        console.log('2 com [Persons.js] shouldComponentUpdate');
        if (nextProps.persons !== this.props.persons
            || nextProps.clicked !== this.props.clicked
            || nextProps.changed !== this.props.changed) {
            return true; // if any psrsons states has changed 
            // then only it allow to render else return false this person.js
        } else {
            return false;
        }
        // return true;
    }
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
            />);
        });
    }
}

// const persons = (props) => {
//     console.log('4 [Persons.js render]');
//     return props.persons.map((person, index) => {
//         return (<Person
//             name={person.name}
//             age={person.age}
//             click={() => props.clicked(index)}
//             key={person.id}
//             changed={(event) => props.changed(event, person.id)}
//         />);
//     });
// };


// export default persons;

export default Persons;
