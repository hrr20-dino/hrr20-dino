import React from 'react';
import ReactDOM from 'react-dom';
import Application from './components/application/application.react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

ReactDOM.render(
  <div>
    <MuiThemeProvider>
      <Application />
    </MuiThemeProvider>
  </div>,
  document.getElementById('app-container')
);
