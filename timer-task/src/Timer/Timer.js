import React from 'react';
import ShowTimer from '../Timer/ShowTimer/ShowTimer';
import './Timer.css';

class Timer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            timer: 0,
            start: false,
            touched: false,
            status: null
        }
    }

    shouldComponentUpdate() {
        if (this.state.timer === 0) {
            return false;
        } else {
            return true;
        }
    }

    onTimerChangeHandler = (event) => {
        this.setState({ timer: event.target.value })
    }

    onTimerStartHandler = () => {
        this.setState({
            start: true,
            touched: true,
            status: 'START'
        })
        console.log("Started");
        this.timeInterval = setInterval(() => {
            this.setState({
                timer: this.state.timer > 1 ? this.state.timer - 1 : this.onTimerStopHandler()
            })
        }, 1000);
    }

    onTimerStopHandler = () => {
        this.setState({ timer: this.state.timer, touched: false, start: false, status: 'STOP' });
        clearInterval(this.timeInterval);
    }

    onTimerResetHandler = () => {
        this.setState({ timer: 0, touched: false, start: false, status: null });
        clearInterval(this.timeInterval);
    }

    render() {
        return (
            <div className="Timer">
                <input
                    className="Input"
                    type="text"
                    placeholder="Enter seconds"
                    onChange={(ev) => this.onTimerChangeHandler(ev)}
                /><br /><br />
                <div>
                    {
                        this.state.status !== 'START' && this.state.status !== 'STOP' &&
                        <button className="btn start" onClick={this.onTimerStartHandler}>START</button>
                    }
                    {
                        this.state.status === 'START' && (<div>
                            <button className="btn stop" onClick={() => this.onTimerStopHandler()}>STOP</button>
                            <button className="btn reset" onClick={() => this.onTimerResetHandler()}>RESET</button>
                        </div>)
                    }
                    {this.state.status === 'STOP' && (<div>
                        <button className="btn resume" onClick={() => this.onTimerStartHandler()}>RESUME</button>
                        <button className="btn reset" onClick={() => this.onTimerResetHandler()}>RESET</button>
                    </div>)

                    }
                </div>

                <br />
                <ShowTimer count={this.state.timer} status={this.state.status} touched={this.state.touched} />
            </div>
        );
    }

}

export default Timer;