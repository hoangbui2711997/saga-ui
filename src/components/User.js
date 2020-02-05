import React, {Component} from 'react';
import _ from 'lodash'

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchKey: '',
      id: '',
      name: '',
      age: '',
      editId: '',
      editName: '',
      editAge: '',
    }
  }

  usersRender() {
    return _.map(this.props.params.users, (user) => {
      return <tr key={ user.id }>
        <td>{ user.id }</td>
        <td>{ user.name }</td>
        <td>{ user.age }</td>
      </tr>
    })
  }

  userRender() {
    return <div style={{ border: "thin solid black", width: "45%", display: "block", marginBottom: "24px"}} >
      <div>ID: { this.props.params.user.id }</div>
      <div>Name: { this.props.params.user.name }</div>
      <div>Age: { this.props.params.user.age }</div>
    </div>
  }

  createUserForm() {
    return <div style={{ border: "thin solid black", width: "45%", display: "block", marginBottom: "24px"}} >
      <div><span style={{ width: '66px', display: 'inline-block' }}>Name: </span><input type="text" onInput={ (e) => this.setState({ ...this.state, name: e.target.value }) }/></div>
      <div><span style={{ width: '66px', display: 'inline-block' }}>Age: </span><input type="text" onInput={ (e) => this.setState({ ...this.state, age: e.target.value }) }/></div>
    </div>
  }

  editUserForm() {
    return <div style={{ border: "thin solid black", width: "45%", display: "block", marginBottom: "24px"}} >
      <div><span style={{ width: '66px', display: 'inline-block' }}>ID: </span><input type="text" onInput={ (e) => this.setState({ ...this.state, editId: e.target.value }) }/></div>
      <div><span style={{ width: '66px', display: 'inline-block' }}>Name: </span><input type="text" onInput={ (e) => this.setState({ ...this.state, editName: e.target.value }) }/></div>
      <div><span style={{ width: '66px', display: 'inline-block' }}>Age: </span><input type="text" onInput={ (e) => this.setState({ ...this.state,editAge: e.target.value }) }/></div>
    </div>
  }

  render() {
    return (
      <div>
        <div style={{ display: 'inline-flex' }}>
          <div>
            <input type="text" onInput={ (e) => this.setState({ ...this.state, searchKey: e.target.value }) }/>
          </div>
          <div>
            <input type="button" value="get data" onClick={this.props.onGetUsers}/>
          </div>
          <div>
            <input type="button" value="Get one user" onClick={ () => this.props.onGetUser(this.state.searchKey) } />
          </div>
          <div>
            <input type="button" value="Delete one user" onClick={ () => this.props.onDelUser(this.state.searchKey) } />
          </div>
          <div>
            <input type="button" value="Create user" onClick={ () => this.props.onAddUser({ name: this.state.name, age: this.state.age }) } />
          </div>
          <div>
            <input type="button" value="Edit user" onClick={ () => this.props.onEditUser({ id: this.state.editId, name: this.state.editName, age: this.state.editAge }) } />
          </div>
        </div>
        <div>
          <h2>User</h2>
          { this.userRender() }
          <h2>List user</h2>
          <table style={{ border: "thin solid black", width: "45%", display: "block" }}>
            <thead>
            <tr>
              <td>Id</td>
              <td>Name</td>
              <td>Age</td>
            </tr>
            </thead>
            <tbody>
            { this.usersRender() }
            </tbody>
          </table>
          <h2>Create User Form</h2>
          { this.createUserForm() }
          <h2>Edit User Form</h2>
          { this.editUserForm() }
        </div>
      </div>
    );
  }
}

export default User;

