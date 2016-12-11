import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import CreateRoutineNav from './create-routine-nav.react.js';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import Toggle from 'material-ui/Toggle';

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
          <div>Repeat</div>
          <Toggle
           label="Sunday"
           defaultToggled={}
           style={}
          />
          <Toggle
           label="Monday"
           defaultToggled={}
           style={}
          />
          <Toggle
           label="Tuesday"
           defaultToggled={}
           style={}
          />
          <Toggle
           label="Wednesday"
           defaultToggled={}
           style={}
          />
          <Toggle
           label="Thursday"
           defaultToggled={}
           style={}
          />
          <Toggle
           label="Friday"
           defaultToggled={}
           style={}
          />
          <Toggle
           label="Saturday"
           defaultToggled={}
           style={}
          />
          <Divider />
          <TextField
            hintText="ex. My morning workout consisting of stretching, cardio, weightlifting, and some jammin' tunes!" floatingLabelText="Please input the description of your Routine"
            multiLine={true}
            rows={3} />
        <Paper />
      </div>
    );
  }
}
