import React from 'react';
// import SideMenu from '../../components/side-menu/side-menu.react';
import TestComponent from './test-component.react';

export default class Application extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id='application'>
        {/*<SideMenu />*/}
        <TestComponent />
      </div>
    );
  }
}
