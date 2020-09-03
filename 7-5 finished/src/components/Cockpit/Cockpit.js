import React, { useEffect, useRef , useContext} from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';


const cockpit = (props) => {
    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext);

    console.log(authContext);

    useEffect(() => {
        console.log('[Cockpit.js useEffect]');

        // setTimeout(() => {
        //     alert('persons states changed');
        // }, 1000);
        // it useEffect called after the component rendering
        toggleBtnRef.current.click();
        return () => {
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
                onClick={props.clicked}
                ref={toggleBtnRef}>Toggle persons</button>
                {/* constext date bypassing using functional componet useContext hook */}
                <button onClick={authContext.login}>Log in</button>
                {/* context bypassing using Authcontext.Consumer */}
                {/* <AuthContext.Consumer>
                    {(context)=> <button onClick={context.login}>Log in</button>}
                </AuthContext.Consumer> */}
                {/* direct context data passing */}
                {/* <button onClick={props.login}>Log in</button> */}
        </div>
    );
};

export default React.memo(cockpit); // React.memo uses functional component optimization