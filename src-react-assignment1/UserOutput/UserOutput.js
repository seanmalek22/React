import React from 'react';
import './UserOutput.css'

const userOutput = (props) => {
    return (
        <div className='UserOutput'>
            <p>Username: {props.userName}</p>
            <p>I wish coronavirus didn't exist.</p>
        </div>
    );
};

export default userOutput;