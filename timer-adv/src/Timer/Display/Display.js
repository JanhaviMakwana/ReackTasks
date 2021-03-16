import React from 'react';
import Time from '../Time';
import './Display.css'

const Display = (props) => {

    const time = new Time();

    return (
        <div className="display">
            {
                props.timeInterval &&
                (
                    <div className="time">{time.getTime(props.timeInterval)}</div>
                )
            }
            {!props.timeInterval &&
                <div>
                    <div>
                        <label className="label">H</label>
                        <label className="label">M</label>
                        <label className="label">S</label>
                    </div>
                    <div className="input-div">
                        <input
                            className="Input"
                            type="text"
                            maxLength="2"
                            placeholder="00"
                            onFocus={() => props.onFocusChange('H')}
                            onChange={props.onInputChange}
                            value={props.hours}
                        /><div className="span"><h1>:</h1></div>
                        <input
                            className="Input"
                            type="text"
                            maxLength="2"
                            placeholder="00"
                            onFocus={() => props.onFocusChange('M')}
                            onChange={props.onInputChange}
                            value={props.minutes}
                        /><div className="span"><h1>:</h1></div>
                        <input
                            className="Input"
                            type="text"
                            maxLength="2"
                            placeholder="00"
                            onFocus={() => props.onFocusChange('S')}
                            onChange={props.onInputChange}
                            value={props.seconds}
                        />
                    </div>
                </div>
            }
        </div>
    );
}

Display.defaultProps = {
    onInputChange: () => { },
    hours: '00',
    minutes: '00',
    seconds: '00'
}

export default Display;