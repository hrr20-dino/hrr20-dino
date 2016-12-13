import React from 'react';
// import TestComponent from './test-component.react';
// import PreAuthNav from '../routine/pre-auth-nav.react';
// import Routine from '../routine/routine.react';
// import CreateRoutine from '../routine/create-routine.react';
// import MyRoutines from '../routine/my-routines.react';
import Task from '../task/task.react';
import CreateTask from '../task/create-task.react';


export default class Application extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id='application'>
        {/*<PreAuthNav />*/}
        {/*<TestComponent />*/}
        {/* <MyRoutines /> */}
        <Task/>
        <CreateTask/>
      </div>
    );
  }
}
