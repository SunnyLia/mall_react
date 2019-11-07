import { combineReducers } from 'redux';
import * as types from './action-types';
let initState = {
    isLogin: false //是否登陆
}

const todos = (state = initState, action) => {
    switch (action.type) {
      case types.IS_LOGIN:
        return {
          isLogin: action.payload
        }
      default:
        return state
    }
  }

export default combineReducers({
    todos
})
