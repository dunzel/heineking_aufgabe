import React, { Component } from 'react';

class Clock extends Component {

    constructor(props) {
        super(props);
        this.state = {
            time: new Date(),
        }
    }

    componentDidMount() {
        //refresh clock every second
        setInterval(() => this.setState({ time: new Date()}), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render () {
        const { time } = this.state;

        return (
            <time>{time.dayname()}, {time.normalTimeformat()}</time>
        );
    }
}

export default Clock;