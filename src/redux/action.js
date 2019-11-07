import * as types from './action-types';
export const setLogin = flag => {
  return {
    type: types.IS_LOGIN,
    payload: flag
  }
}
