import React from 'react';
import Person from './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>The person name is {props.name} and age is {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed}  value={props.name} />
        </div>
    )
};

export default person;