import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from './redirect'
import Main from '../pages';
import Home from '../pages/home';
import Find from '../pages/find';
import Cart from '../pages/cart';
import Mine from '../pages/mine';
import Login from '../pages/login';

class Routes extends React.Component{
    render(){
        return (
            <HashRouter>
                <Switch>
                    {/* <Route exact path='/' render={(props) => <Main {...props} />} />
                    <Route path="/home" render={(props) => <Home {...props} />} />
                    <Route path="/find" render={(props) => <Find {...props} />} />
                    <Route path="/cart" render={(props) => <Cart {...props} />} />
                    <PrivateRoute path="/mine" render={(props) => <Mine {...props} />} />
                    <Route path="/login" render={(props) => <Login {...props} />}  /> */}
                    <Route exact path='/' component={Home} />
                    <Route path="/home" component={Home} />
                    <Route path="/find" component={Find} />
                    <Route path="/cart" component={Cart} />
                    <PrivateRoute path="/mine" component={Mine} />
                    <Route path="/login" component={Login} />
                </Switch>
            </HashRouter>
        )
    }
};
export default Routes