import React from 'react';
import ReactDOM from 'react-dom';
import Application from './components/application/application.react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render(
  <div>
    <MuiThemeProvider>
      <Application />
    </MuiThemeProvider>
  </div>,
  document.getElementById('app-container')
);
