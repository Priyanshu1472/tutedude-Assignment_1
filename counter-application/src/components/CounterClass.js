import React,{Component} from "react";

class CounterClass extends Component {
    constructor(props) {
        super(props);
        this.state = { count : 0 };
    }
    increment = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }));
    }
    decrement = () => {
        this.setState((prevState) => ({
            count: prevState.count > 0? prevState.count - 1 : 0
        }));
    }
    render() {
        return(
            <div className="counter-container">
                <h1 className="counter">Counter Class</h1>
                <h1 className="counter">{this.state.count}</h1>
                <div className="button-container">
                    <button className="decrement" onClick={this.decrement}>-</button>
                    <button className="increment" onClick={this.increment}>+</button>
                </div>
            </div>
        )
    }
}

export default CounterClass;