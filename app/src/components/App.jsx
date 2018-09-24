import React from "react";

export class App extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            clicks: 0
        };
    }

    onClick(){
        let clicks = this.state.clicks + 1;
        this.setState({clicks})
    }

    render(){
        return (
            <div>
                <div>
                    This webpage is powered by React.js
                </div>
                <div>
                    You have clicked this button {this.state.clicks} times.
                </div>
                <div>
                    <button onClick={this.onClick.bind(this)}>Click Me</button>
                </div>
            </div>
        );
    }
}