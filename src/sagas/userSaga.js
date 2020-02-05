import {
  FETCH_FAILED,
  FETCH_ALL_USER_SUCCEEDED,
  FETCH_USER,
  FETCH_ALL_USER,
  DEL_USER,
  ADD_USER,
  EDIT_USER,
  FETCH_USER_SUCCEEDED
} from "../actions/actionTypes";
// saga effect
import {put, takeLatest, call} from 'redux-saga/effects'

import {api} from "./api";

function* fetchUsers() {
  console.log(`@fetchUsers saga`);
  try {
    const users = yield call(api.getUsers);
    yield put({type: FETCH_ALL_USER_SUCCEEDED, users})
  } catch (e) {
    console.error(e);
    yield put({type: FETCH_FAILED, e})
  }
}

function* fetchUser(action) {
  try {
    const user = yield api.getUser(action.id);
    yield put({type: FETCH_USER_SUCCEEDED, user})
  } catch (e) {
    console.error(e);
    yield put({type: FETCH_FAILED, e})
  }
}

function* deleteUser(action) {
    try {
      yield call(api.deleteUser, action.id);
      yield put({ type: FETCH_ALL_USER})
    } catch (e) {
      console.error(e);
      yield put({type: FETCH_FAILED, e})
    }
}

function* addUser(action) {
    try {
      yield call(api.createUser, action.params);
      yield put({ type: FETCH_ALL_USER});
    } catch (e) {
        console.error(e);
        yield put({ type: FETCH_FAILED, e })
    }
}

function* editUser(action) {
    try {
      yield call(api.editUser, action.id, action.params);
      yield put({ type: FETCH_ALL_USER });
    } catch (e) {
        console.error(e);
        yield put({ type: FETCH_FAILED, e })
    }
}

export function* watchFetchUsers() {
  yield takeLatest(FETCH_ALL_USER, fetchUsers);
  yield takeLatest(FETCH_USER, fetchUser);
  yield takeLatest(DEL_USER, deleteUser);
  yield takeLatest(ADD_USER, addUser);
  yield takeLatest(EDIT_USER, editUser);
}