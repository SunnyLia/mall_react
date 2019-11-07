import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { setLogin } from '../redux/action'
// import * as actionCreators from '../redux/action'
class PrivateRoute extends Component {
  render() {
    let { path, component, isLogin, setLogin } = this.props;
    if (isLogin) {
      return <Route path={path} component={component} />;
    } else {
      return <Redirect to={{ pathname: '/login', state: { from: path, setLogin: setLogin } }} />
    }
  }
}
const mapStateToProps = (state, ownProps) => {
  return { isLogin: state.todos.isLogin }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return { setLogin: id => dispatch(setLogin(id)) }
}
// export default connect(mapStateToProps, actionCreators)(PrivateRoute)
export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute)