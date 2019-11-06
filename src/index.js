import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Main from './pages';
import Login from './pages/login';
ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route path="/login" component={Login} />
                <Route component={Main} />
            </Switch>
        </HashRouter>
    </Provider>,
    document.getElementById('root')
);