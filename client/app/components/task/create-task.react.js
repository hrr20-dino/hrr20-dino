import React from 'react';
import CreateTaskNav from './create-task-nav.react.js';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AddCircleOutline from 'material-ui/svg-icons/content/add-circle-outline';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';

export default class CreateTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const paperStyle = {
      height: 400,
      width: 400,
      margin: 20,
    };
    const centerPaper = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    };
    const style = {
      margin: 12,
    };
    return (
      <div>
        <CreateTaskNav />
        <div style={centerPaper}>
          <div>
            <Paper style={paperStyle} zDepth={4}>
              {/* inser onChange into text field */}
              <div style={{margin: 20}}>
                <TextField
                  type="text"
                  hintText="ex. Morning jog for 30 minutes"
                  floatingLabelText="Please input the name of your Task"
                  fullWidth={true}
                /><br />
                <Divider />
                <TextField
                  hintText="ex. My morning jog consisted of 4 minute intervals with 1 minute rest periods along the San Fransisco Bay" floatingLabelText="Please input the description of your Routine"
                  fullWidth={true}
                  multiLine={true}
                  rows={4} />
                <RaisedButton
                  label="Add Another Task"
                  disabled={true}
                  style={style} />
                <RaisedButton
                  label="Add Task"
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
