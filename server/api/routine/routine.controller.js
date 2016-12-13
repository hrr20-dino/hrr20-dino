const Promisify = require('bluebird');
const Models = require('../../../database/database_config');

module.exports = {

  addRoutine: function (req, res, next) {
    Models.Routine.build({
      name: req.body.name,
      description: req.body.description,
      start_time: req.body.start_time,
      end_time: req.body.end_time,
      repeat: req.body.repeat,
      completed: req.body.completed
    }).save()
    .then(function(){
      res.status(201).send('Successfully created routine!')
    })
    .catch(function(error){
      res.status(404).send(error);
    })
  },

  //gets the routines for the current user
  getMyRoutines: function(req, res, next) {
    Models.Routine.findAll({
      where: {
        userName: req.params.userName
      }
    })
    .then(function(routines){
      res.status(200).json(routines);
    })
    .catch(function(error) {
      res.send(error);
    });
  },

  getARoutine: function(req, res, next) {
    Models.Routine.findAll({
      where: {
        name: req.params.routineName,
        userName: req.params.userName
      }
    })
    .then(function(routine){
      console.log(routine);
      res.status(200).json(routine);
    })
    .catch(function(error) {
      res.send(error);
    });
  },

  deleteARoutine: function(req, res, next) {
    Models.Routine.destroy({
      where: {
        name: req.params.routineName,
        userName: req.params.userName
      }
    })
    .then(function() {
      res.status(200).send('Routine successfully deleted!')
    })
    .catch(function(error){
      res.send(error);
    });
  },

  updateARoutine: function(req, res, next) {
    //Syntax for this might be tricky, as we have to dynamically
    //update a user-specified routine property.
  },
}