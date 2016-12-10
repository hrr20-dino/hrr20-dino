import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Settings from 'material-ui/svg-icons/file/settings';
import ArrowBack from 'material-ui/svg-icons/file/arrow-back';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

export default class RoutineNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <Toolbar>
          <ToolbarGroup firstChild={true}>
            <ArrowBack
              onClick={}
              />
            <ToolbarTitle className="" text={} />
          </ToolbarGroup>
          <ToolbarGroup lastChild={true}>
            <RaisedButton
              onClick={}
              label="Edit Routine"
              labelPosition="before"
              primary={true}
              icon={<Settings />}
              />
          </ToolbarGroup>
        </Toolbar>
      </div>
    );
  }
}
