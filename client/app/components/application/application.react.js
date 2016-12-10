import React from 'react';
import UserStore from '../stores/user-store';
import UserActions from '../actions/user-actions';

export default class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: UserStore.getUser({
        username: 'Bob'
      })
    };
  }

  componentDidMount() {
    UserStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    UserStore.removeChangeListener(this.onChange);
  }

  render() {
    return (
      <div id='application' onClick={this.handleClick}>
        <p>Hello Dino!</p>
      </div>
    );
  }

  onChange() {
    this.setState({
      user: UserStore.getUser({
        username: 'Bob'
      })
    });
  }

  handleClick(e) {
    UserActions.update({
      username: 'Robert'
    });
  }
}
