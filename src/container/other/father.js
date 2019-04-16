import React, { Component } from 'react'
import Son from 'src/container/other/son'

export default class Father extends Component {
    constructor (props){
        super(props)
        this.state = {
            name: null
        }
    }

    componentDidMount (){}
    render () {
        let { name } = this.state
        return (
            <div>
                <p>
                    {name ?  `您的姓名是：${name}` : '您还没有输入姓名'}
                </p>
                <Son getName={r => this.setState({name: r})}></Son>
            </div>
        )
    }
}