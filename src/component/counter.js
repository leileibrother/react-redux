import React, {Component} from 'react';
import {connect} from 'react-redux';
import {typeOne,typeTwo,doAlert} from 'src/redux/action/action'

class Counter extends Component {
    constructor(props){
        super(props);
    }

    increment(index){
        //this.props.dispatch(typeOne(index))
        typeOne(this.props.dispatch,index)
    }

    decrement(index){
        //this.props.dispatch(typeTwo(index))
        typeTwo(this.props.dispatch,index)
    }
    doAlert(text){
        doAlert(this.props.dispatch,text);
    }

    render() {
        const {s} = this.props;
        let text = this.props.text ? this.props.text : '点我alert';
        return (
            <p style={{fontSize:'18px'}}>
                Clicked: {s.counter} 次&nbsp;&nbsp;
                <button onClick={()=>{this.increment(1)}}>点我+</button>&nbsp;&nbsp;
                <button onClick={()=>{this.decrement(1)}}>点我-</button>&nbsp;&nbsp;
                <button onClick={()=>{this.doAlert('你点我了！')}}>{text}</button>&nbsp;&nbsp;
            </p>
        )
    }
}

export default connect(
    state => ({
        s:state.doCounter,
        text:state.doAlert
    })
)(Counter)