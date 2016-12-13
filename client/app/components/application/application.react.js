import React from 'react';
// import TestComponent from './test-component.react';
// import PreAuthNav from '../routine/pre-auth-nav.react';
// import Routine from '../routine/routine.react';
// import CreateRoutine from '../routine/create-routine.react';
// import MyRoutines from '../routine/my-routines.react';
import Task from '../task/task.react';
import CreateTask from '../task/create-task.react';

import UserStore from '../../flux/stores/user-store';
import RoutineStore from '../../flux/stores/routine-store';
import TaskStore from '../../flux/stores/task-store';

UserStore.useMockData();
RoutineStore.useMockData();
TaskStore.useMockData();

export default class Application extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      currentUser: null,

      routines: [],
      tasks: []
    };
  }

  componentDidMount() {
    this.getUserData();
    this.getRoutineData();
    this.getTaskData();

    UserStore.addChangeListener(this.getUserData);
    RoutineStore.addChangeListener(this.getUserData);
    TaskStore.addChangeListener(this.getUserData);
  }

  componentWillUnmount() {
    UserStore.removeChangeListener(this.getUserData);
    RoutineStore.removeChangeListener(this.getRoutineData);
    TaskStore.removeChangeListener(this.getTaskData);
  }

  getUserData() {
    UserStore
      .get()
      .then((data) => {
        this.setState({
          users: data.collection,
          currentUser: data.currentUser
        });
      });
  }

  getRoutineData() {
    RoutineStore
      .get()
      .then((data) => {
        this.setState({
          routines: data.collection
        });
      });
  }

  getTaskData() {
    TaskStore
      .get()
      .then((data) => {
        this.setState({
          tasks: data.collection
        });
      });
  }

  render() {
    return (
      <div id='application'>
        <MyRoutines user={this.state.currentUser}
                    routines={this.state.routines}
                    tasks={this.state.tasks}
        />
        <CreateTask/>
      </div>
    );
  }
}
