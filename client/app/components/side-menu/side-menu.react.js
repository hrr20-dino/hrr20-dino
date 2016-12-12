import React from 'react';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import List from 'material-ui/svg-icons/action/list';
import Power from 'material-ui/svg-icons/action/power-settings-new';


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
          open={true} >
          <div>Test User</div>
          <Menu>
            <MenuItem
              primaryText="My Routines"
              rightIcon={<List />}
            />
            <Divider />
            <MenuItem
              primaryText="Logout"
              rightIcon={<Power />}
            />
          </Menu>
        </Drawer>
      </div>
    );
  }
}
