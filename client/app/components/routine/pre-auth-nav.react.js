import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';

export default class PreAuthNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const titleStyle = {
      fontWeight: 'bold',
      fontSize: 28
    };
    return (
      <div>
        <Toolbar>
          <ToolbarGroup firstChild={true}>
            <ToolbarTitle
              style={titleStyle}
              text="DinoTask"
            />
          </ToolbarGroup>
          <ToolbarGroup lastChild={true}>
            <RaisedButton
              label="Login / Signup"
              labelPosition="before"
              primary={true}
              />
          </ToolbarGroup>
        </Toolbar>
      </div>
    );
  }
}
