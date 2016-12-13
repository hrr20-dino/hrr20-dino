import React from 'react';
import MyRoutinesNav from './my-routines-nav.react.js';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Launch from 'material-ui/svg-icons/action/launch';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';


export default class MyRoutines extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const paperStyle = {
      float: 'left',
      height: 400,
      width: 300,
      margin: 30,
    };
    return (
      <div>
        <MyRoutinesNav />
        {/*map over user routine data to create card routine for each routine */}
        <Paper style={paperStyle} zDepth={4}>
          {/* insert onTapTouch for FlatButton */}
          <AppBar
            title="Morning Workout"
            titleStyle={{fontSize: 18}}
            iconElementLeft={<IconButton><NavigationClose /></IconButton>}
            iconElementRight={<IconButton><Launch /></IconButton>}
          />
          <List>
            {/*for each task in routine */}
            <Divider />
            {/* insert onTapTouch for ListItem */}
            <ListItem
              primaryText="Jog 2 miles"
              rightIcon={<Launch />}
            />
          </List>
        </Paper>
        {/* Additional Hardcoded Routine for testing. Get rid of when wiring to routine data. */}
        <Paper style={paperStyle} zDepth={4}>
          {/* insert onTapTouch for FlatButton */}
          <AppBar
            title="Breakfast Bonanza"
            titleStyle={{fontSize: 18}}
            iconElementLeft={<IconButton><NavigationClose /></IconButton>}
            iconElementRight={<IconButton><Launch /></IconButton>}
          />
          <List>
            {/*for each task in routine */}
            <Divider />
            {/* insert onTapTouch for ListItem */}
            <ListItem
              primaryText="17 Banaynays"
              rightIcon={<Launch />}
            />
          </List>
        </Paper>
      </div>
    );
  }
}
