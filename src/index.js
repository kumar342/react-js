import React, { Component } from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import "./index.css";

import * as serviceWorker from "./serviceWorker";

export default class Index extends Component {
    state = {
        counter : 0
    };
    increme = () => {
        this.setState({
            counter : this.state.counter + 10
        });
    }
    decreme = () => {
        this.setState({
            counter : this.state.counter - 5
        });
    }
    reset = () => {
        this.setState({
            counter : 0
        });
    }    
    render() {
        return (
            <div>
                <h1 class="btn btn-secondary">Counter :{this.state.counter}</h1><br />
                <button onClick={this.increme} type="button" class="btn btn-success">increme</button> <span></span>
                <button onClick={this.decreme} type="button" class="btn btn-danger">decreme</button> <span></span>
                <button onClick={this.reset} type="button" class="btn btn-primary">reset</button>
            </div>
        )
    }
}


ReactDOM.render(<Index />, document.getElementById("root"));

serviceWorker.unregister();
