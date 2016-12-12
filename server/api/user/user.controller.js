var Promisify = require('bluebird');
var Models = require('/Users/enduser/desktop/hrr/hrr20-dino/database/database_config.js');
//un-pseudo line 2 after you've filled in the proper location of database/database_config.js
//why won't ../../database/database_config.js work?

module.exports = {

  function: function(req, res, next) {
    console.log('HELLseff4LLOOO WORLD')

  },

  addRoutine: function (req, res, next) {

    console.log('hellooooo WORLD')
  },

  //gets the routines for the specific user
  getMyRoutines: function(req, res, next) {

  },


}