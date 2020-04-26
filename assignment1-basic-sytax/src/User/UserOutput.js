import React from 'react';
import "./User.css";

const userOutput = (props) => {

    return(
    <div className='User'>
        <p>This is output para.</p>
        <p>Description of output para. Written by {props.userName}</p>
    </div>
    );
}

export default userOutput;