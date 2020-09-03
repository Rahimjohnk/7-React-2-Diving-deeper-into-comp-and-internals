import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css';
import Auxiliary from '../../../hoc/auxiliary';
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext; // to get context into componentDidMount hook then use like this for class based components

    componentDidMount() {
        // this.inputElementRef.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);// to get context into componentDidMount hook then use like this 
    }

    render() {
        console.log('5 [Person.js render]');
        return (
            <Auxiliary>
                {/* .Consumer to ged passed context data */}
                {/* <AuthContext.Consumer>
                    {
                        (context) =>
                            context.authenticated ? <p>Authenticated!</p> : <p>Please Login !</p>
                    }
                </AuthContext.Consumer> */}
                {/* if we want context into componentDidMount hook then use [static contextType] */}
                {this.context.authenticated ? <p>Authenticated!</p> : <p>Please Login !</p>}
                {/* {this.props.isAuth ? <p>Authenticated!</p> : <p>Please Login !</p>} */}
                < p onClick={this.props.click} > I'm {this.props.name} and I am {this.props.age} years old!</p>
                < p > {this.props.children}</p >
                <input type="text" onChange={this.props.changed} value={this.props.name}
                    // ref={(inputElRef) => { this.inputElementRef = inputElRef }}  // old way
                    ref={this.inputElementRef} // new modern way..
                />
            </Auxiliary>
        );
    }
}
Person.propTypes = { // for type security throwing console alert with error
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default withClass(Person, classes.Person);