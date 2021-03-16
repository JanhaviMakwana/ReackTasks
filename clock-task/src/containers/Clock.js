import React from 'react';
import Toggle from '../components/Toggle';
import ShowDate from '../components/ShowDate';
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            show: false
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.setState({ date: new Date() }),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    toggleHandler = () => {
        this.setState({ show: !this.state.show });
    }

    render() {
        return (
            <div>
                <Toggle clicked={this.toggleHandler} show={this.state.show} />
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                <ShowDate show={this.state.show} date={this.state.date} />
            </div>
        );
    }
}

export default Clock;