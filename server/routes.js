'use strict';

const path = require('path');

module.exports = function(app) {
  // before these routes will work, need to define module.exports

<<<<<<< 73bf1f069358bdfa1e6f8ef7a8a487f0fc33f09a
  // app.use('/api/routine', require('./api/routine'));
  // app.use('/api/task', require('./api/task'));
  // app.use('/api/user', require('./api/user'));
=======
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


>>>>>>> updates

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
