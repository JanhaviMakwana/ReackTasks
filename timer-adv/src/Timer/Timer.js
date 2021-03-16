import React from 'react';
import Keypad from './Keypad/Keypad';
import Controls from './Controls/Controls';
import Display from './Display/Display';
import './Timer.css';


class Timer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hours: '00',
            minutes: '00',
            seconds: '00',
            inputType: null,
            status: null,
            canStart: null
        }
    }

    canStart = () => {
        this.setState((prevState) => ({
            canStart: prevState.status !== 'STARTED' && (parseInt(prevState.hours) > 0)
                || parseInt(prevState.minutes) > 0
                || parseInt(prevState.seconds) > 0
        }))
    }

    setHourHandler = (hours) => {
        if (hours < 0) {
            this.setState({ hours: '00' });
        } else {
            this.setState((prevState) => {
                hours = parseInt(this.formatTime(prevState.hours + hours)); //last key + current key
                if (hours > 99) {
                    hours = prevState.hours
                }
                return ({ hours: this.formatTime(hours) })
            })
        }
    }

    formatTime = (time) => {
        time = parseInt(time);
        return time < 10 ? '0' + time : time.toString().slice(time.toString().length - 2);
    }

    setMinHandler = (minutes) => {

        if (minutes < 0) {
            this.setState({ minutes: '00' });
        } else {
            this.setState((prevState) => {
                minutes = parseInt(this.formatTime(prevState.minutes + minutes));

                if (minutes < 60) {
                    if (parseInt(minutes.toString()[0]) > 5) {
                        minutes = 59;
                    }
                } else if (minutes > 59) {
                    minutes = parseInt(minutes.toString().slice(minutes.toString().length - 1)); //gets last digit
                }

                return ({ minutes: this.formatTime(minutes) })
            })
        }

    }

    setSecondsHandler = (seconds) => {

        if (seconds < 0) {
            this.setState({ seconds: '00' });
        } else {
            this.setState((prevState) => {
                seconds = parseInt(this.formatTime(prevState.seconds + seconds));

                if (seconds < 60) {
                    if (parseInt(seconds.toString()[0]) > 5) {
                        seconds = 59;
                    }
                } else if (seconds > 59) {
                    seconds = parseInt(seconds.toString().slice(seconds.toString().length - 1));
                }

                return ({ seconds: this.formatTime(seconds) });
            })
        }
    }

    displayFocusChangeHandler = (input) => {
        this.setState({ inputType: input });
    }

    keyPressedHandler = (i) => {
        switch (this.state.inputType) {
            case 'H':
                this.setHourHandler(i);
                break;
            case 'M':
                this.setMinHandler(i);
                break;
            case 'S':
                this.setSecondsHandler(i);
                break;

        }
    }


    onStartHandler = () => {
        this.startTimer();
    }

    startTimer = () => {
        console.log("Started");
        if (this.state.status !== 'STARTED') {
            this.setState({ status: 'STARTED' });
        }

        const totalMilliseconds =
            ((parseInt(this.state.hours) * 60 * 60) +
                (parseInt(this.state.minutes) * 60) +
                parseInt(this.state.seconds)) * 1000;

        this.setState(() => ({ timeInterval: parseInt(totalMilliseconds) }));

        this.interval = setInterval(() => {
            this.setState((prevState) => ({ timeInterval: prevState.timeInterval - 10 }));

            if (this.state.timeInterval === 0) {
                clearInterval(this.interval);
                this.setState(() => ({ status: null }));
            }
        }, 10);
    }

    onStopHandler = () => {
        if (this.state.status === 'STARTED') {
            clearInterval(this.interval);
            this.setState({ status: 'STOPPED' });
        }
    }

    onResumeHandler = () => {
        if (this.state.status === 'STOPPED') {
            this.interval = setInterval(() => {
                this.setState((prevState) => ({
                    status: 'STARTED',
                    timeInterval: prevState.timeInterval - 10
                }));

                if (this.state.timeInterval === 0) {
                    clearInterval(this.interval);
                    this.setState(() => ({ status: null }));
                }
            }, 10);
        }
    }

    onResetHandler = () => {
        clearInterval(this.interval);
        this.setState(() => ({ status: null, timeInterval: null }));
    }

    render() {
        return (
            <div className="Timer">
                <Display
                    onFocusChange={this.displayFocusChangeHandler}
                    hours={this.state.hours}
                    minutes={this.state.minutes}
                    seconds={this.state.seconds}
                    timeInterval={this.state.timeInterval}
                />
                <br /><br />
                <Keypad onClick={this.keyPressedHandler} status={this.state.status} />
                <br /><br />
                <Controls
                    onStart={this.onStartHandler}
                    onStop={this.onStopHandler}
                    onResume={this.onResumeHandler}
                    onReset={this.onResetHandler}
                    canStart={this.state.canStart}
                    status={this.state.status}
                />

            </div>
        );
    }
}

export default Timer;