var db_connection = require('./database_config');

var User = db_connection.define('user', {
  name: {type: Sequelize.STRING, unique: true, validate: {notEmpty: true}},
  password: {type: Sequelize.STRING, validate: {notEmpty: true}}
});

var Routine = db_connection.define('routine', {
  name: {type: Sequelize.STRING, unique: true, validate: {notEmpty: true}}
});

var Task = db_connection.define('task', {
  name: {type: Sequelize.STRING, unique: true, validate: {notEmpty: true}}
});

User.hasMany(Routine);
Routine.hasMany(Task);

module.exports.User = User;
module.exports.Routine = Routine;
module.exports.Task = Task;
