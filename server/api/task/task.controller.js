const Promise = require('bluebird');
const Models = Promise.promisifyAll(require('../../../database/database_config').User);


module.exports = {

  addTask: function (req, res, next) {
      if (JSON.parse(req.body))
      var task = req.body
  },

  //gets the routines for the specific user
  getAllTasks: function(req, res, next) {

  },

  getATask: function(req, res, next) {
    var id = req.params.task_id
    Models.Task.findOne({
      where: {
        id: Number(req.params.id)
      }
    })
  },

  deleteATask: function(req, res, next) {

  },

  updateATask: function(req, res, next) {

  }


}