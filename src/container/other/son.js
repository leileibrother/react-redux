import React, { Component } from 'react'
export default class Son extends Component {
    constructor (props) {
        super(props)
        this.state = {
            name: null
        }
    }

    componentDidMount () {}
    render () {
        return (
            <div>
                <input className="inputStyle" ref='name' type='text'
                       onChange={el => this.props.getName(el.target.value)}
                />
            </div>
        )
    }
}