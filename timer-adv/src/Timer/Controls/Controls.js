import React from 'react';
import './Controls.css'

const controls = (props) => {
    return (
        <div>
            {
                props.status !== 'STARTED' && props.status !== 'STOPPED' &&
                <button className="btn start" onClick={props.onStart} > START</button>
            }
            {
                (props.status === 'STARTED' || props.status === 'STOPPED') &&
                <div>
                    {
                        props.status === 'STARTED' && <button className="btn stop" onClick={props.onStop}>STOP</button>
                    }
                    {
                        props.status === 'STOPPED' && <button className="btn" onClick={props.onResume}>RESUME</button>
                    }
                    <button className="btn reset" onClick={props.onReset}>RESET</button>
                </div>
            }
        </div >
    );
}

export default controls;