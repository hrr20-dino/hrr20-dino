import React from 'react';
import UserStore from '../stores/user-store';
import UserActions from '../actions/user-actions';
import RoutineStore from '../stores/routine-store';
import RoutineActions from '../actions/routine-actions';
import TaskStore from '../stores/task-store';
import TaskActions from '../actions/task-actions';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export default class Status extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div></div>
    );
  }
}
