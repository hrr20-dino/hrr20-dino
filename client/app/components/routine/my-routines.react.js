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
import RoutineStore from '../../flux/stores/routine-store';

RoutineStore.useMockData();


export default class MyRoutines extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      routines: []
    };
  }

  componentDidMount() {
    this.getRoutines();

    RoutineStore.addChangeListener(this.getRoutines);
  }

  componentWillUnmount() {
    RoutineStore.removeChangeListener(this.getRoutines);
  }

  getRoutines() {
    RoutineStore
      .get()
      .then((data) => {
        this.setState({
          routines: data.collection
        });
      });
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
        {this.state.routines.map((routine) => {
          return (
            <Paper style={paperStyle} zDepth={4}>
              {/* insert onTapTouch for FlatButton */}
              <AppBar
                title={routine.name}
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
          );
        })}
      </div>
    );
  }
}
