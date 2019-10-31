import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../redux/action'
import { Route, Redirect } from 'react-router-dom';

class PrivateRoute extends Component {
  render() {
    let { path, component, isLogin} = this.props;
    if (isLogin) {
      return <Route path={path} component={component} />;
    } else {
      return <Redirect to={{ pathname: '/login', state: { from: path} }} />
    }
  }
}
function mapStateToProps(state, ownProps) {
  return { isLogin: state.selectedPayload.isLogin }
}
// function mapDispatchToProps(dispatch, ownProps) {}
export default connect(mapStateToProps, actionCreators)(PrivateRoute)