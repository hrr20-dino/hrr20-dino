var Sequelize = require('sequelize');

//#######################__Create Connection__##############################

var db_connection = new Sequelize('app_data', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});

db_connection.sync();

//#######################__Define Models__##############################

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

//#######################__Define Associations__##############################

User.hasMany(Routine);
Routine.hasMany(Task);

//#######################__Sync Tables__##############################

Task.sync().then(console.log('Successfully generated Task table.')).error(console.log('Error creating Task table!'));
Routine.sync().then(console.log('Successfully generated Routine Table.')).error(console.log('Error creating Routine table!'));
User.sync().then(console.log('Successfully generated User Table.')).error(console.log('Error creating User table!'));

module.exports = {
  db_connection: db_connection,
  User: User,
  Routine: Routine,
  Task: Task
}




