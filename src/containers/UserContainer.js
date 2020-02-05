import _ from 'lodash'
import {connect} from 'react-redux'
import User from '../components/User'
import {
  addUserAction,
  delUserAction,
  editUserAction,
  getUsersAction,
  getUserAction
} from '../actions'

const mapStateToProps = (state) => {
  return {
    params: state.userReducer
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddUser: (params) => {
      dispatch(addUserAction(params));
    },
    onDelUser: (params) => {
      dispatch(delUserAction(params));
    },
    onEditUser: ({ id, name, age}) => {
      dispatch(editUserAction(id, { age, name }));
    },
    onGetUsers: (params) => {
      console.log(`@onGetUsers`);
      dispatch(getUsersAction(params));
    },
    onGetUser: (params) => {
      dispatch(getUserAction(params));
    },
  }
};

const UserContainer = connect(mapStateToProps, mapDispatchToProps)(User);

export default UserContainer