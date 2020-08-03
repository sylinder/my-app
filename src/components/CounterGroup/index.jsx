import Counter from "../Counter"
import React from "react"

class CounterGroup extends React.Component {
    constructor(props) {
        super(props);
        // console.log(props.size)
        this.state = {size: 0, totalValue: 0};
    }

    handleResize = (event) => {
        this.setState({
            size: event.target.value ? parseInt(event.target.value) : 0
        });
    }

    handleIncrease = () => {
        this.setState((preState) => ({
            totalValue: preState.totalValue + 1
        }));
    }

    handleDecrease = () => {
        this.setState((preState) => ({
            totalValue: preState.totalValue - 1
        }));
    }

    render() {
        const initArray = [...Array(this.state.size).keys()]
        return <div>
            <div>
            <label>Group size:</label>
            <input onBlur = {this.handleResize} defaultValue = {0}></input>
            </div>

            <div>
            <label>TotalNumber: {this.state.totalValue}</label>
            </div>
            
            {
                initArray.map(key => <Counter onIncrease = {this.handleIncrease} onDecrease = {this.handleDecrease} key={key}/>)
            }
        </div> 
    }
}

export default CounterGroup