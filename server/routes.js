'use strict';

const path = require('path');
const userController = require('./api/user/user.controller.js');
const routineController = require('./api/routine/routine.controller.js');
const taskController = require('./api/task/task.controller.js');


module.exports = function(app, express) {
  var router = express.Router();

  //controller functions are in the controller.js of each folder in ./api/

  //all the routes for users
  router.route('/users')
    .get(userController.getAllUsers)
    .post(userController.addUser);

  router.route('/users/:userId')
    .get(userController.addUser)
    .put(userController.updateAUser)
    .delete(userController.deleteAUser);

  //all the routes for routines
  // router.route('/routines')
  //   .get(routineController.getMyRoutines)
  //   .post(routineController.addRoutine);

  router.route('/routines/:userId')
    .get(routineController.getMyRoutines);

  router.route('/routines/:userId/:routineId')
    .get(routineController.getARoutine)
    .put(routineController.updateARoutine)
    .delete(routineController.deleteARoutine)
    .post(routineController.addRoutine);

  //all the routes for tasks
  router.route('/task/:routineName')
    .get(taskController.getAllTasks);

  router.route('/task/:routineName/:taskName')
    .post(taskController.addTask)
    .put(taskController.updateATask)
    .delete(taskController.deleteATask);



  // All undefined asset or api routes should return a 404
  router.route('/:url(api|auth|components|app|bower_components|assets)/*')
    .get((req, res) => {
      res.status(404);
    });

  // All other routes should redirect to the index.html
  router.route('/*')
    .get((req, res) => {
      res.sendFile(path.join(__dirname, 'dist/index.html'));
    });

    return router;
};