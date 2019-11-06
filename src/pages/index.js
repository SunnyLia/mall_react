import React, {Fragment} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PrivateRoute from '../router/redirect';
import Home from './home';
import Cart from './cart';
import Find from './find';
import Mine from './mine';
import TabBar from './components/tabBar';
class Main extends React.Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/home" component={Home}></Route>
                    <Route path="/cart" component={Cart}></Route>
                    <Route path="/find" component={Find}></Route>
                    <PrivateRoute path="/mine" component={Mine} />
                    <Redirect to="/" />
                </Switch>
                <TabBar history={this.props}/>
            </Fragment>
        );
    }
}
export default Main;
