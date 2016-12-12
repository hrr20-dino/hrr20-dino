import React from 'react';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';
import PowerSettingsNew from 'material-ui/svg-icons/action/power-settings-new';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';

export default class CreateTaskNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    render() {
      const logoStyle = {
        fontWeight: 'bold',
        fontSize: 28
      };
      const titleStyle = {
        fontSize: 28
      };
    return (
      <div>
        <Toolbar>
          <ToolbarGroup firstChild={true}>
            <ToolbarTitle style={logoStyle} text="Team Dino" />
          </ToolbarGroup>
          <ToolbarGroup lastChild={true}>
            {/* insert onClick/onTapTouch to ArrowBack */}
            <ArrowBack />
            <div style={titleStyle}>Create Task</div>
            <ToolbarSeparator />
            {/* insert onClick/onTapTouch to RaisedButton */}
            <RaisedButton
              label="Logout"
              labelPosition="before"
              primary={true}
              icon={<PowerSettingsNew />}
              />
          </ToolbarGroup>
        </Toolbar>
      </div>
    );
  }
}
