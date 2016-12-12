var Sequelize = require('sequelize');

//#######################__Create Connection__##############################

<<<<<<< 942b42cadc0daa7ca858cbeb5c071313b67e2661
<<<<<<< 9fa0c7b59d8ab1fea77e036cefa6943d6b956a47
var db_connection = new Sequelize('app_data', /*local_username*/, '', {
  host: 'localhost',
  dialect: 'postgres',
  port: /*Environment port*/
=======
=======
// var db_connection = new Sequelize('app_data', /*localhost username*/, '', {
//   host: 'localhost',
//   dialect: 'postgres',
//   port: /* port from postgres gui */
// });

>>>>>>> updates
var db_connection = new Sequelize('app_data', 'enduser', '', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5432
>>>>>>> updating datbase_config
});

//########################__Define Models__###############################

var User = db_connection.define('user', {
  name: {type: Sequelize.STRING, unique: true, validate: {notEmpty: true}},
  password: {type: Sequelize.STRING, validate: {notEmpty: true}},
  avatar: {type: Sequelize.STRING}
});

var Routine = db_connection.define('routine', {
  name: {type: Sequelize.STRING, unique: true, validate: {notEmpty: true}},
  description: {type: Sequelize.TEXT, validate: {notEmpty: true}},
  time_of_day: {type: Sequelize.TIME},
  repeat: {type: Sequelize.JSON} //this JSON object gets created on the client side
});

var Task = db_connection.define('task', {
  name: {type: Sequelize.STRING, unique: true, validate: {notEmpty: true}},
  description: {type: Sequelize.STRING, validate: {notEmpty: true}}
});

//#######################__Define Associations__##############################

User.hasMany(Routine);
Routine.hasMany(Task);
Task.belongsTo(Routine);
Routine.belongsTo(User);

//#######################__Sync Database and Export__##############################

db_connection.sync();

module.exports = {
  connection: db_connection,
  User: User,
  Routine: Routine,
  Task: Task
}




