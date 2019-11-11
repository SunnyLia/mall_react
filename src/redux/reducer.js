import { combineReducers } from 'redux';
import * as types from './action-types';
let initState = {
    isLogin: false, 
    homeItems:[],
    homeLists:[],
    homeTabs:[],
    carousel:[]
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
          homeItems: action.payload
        }
      case types.HOME_LISTS:
        return {
          ...state,
          homeLists: action.payload
        }
      case types.HOME_TABS:
        return {
          ...state,
          homeTabs: action.payload
        }
      case types.CAROUSEL:
        return {
          ...state,
          carousel: action.payload
        }
      default:
        return state
    }
  }

export default combineReducers({
    todos
})
