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
    .get(userController.function)
    .post(userController.function);

  router.route('/users/:users_id')
    .get(userController.function)
    .put(userController.function)
    .delete(userController.function);

  //all the routes for routines
  router.route('/routines')
    .get(routineController.function)
    .post(routineController.function);

  router.route('/routines/:routines_id')
    .get(routineController.function)
    .put(routineController.function)
    .delete(routineController.function);

  //all the routes for tasks
  router.route('/task')
    .get(taskController.function)
    .post(taskController.function);

  router.route('/task/:task_id')
    .get(taskController.function)
    .put(taskController.function)
    .delete(taskController.function);



  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
    .get((req, res) => {
      res.status(404);
    });

  // All other routes should redirect to the index.html
  app.route('/*')
    .get((req, res) => {
      res.sendFile(path.join(__dirname, 'dist/index.html'));
    });
};
