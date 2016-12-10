'use strict';

const path = require('path');

module.exports = function(app) {
  // before these routes will work, need to define module.exports

  // app.use('/api/routine', require('./api/routine'));
  // app.use('/api/task', require('./api/task'));
  // app.use('/api/user', require('./api/user'));

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
    .get((req, res) => {
      res.status(404);
    });

  // All other routes should redirect to the index.html
  app.route('/*')
    .get((req, res) => {
      res.sendFile(path.join(__dirname, 'dist/index.html'));
    });
};
