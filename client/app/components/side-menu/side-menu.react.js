import React from 'react';
import UserStore from '../stores/user-store';
import UserActions from '../actions/user-actions';
import RoutineStore from '../stores/routine-store';
import RoutineActions from '../actions/routine-actions';
import TaskStore from '../stores/task-store';
import TaskActions from '../actions/task-actions';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import List from 'material-ui/svg-icons/social/list';
import Power from 'material-ui/svg-icons/social/power-settings-new';


export default class SideMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <Drawer
          open="true"
          className="">
          <div>{user.name}</div>
          <Menu>
            <MenuItem
              primaryText="My Routines"
              rightIcon={<List />}
              onClick={}
            />
            <Divider />
            <MenuItem
              primaryText="Logout"
              rightIcon={<Power />}
              onClick={}
             />
          </Menu>
        </Drawer>
      </div>
    );
  }
}
