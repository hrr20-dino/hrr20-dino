import React from 'react';
import CreateRoutineNav from './create-routine-nav.react.js';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';

export default class CreateRoutine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    return (
      <div>
        <CreateRoutineNav />
        <Paper style={} zDepth={4} />
          <TextField
            onChange={}
            type="text"
            hintText="ex. Morning Workout"
            floatingLabelText="Please input the name of your Routine"
          /><br />
          <Divider />
          // Custom component for Date Repeat integrated with MomentJS?
          <TextField
            hintText="ex. My morning workout consisting of stretching, cardio, weightlifting, and some jammin' tunes!" floatingLabelText="Please input the description of your Routine"
            multiLine={true}
            rows={3} />
        <Paper />
      </div>
    );
  }
}
