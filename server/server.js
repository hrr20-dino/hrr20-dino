'use strict';

const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const config = require('./config/express');
const routes = require('./routes');
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');

// set up database connection here
// do all that app.set, app.use, etc in ./config/express.js

require('./config/express')(app);
const router = require('./routes')(app, express);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.options('*', cors());
app.del('*', cors());
app.use('/', router);
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
