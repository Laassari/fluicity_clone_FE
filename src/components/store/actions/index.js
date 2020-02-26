import { SET_USER, REMOVE_USER } from '../constants';

export const setUser = user => ({
  type: SET_USER,
  payload: user
});

export const removeUser = user => ({
  type: REMOVE_USER
});
