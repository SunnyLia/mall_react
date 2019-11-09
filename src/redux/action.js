import * as types from './action-types';
const serverUrl = "http://127.0.0.1:8080";
// import axios from 'axios';
export const setLogin = flag => {
  return {
    type: types.IS_LOGIN,
    payload: flag
  }
}
// export const getHomeItems = () => {
//   return function (dispatch) {
//       fetch(serverUrl+"/homeItems").then(result => {
//         let data = result.homeItems.data;
//         dispatch({
//           type: types.HOME_ITEMS,
//           payload: data
//         });
//     });
//   } 
// }
export function getHomeItems() {
  return function (dispatch) {
    return fetch(serverUrl+"/homeItems")
    .then(response => response.json())
    .then(result => {
            let data = result.homeItems.data;
            dispatch({
              type: types.HOME_ITEMS,
              payload: data
            });
        });
  }
}