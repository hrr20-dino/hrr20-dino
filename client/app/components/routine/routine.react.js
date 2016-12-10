import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RoutineNav from './routine-nav.react.js';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Launch from 'material-ui/svg-icons/file/launch';


export default class Routine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <RoutineNav />
        <Paper style={} zDepth={4} />
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
