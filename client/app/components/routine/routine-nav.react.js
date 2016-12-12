import React from 'react';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';
import PowerSettingsNew from 'material-ui/svg-icons/action/power-settings-new';


export default class Routine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

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
            <div style={titleStyle}>Routine</div>
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
