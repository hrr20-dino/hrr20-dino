import React from 'react';
import UserStore from '../stores/user-store';
import UserActions from '../actions/user-actions';
import RoutineStore from '../stores/routine-store';
import RoutineActions from '../actions/routine-actions';
import TaskStore from '../stores/task-store';
import TaskActions from '../actions/task-actions';
import TaskNav from './task-nav.react.js';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Launch from 'material-ui/svg-icons/file/launch';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export default class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const paperStyle = {
      height: 400,
      width: 400,
      margin: 20,
    };
    const centerPaper = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    };
    return (
      <div>
        <TaskNav />
        <div style={centerPaper}>
          <div>
            <Paper style={paperStyle} zDepth={4}>
              <List>
                {/*for each task in routine*/}
                <ListItem
                  primaryText="Test"
                  rightIcon={<Launch />}
                />
              </List>
              <Divider />
            </Paper>
          </div>
        </div>
      </div>
    );
  }
}
