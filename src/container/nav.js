import React, { Component } from 'react';
import '../css/base.css';

class Nav extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentIndex: 0,
        };
    }
    render(){
        return (
            <div className="navContainer">
                <ul className="navBar clearfix">
                    {
                        React.Children.map(this.props.children,(element,index) => {
                            return (
                                <li>{ element }</li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Nav;