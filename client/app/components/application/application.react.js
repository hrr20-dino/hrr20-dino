import React from 'react';
// import TestComponent from './test-component.react';
// import PreAuthNav from '../routine/pre-auth-nav.react';
// import Routine from '../routine/routine.react';
import CreateRoutine from '../routine/create-routine.react';
import MyRoutines from '../routine/my-routines.react';
import Task from '../task/task.react';
import CreateTask from '../task/create-task.react';
import Home from '../home/home.react';
import SideMenu from '../side-menu/side-menu.react';
import UserActions from '../../flux/actions/user-actions';


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

    UserActions.setCurrentUser({
      name: 'Sir Testburg',
      password:'test',
      id: 1234,
      avatar: 'http://www.yesnet.yk.ca/schools/projects/middleages2000/knights/graphics/horse.gif'
    });

    UserStore.addChangeListener(this.getUserData.bind(this));
    RoutineStore.addChangeListener(this.getRoutineData.bind(this));
    TaskStore.addChangeListener(this.getTaskData.bind(this));
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
        <MyRoutines routines={this.state.routines}
                    tasks={this.state.tasks}
        />
      </div>
    );
  }
}
