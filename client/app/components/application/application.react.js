import React from 'react';
<<<<<<< a323ff5f9202d347e66a26cb031bef0ea6e3fec0
// import SideMenu from '../../components/side-menu/side-menu.react';
import TestComponent from './test-component.react';
=======
import PreAuthNav from '../routine/pre-auth-nav.react';
>>>>>>> Updated UI components for Routine views and added Pre-Auth Nav

export default class Application extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id='application'>
<<<<<<< a323ff5f9202d347e66a26cb031bef0ea6e3fec0
        {/*<SideMenu />*/}
        <TestComponent />
=======
        {/*}<SideMenu />*/}
        <PreAuthNav />
        {/*}<CreateRoutine />*/}
>>>>>>> Updated UI components for Routine views and added Pre-Auth Nav
      </div>
    );
  }
}
