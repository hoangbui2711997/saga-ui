import axios from 'axios'
import {BASE_URL} from "../consts";

function* getUsers() {
  console.log(`@getUsers api`);
  const res = yield axios.get(`${BASE_URL}/users`);
  return yield res.status === 200 ? res.data : [];
}

function* getUser(id) {
  const res = yield axios.get(`${BASE_URL}/user/${id}`);
  return yield res.status === 200 ? res.data : {};
}

function* deleteUser(id) {
  const res = yield axios.delete(`${BASE_URL}/user/${id}`);
  return yield res.status === 200 ? res.data : {};
}

function* createUser(user) {
  console.log(user, 'user');
  const res = yield axios.post(`${BASE_URL}/user`, {...user});
  return yield res.status === 200 ? res.data : {};
}

function* editUser(id, user) {
  const res = yield axios.put(`${BASE_URL}/user/${id}`, user);
  return yield res.status === 200 ? res.data : {};
}


export const api = {
  getUsers,
  getUser,
  deleteUser,
  createUser,
  editUser,
};