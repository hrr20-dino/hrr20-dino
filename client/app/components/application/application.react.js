import React from 'react';
import SideMenu from '../../components/side-menu/side-menu.react';

export default class Application extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id='application'>
        <SideMenu />
      </div>
    );
  }
}
