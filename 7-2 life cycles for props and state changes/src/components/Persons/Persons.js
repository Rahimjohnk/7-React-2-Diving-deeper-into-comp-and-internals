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
    
    shouldComponentUpdate(nextProps, nextState) {
        console.log('2 com [Persons.js] shouldComponentUpdate');
        return true;
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
