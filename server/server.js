'use strict';

const express = require('express');
const app = express();
const path = require('path');
const config = require('./config/express');
const routes = require('./routes');

// set up database connection here
// do all that app.set, app.use, etc in ./config/express.js
