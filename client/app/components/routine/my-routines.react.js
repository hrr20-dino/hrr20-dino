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
import TaskStore from '../../flux/stores/task-store';
import _ from 'lodash';


export default class MyRoutines extends React.Component {
  constructor(props) {
    super(props);
  }

  findTasksForRoutine(routine) {
    return this.props.tasks.filter((task) => {
      return task.routineId === routine.id;
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
        {this.props.routines.map((routine) => {
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
                {this.findTasksForRoutine(routine).map((task) => {
                  return (
                    <div>
                      <Divider />
                      {/* insert onTapTouch for ListItem */}
                      <ListItem
                        primaryText={task.name}
                        rightIcon={<Launch />}
                      />
                    </div>
                  );
                })}
              </List>
            </Paper>
          );
        })}
      </div>
    );
  }
}