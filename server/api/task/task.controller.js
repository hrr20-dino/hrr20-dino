const Promise = require('bluebird');
const Models = Promise.promisifyAll(require('../../../database/database_config').User);


module.exports = {

  addTask: function (req, res, next) {
<<<<<<< 4634c8679a039d208c97d5f566a1f2d8f9896f5a
      if (JSON.parse(req.body))
      var task = req.body
=======
    var task = JSON.parse(req.body);
    if (t)
    Models.Task.build(req.body)
    .save()
    .then(function(addedTask) {
      res.json(addedTask.dataValues);
    })
    .catch(function(error) {
      next(error);
    });
>>>>>>> Updated task controller and routes
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