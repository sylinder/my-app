import React from "react"

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 0};
    }

    render() { return <div>
        <bottom onClick = {this.decrease}>-</bottom>
        <mark>{this.state.value}</mark>
        <bottom onClick = {this.increase}>+</bottom>
    </div>};

    state = {};

    increase = () => {
        this.setState((preState) => ({
            value: preState.value + 1
        }));
    }

    decrease = () => {
        this.setState((preState) => ({
            value: preState.value - 1
        }));
    }

}

export default Counter;