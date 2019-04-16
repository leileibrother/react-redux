import '@/css/pub.css';
import 'antd/lib/index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import Routes from './router/router.js';
import {createStore} from 'redux';

import counter from 'src/redux/reducer/index'

import {Router} from 'react-router-dom'
import history from 'src/history/index'
//import registerServiceWorker from './registerServiceWorker';
/*import {applyMiddleware} from "redux/index";
import thunk from "redux-thunk/index";*/

const store = createStore(counter);


ReactDOM.render(
    <div>
        <Provider store={store}>
            <Router history={history}>
                <Routes>
                </Routes>
            </Router>
        </Provider>
    </div>,
    document.getElementById('root')
);
//registerServiceWorker();
