import { combineReducers } from 'redux';
import * as types from './action-types';
let initState = {
    isLogin: false, 
    homeItems:[],
    homeLists:[]
}

const todos = (state = initState, action) => {
    switch (action.type) {
      case types.IS_LOGIN:
        return {
          ...state,
          isLogin: action.payload
        }
      case types.HOME_ITEMS:
        return {
          ...state,
          isLogin: action.payload
        }
      case types.HOME_LISTS:
        return {
          ...state,
          isLogin: action.payload
        }
      default:
        return state
    }
  }

export default combineReducers({
    todos
})
