import React from 'react';
import './ShowTimer.css'
const showTimer = (props) => {

    return (
        <div className={'showTimer' + ((props.status === 'START' || props.status === 'STOP') && props.count <= 10 ? ' danger' : '')}>
            <h1>{props.count}</h1>
        </div>
    );
}

export default showTimer;

