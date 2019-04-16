import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/pub.css';

export default class Main extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }

    render(){
        return (
            <div style={{fontSize:'16px'}}>
                <p>如果没有匹配到路由，就跳到主页</p>

                <ul style={{margin:'20px 0'}}>
                    <li><Link to="/home">点我去home页面</Link></li>
                    <li><Link to="/list">点我去列表页面</Link></li>
                    <li><Link to="/about">点我去关于页面</Link></li>
                    <li><Link to="/example">点我去案例页面</Link></li>
                </ul>
            </div>
        );
    }
}
