var Promisify = require('bluebird');
var Models = require('/Users/enduser/desktop/hrr/hrr20-dino/database/database_config.js');
//find a way to make that a better require location. why won't ../../database/database_config.js work?

module.exports = {

  function: function() {
    console.log('HELLLLOOO WORLD')
  },

  addTask: function (req, res, next) {

  },

  //gets the routines for the specific user
  getAllTasks: function(req, res, next) {

  },

  getTask: function(req, res, next) {
    var id = req.params.task_id
    Models.Task.findOne({
      where: {
        id: Number(req.params.id)
      }
    })
  },


}