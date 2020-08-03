import React from "react"

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 0, groupSize: 0};
    }

    render() { return <div>
        <button onClick = {this.decrease}>-</button>
        <mark>{this.state.value}</mark>
        <button onClick = {this.increase}>+</button>
    </div>};

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

    static getDerivedStateFromProps(props, state) {
        if (props.size != state.groupSize) {
            return {
                groupSize : props.size,
                value : 0
            }
        }
        return null;
    }

}

export default Counter;