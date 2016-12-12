import React from 'react';
import CreateRoutineNav from './create-routine-nav.react.js';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import Toggle from 'material-ui/Toggle';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AddCircleOutline from 'material-ui/svg-icons/content/add-circle-outline';


export default class CreateRoutine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    const paperStyle = {
      height: 600,
      width: 600,
      margin: 20,
    };
    const centerPaper = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    };
    return (
      <div>
        <CreateRoutineNav />
        <div style={centerPaper}>
          <div>
            <Paper style={paperStyle} zDepth={4}>
              {/* inser onChange into text field */}
              <div style={{margin: 20}}>
                <TextField
                  type="text"
                  hintText="ex. Morning Workout"
                  floatingLabelText="Please input the name of your Routine"
                  fullWidth={true}
                /><br />
                <div style={{fontSize: 18 + 'px'}}>Repeat</div>
                {/* insert defaultToggled props from routine.repeat and style for each Toggle*/}
                <Toggle
                 label="Sunday"
                 defaultToggled={false}
                />
                <Toggle
                 label="Monday"
                 defaultToggled={false}
                />
                <Toggle
                 label="Tuesday"
                 defaultToggled={false}
                />
                <Toggle
                 label="Wednesday"
                 defaultToggled={false}
                />
                <Toggle
                 label="Thursday"
                 defaultToggled={false}
                />
                <Toggle
                 label="Friday"
                 defaultToggled={false}
                />
                <Toggle
                 label="Saturday"
                 defaultToggled={false}
                />
                <Divider />
                <TextField
                  hintText="ex. My morning workout consisting of stretching, cardio, weightlifting, and some jammin' tunes!" floatingLabelText="Please input the description of your Routine"
                  fullWidth={true}
                  multiLine={true}
                  rows={4} />
                <RaisedButton
                  label="Add Routine"
                  labelPosition="before"
                  primary={true}
                  icon={<AddCircleOutline />}
                />
              </div>
            </ Paper>
          </div>
        </div>
      </div>
    );
  }
}
