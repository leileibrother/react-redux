import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import Bundle from './bundle'
/*import Home from '@/container/home.js';
import List from '@/container/list.js';
import About from '@/container/about.js';
import Main from '@/container/main.js';
import Details from '@/container/detail.js';
import OtherFather from '@/container/other/father'*/

const allRoute = require('src/router/index');

export default class Routes extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }
    render(){
        return (
            <Switch>
                {
                    allRoute.routes.map((item, key) => {
                        return (
                            <Route
                                meta={item.meta}
                                component={Bundle(item.component)}
                                exact={item.exact}
                                key={key}
                                path={item.path}
                            />
                        )
                    })
                }
                <Route path='*' render={() => <Redirect to='/redux' />}/>
            </Switch>
        )
    }
}
