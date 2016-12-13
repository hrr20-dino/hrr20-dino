const Promise = require('bluebird');
const Models = require('../../../database/database_config');


module.exports = {

  addTask: function (req, res, next) {
    Models.Task.build({
      name: req.body.name,
      description: req.body.description,
      completed: req.body.completed
    })
    .save()
    .then(function(addedTask) {
      res.json(addedTask.dataValues);
    })
    .catch(function(error) {
      next(error);
    });
  },

  //gets the routines for the specific user
  getAllTasks: function(req, res, next) {
    Models.Task.findAll({
      where: {
        id: req.params.routineId
      }
    })
      .then(function (tasks) {
        res.json(tasks);
      })
      .catch(function(error) {
        next(error);
      });

  },

  deleteATask: function(req, res, next) {
    Models.Task.destroy({
      where: {
        id: req.params.taskName
      }
    })
    .then(function(result) {
      res.json(result);
    })
    .catch(function(error) {
      next(error);
    })
  },

  updateATask: function(req, res, next) {
    Models.Task.update(req.body, {
      where: {
        id: Number(req.params.taskName)
      }
    })
    .then(function(result) {
      res.json(result[0]);
    })
    .catch(function(error) {
      next(error);
    })
  }


}