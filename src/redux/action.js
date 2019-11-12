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

export function getHomeLists() {
  return dispatch=> {
    return fetch(serverUrl+"/homeLists")
    .then(response => response.json())
    .then(result => {
      dispatch({
        type: types.HOME_LISTS,
        payload: result.data
      });
    })
  }
}

export function getHomeTabs() {
  return dispatch=> {
    return fetch(serverUrl+"/homeTabs")
    .then(response => response.json())
    .then(result => {
      dispatch({
        type: types.HOME_TABS,
        payload: result.data
      });
    })
  }
}

export function getCarousel() {
  return dispatch=> {
    return fetch(serverUrl+"/carousel")
    .then(response => response.json())
    .then(result => {
      dispatch({
        type: types.CAROUSEL,
        payload: result.data
      });
    })
  }
}

export function getCartLists() {
  return dispatch=> {
    return fetch(serverUrl+"/cartList")
    .then(response => response.json())
    .then(result => {
      dispatch({
        type: types.CART_LISTS,
        payload: result.data
      });
    })
  }
}