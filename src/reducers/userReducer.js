import {ADD_USER, DEL_USER, EDIT_USER, FETCH_ALL_USER, FETCH_USER, FETCH_ALL_USER_SUCCEEDED, FETCH_FAILED, FETCH_USER_SUCCEEDED} from "../actions/actionTypes";

export default (state = {
  users: [],
  user: {},
}, action) => {
  switch (action.type) {
    case ADD_USER:
      return state;
    case DEL_USER:
      return state;
    case EDIT_USER:
      return state;
    case FETCH_ALL_USER:
      return state;
    case FETCH_USER:
      return state;
    case FETCH_USER_SUCCEEDED:
      return {
        ...state,
        user: action.user
      };
    case FETCH_ALL_USER_SUCCEEDED:
      return {
        ...state,
        users: action.users
      };
    default:
      return {
        users: [],
        user: {},
      };
  }
}