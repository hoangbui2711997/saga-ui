import {ADD_USER, DEL_USER, EDIT_USER, FETCH_ALL_USER, FETCH_USER, FETCH_FAILED, FETCH_ALL_USER_SUCCEEDED} from "./actionTypes";

export const addUserAction = (params) => {
  return {
    type: ADD_USER,
    params
  }
};

export const delUserAction = (id) => {
  return {
    type: DEL_USER,
    id
  }
};

export const editUserAction = (id, params) => {
  return {
    type: EDIT_USER,
    id,
    params
  }
};

export const getUsersAction = () => {
  return {
    type: FETCH_ALL_USER
  }
};

export const getUserAction = (id) => {
  return {
    type: FETCH_USER,
    id
  }
};

export const fetchSuccessAction = (users) => {
  return {
    type: FETCH_ALL_USER_SUCCEEDED,
    users
  }
};

export const fetchFailedAction = () => {
    return {
      type: FETCH_FAILED,
      isLoading: false
    }
};