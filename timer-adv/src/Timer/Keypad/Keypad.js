import React from 'react';
import Key from '../Key/Key';

const keypad = (props) => {

    return (
        <div>
            {
                props.status === null &&
                <div className="Keypad">
                    <div className="key-row">
                        <Key value={1} onClick={() => props.onClick(1)} />
                        <Key value={2} onClick={() => props.onClick(2)} />
                        <Key value={3} onClick={() => props.onClick(3)} />
                    </div>
                    <div className="key-row">
                        <Key value={4} onClick={() => props.onClick(4)} />
                        <Key value={5} onClick={() => props.onClick(5)} />
                        <Key value={6} onClick={() => props.onClick(6)} />
                    </div>
                    <div className="key-row">
                        <Key value={7} onClick={() => props.onClick(7)} />
                        <Key value={8} onClick={() => props.onClick(8)} />
                        <Key value={9} onClick={() => props.onClick(9)} />
                    </div>
                    <div className="key-row">
                        <Key value={'X'} onClick={() => props.onClick('X')} />
                        <Key value={0} onClick={() => props.onClick(0)} />
                        <Key value={'-'} onClick={() => props.onClick('-')} />
                    </div>
                </div>}
        </div>
    );
}
export default keypad;