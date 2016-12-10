import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import AddCircleOutline from 'material-ui/svg-icons/file/add-circle-outline';
import ArrowBack from 'material-ui/svg-icons/file/arrow-back';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

export default class CreateRoutineNav extends React.Component {
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
            <ToolbarTitle className="" text="Create Routine" />
          </ToolbarGroup>
          <ToolbarGroup lastChild={true}>
            <RaisedButton
              onClick={}
              label="Add Routine"
              labelPosition="before"
              primary={true}
              icon={<AddCircleOutline />}
              />
          </ToolbarGroup>
        </Toolbar>
      </div>
    );
  }
}
