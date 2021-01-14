import React from 'react';

const userInput = (props) => {
    const style = {
        border: '2px solid orange'
    };

    return <input 
    style={style}
    type='text' 
    onChange={props.changed}
    value={props.name} />
};

export default userInput;