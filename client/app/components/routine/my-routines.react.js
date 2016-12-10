import React from 'react';
import UserStore from '../stores/user-store';
import UserActions from '../actions/user-actions';
import RoutineStore from '../stores/routine-store';
import RoutineActions from '../actions/routine-actions';
import TaskStore from '../stores/task-store';
import TaskActions from '../actions/task-actions';
import MyRoutinesNav from './my-routines-nav.react.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Launch from 'material-ui/svg-icons/file/launch';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';


export default class MyRoutines extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <MyRoutinesNav />
        // map over user routine data to create card routine for each routine
        <Paper style={} zDepth={4} />
          <AppBar
            title={<span style={} onClick={}>{routine.title}</span>}
            <FlatButton
              onClick={}
              label="Open Routine"
              labelPosition="before"
              primary={true}
              icon={<Launch />}
            />
          />
          <List>
            // for each task in routine
            <Divider />
            <ListItem
              primaryText={}
              rightIcon={<Launch onClick={} />}
            />
          </List>
        <Paper />
      </div>
    );
  }
}
