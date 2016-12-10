import React from 'react';
import UserStore from '../../flux/stores/user-store';
import UserActions from '../../flux/actions/user-actions';

export default class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: UserStore.getUsers()
    };
  }

  componentDidMount() {
    this.setState({
      user: UserStore.getUsers()
    });
    UserStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    UserStore.removeChangeListener(this.onChange);
  }

  render() {
    return (
      <div id='application' onClick={this.handleClick}>
        <ul>
          {this.state.users.map((user) => {
            return (
              <li>{user.name}</li>
            );
          })}
        </ul>
      </div>
    );
  }

  onChange() {
    this.setState({
      user: UserStore.getUsers()
    });
  }

  handleClick(e) {
    // UserActions.update({
    //   username: 'Robert'
    // });
  }
}
