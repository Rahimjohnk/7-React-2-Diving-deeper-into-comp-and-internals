import React from 'react';

// const withClass = props => {
//     return (
//         <div className={props.classes}>
//             {props.children}
//         </div>
//     )
// }

// new it not a component normal function that returns WrapperComponent
const withClass = (WrapperComponent, className) => {
    return props => (
        <div className={className}>
            <WrapperComponent {...props}/>
        </div>
    );
}

export default withClass;