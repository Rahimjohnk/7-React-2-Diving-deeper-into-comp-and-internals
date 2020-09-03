// import React, { Component, Fragment } from 'react'; // for  if we using Fragment
import React, { Component } from 'react';
import classes from './Person.css';
import Auxiliary from '../../../hoc/auxiliary';
import withClass from '../../../hoc/withClass';

// hoc higher order component
class Person extends Component {

    render() {
        console.log('5 [Person.js render]');
        return (
            <Auxiliary> 
             {/* <React.Fragment>
             <Fragment> same as like auxiliary */}
                < p onClick={this.props.click} > I'm {this.props.name} and I am {this.props.age} years old!</p>
                < p > {this.props.children}</p >
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            {/* </Fragment>
             </React.Fragment> same as like auxiliary*/}
             </Auxiliary> 
        );


        // array of obj with key rep jsx
        // return [
        //     < p key="key1" onClick={this.props.click} > I'm {this.props.name} and I am {this.props.age} years old!</p>,
        //     < p key="key2" > {this.props.children}</p >,
        //     <input  key="key3" type="text" onChange={this.props.changed} value={this.props.name} />
        // ]
        // normal jsx
        // return (
        //     <div className={classes.Person}>
        //         < p onClick={this.props.click} > I'm {this.props.name} and I am {this.props.age} years old!</p>
        //         < p > {this.props.children}</p >
        //         <input type="text" onChange={this.props.changed} value={this.props.name} />
        //     </div>
        // )
    }
}


export default withClass(Person, classes.Person);