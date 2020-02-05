import { call, all } from 'redux-saga/effects'
import { watchFetchUsers } from "./userSaga";

export default function* rootSaga() {
  console.log(`@rootSaga`);
  yield call(watchFetchUsers)
}