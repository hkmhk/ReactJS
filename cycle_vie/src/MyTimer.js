import React, { Component } from 'react';

class MyTimer extends Component {
    constructor(props) {
        super(props);
        this.state = { date: Date() };
    }

    componentDidMount() {
        this.heure = setInterval(() => this.change(), 1000)

    }

    componentDidUpdate() {
        console.log('un update a eu lieu');
    }

    change() {
        this.setState({
            date: Date()
        })
    }

    render() {
        return (
            <div>
                <h2>{this.state.date}</h2>
            </div>
        );
    }
}


export default MyTimer;