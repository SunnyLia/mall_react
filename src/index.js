import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { HashRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from './router/redirect';

import Home from './pages/home';
import Find from './pages/find';
import Cart from './pages/cart';
import Mine from './pages/mine';
import Login from './pages/login';
import TabBar from './pages/common/tabBar';
ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path="/home" component={Home} />
                <Route path="/find" component={Find} />
                <Route path="/cart" component={Cart} />
                <Route path="/login" component={Login} />
                <PrivateRoute path="/mine" component={Mine} />
            </Switch>
            <TabBar />
        </HashRouter>
    </Provider>,
    document.getElementById('root')
);