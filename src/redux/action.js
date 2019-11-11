import * as types from './action-types';
const serverUrl = "http://127.0.0.1:8080";
// import axios from 'axios';
export const setLogin = flag => {
  return {
    type: types.IS_LOGIN,
    payload: flag
  }
}

export function getHomeItems() {
  return dispatch=> {
    return fetch(serverUrl+"/homeItems")
    .then(response => response.json())
    .then(result => {
      dispatch({
        type: types.HOME_ITEMS,
        payload: result.data
      });
    })
  }
}
