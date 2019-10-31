import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from './redirect'
import Home from '../pages/home';
import Find from '../pages/find';
import Cart from '../pages/cart';
import Mine from '../pages/mine';
import Login from '../pages/login';

 let routes = (
    <HashRouter>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/find" component={Find} />
            <Route path="/cart" component={Cart} />
            <PrivateRoute path="/mine" component={Mine} />
            <Route path="/login" component={Login} />
        </Switch>
    </HashRouter>
);
export default routes