import React from 'react';

const Toggle = (props) => (

    <button onClick={props.clicked}>
        {!props.show ? 'Show Date' : 'Hide Date'}
    </button>
);

export default Toggle;