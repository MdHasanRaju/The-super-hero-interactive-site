import React from 'react';

const Person = (props) => {
    console.log(props);
    return (
        <div>
            <h5> {props.name} is added</h5>
        </div>
    );
};

export default Person;