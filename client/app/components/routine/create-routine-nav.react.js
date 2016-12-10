'use strict';

import React from 'React';
import FontIcon from 'material-ui/FontIcon';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

export default class CreateRoutineNav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    };
  };
}

render() {
  <Toolbar>
    <ToolbarGroup>
      <ToolbarTitle text="Team Dino" />
      <FontIcon className="" />
      <ToolbarSeparator />
      <FontIcon className="" />
    </ToolbarGroup>
  </Toolbar>
}
