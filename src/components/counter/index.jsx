import React from "react"

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 0};
    }

    render() { return <div>
        <button onClick = {this.decrease}>-</button>
        <mark>{this.state.value}</mark>
        <button onClick = {this.increase}>+</button>
    </div>};

    state = {};

    increase = () => {
        this.setState((preState) => ({
            value: preState.value + 1
        }));
        this.props.onIncrease();
    }

    decrease = () => {
        this.setState((preState) => ({
            value: preState.value - 1
        }));
        this.props.onDecrease();
    }

}

export default Counter;