import React, { Component } from 'react';


// const Person  = () => {
//     return (
//         <div>
        
//             <p>im person</p>
        
//         </div>);
// }

const Person  = (props) => {
    return (
        <div>
        
            <p>im person {props.name}</p>
        
        </div>);
}


  

export default Person;