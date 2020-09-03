import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    useEffect(() => {
        console.log('[Cockpit.js useEffect]');
        // http request

        // const timer = setTimeout(() => {
        setTimeout(() => {
            alert('persons states changed');
        }, 1000);
        return () => {
            // clearTimeout(timer);
            console.log('we can do like component destroy function or clean up work here in useEffect');
        }

        // }, [props.persons]); // only executes when persons data state changed 
    }, []); // only executes when component init 

    useEffect(() => {
        console.log('[Cockpit.js ] 2nd useEffect');
        return () => {
            console.log('2nd useEffect we can do like component destroy function or clean up work here in useEffect');
        }
    });

    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Black;
    }
    if (props.personsLenght <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.personsLenght <= 1) {
        assignedClasses.push(classes.bold);
    }
    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button className={btnClass}
                onClick={props.clicked}>Toggle persons</button>
        </div>
    );
};

export default React.memo(cockpit); // React.memo uses functional component optimization