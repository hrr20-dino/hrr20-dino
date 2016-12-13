import React from 'react';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import AddCircleOutline from 'material-ui/svg-icons/content/add-circle-outline';
import RaisedButton from 'material-ui/RaisedButton';
import PowerSettingsNew from 'material-ui/svg-icons/action/power-settings-new';
import IconButton from 'material-ui/IconButton';
import Reorder from 'material-ui/svg-icons/action/reorder';
import { Link } from 'react-router';

export default class MyRoutinesNav extends React.Component {
  constructor(props) {
    super(props);
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
            {/* handle reorder href to open SideMenu */}
            {/*<IconButton onTouchTap={this.props.handleToggle.bind(this)}>*/}
              {/*<Reorder />*/}
            {/*</IconButton>*/}
            <ToolbarTitle style={logoStyle} text="Team Dino" />
          </ToolbarGroup>
          <ToolbarGroup lastChild={true}>
            {/* insert onClick/onTapTouch to ArrowBack */}
            <ArrowBack
              />
            <ToolbarTitle style={titleStyle} text="My Routines" />
            {/* insert onClick/onTapTouch to RaisedButton */}
            <RaisedButton
              label="Create Routine"
              labelPosition="before"
              primary={true}
              icon={<AddCircleOutline />}
            />
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
