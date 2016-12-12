'use strict';

const express = require('express');
const app = express();
const path = require('path');
const config = require('./config/express');
const routes = require('./routes');
const port = process.env.PORT || 3000;

// set up database connection here
// do all that app.set, app.use, etc in ./config/express.js

require('./config/express')(app);
require('./routes')(app, express);

const server = require('http').createServer(app);

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
