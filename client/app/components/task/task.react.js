import React from 'react';
// import UserStore from '../stores/user-store';
// import UserActions from '../actions/user-actions';
// import RoutineStore from '../stores/routine-store';
// import RoutineActions from '../actions/routine-actions';
// import TaskStore from '../stores/task-store';
// import TaskActions from '../actions/task-actions';
import TaskNav from './task-nav.react';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Launch from 'material-ui/svg-icons/action/launch';
import TextField from 'material-ui/TextField';

export default class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const paperStyle = {
      height: 125,
      width: 400,
      margin: 15,
    };
    const centerPaper = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    };
    const textFieldStyle = {
      margin: 25
    };
    return (
      <div>
        <TaskNav />
        <div style={centerPaper}>
          <div>
            <Paper style={paperStyle} zDepth={4}>
              <TextField
                style={textFieldStyle}
                defaultValue="4 minute jog intervals with 1 minute rest periods along the San Fran Bay"
                floatingLabelText="Jog 2 Miles"
                />
            </Paper>
          </div>
        </div>
      </div>
    );
  }

}
