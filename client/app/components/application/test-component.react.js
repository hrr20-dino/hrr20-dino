import React from 'react';
import UserStore from '../../flux/stores/user-store';
import UserActions from '../../flux/actions/user-actions';
import uuid from 'node-uuid';

UserStore.useMockData();

export default class TestComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      currentUser: null
    };
  }

  componentDidMount() {
    this.getData.call(this);

    UserStore.addChangeListener(this.getData.bind(this));
  }

  render() {
    return (
      <div>
        <ul>
        {
          this.state.users.map((user) => {
            return (
              <li key={user.id}>
                <span onClick={this.remove.bind(null, user.id)}>
                  {user.name}
                </span>
                <span>
                  <button onClick={this.update.bind(null, user.id)}>Update</button>
                </span>
              </li>
            );
          })
        }
        </ul>
        <button onClick={this.add}>Add User</button>
      </div>
    );
  }

  getData() {
    UserStore
      .getUsers()
      .then((users) => {
        this.setState({
          users: users,
          currentUser: UserStore.getCurrentUser()
        });
      });
  }

  add() {
    UserActions.addUser({
      id: uuid.v4(),
      name: 'Gandalf the Grey'
    });
  }

  remove(id) {
    UserActions.removeUser(id);
  }

  update(id) {
    UserActions.updateUser({
      id: id,
      data: {
        name: 'Gandalf the White'
      }
    });
  }
}