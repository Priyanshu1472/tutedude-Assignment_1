import React,{Component} from "react";

class ClassCounter extends Component {
    constructor() {
        super();
        this.state = {Count: 0};
    }
    Increment = () => {
        this.setState({Count: this.state.Count + 1});
    }
    Decrement = () => {
        if(this.state.Count > 0){
            this.setState({Count: this.state.Count - 1});
        }else{
            this.setState({Count: 0});
        }
    }
    render() {
        return (
            <>
                <div className="class-counter">
                    <div className="counter-card">
                    <h1>Class Counter</h1>
                    <h2>{this.state.Count}</h2>
                    <div className="buttons">
                        <button onClick={this.Decrement}>Decrement</button>
                        <button onClick={this.Increment}>Increment</button>
                    </div>
                    </div>
                </div>
            </>
        );
    }
}

export default ClassCounter;