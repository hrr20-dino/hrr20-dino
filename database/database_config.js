var Sequelize = require('sequelize');

var db_connection = new Sequelize('app_data', 'root', '', {
  dialect: 'mysql',
  port: 3306
});

module.exports.db_connection = db connection;