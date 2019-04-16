import React, { Component } from 'react';


export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            suffix:'被调用，this指向'
        }
    }
    componentDidMount(){
        console.log('componentDidMount' + this.state.suffix,this);
    }

    componentWillReceiveProps(){
        console.log('componentWillReceiveProps' + this.state.suffix,this);
    }

    shouldComponentUpdate(){
        console.log('shouldComponentUpdate' + this.state.suffix,this);
        return true;
    }

    componentDidUpdate(){
        console.log('componentDidUpdate' + this.state.suffix,this);
    }

    componentWillUnmount(){
        console.log('componentWillUnmount' + this.state.suffix,this);
    }

    handler(){
        console.log('handler' + this.state.suffix,this);
    }

    render(){
        console.log('handler' + this.state.suffix,this);

        this.handler();
        window.handler = this.handler();
        window.handler();

        return (
            <div>
                <h1 onClick={this.handler}>Hello World</h1>
            </div>
        )
    }
}