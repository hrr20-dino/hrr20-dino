import React from 'react';
import TestComponent from './test-component.react';
import PreAuthNav from '../routine/pre-auth-nav.react';

export default class Application extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id='application'>
        {/*<PreAuthNav />*/}
        <TestComponent />
      </div>
    );
  }
}
