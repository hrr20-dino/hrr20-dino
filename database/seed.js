var database = require('./database_config.js');

var test_user = database.User.build({
  name: 'Sir Testburg',
  password:'test',
  avatar: 'http://www.yesnet.yk.ca/schools/projects/middleages2000/knights/graphics/horse.gif'
});

test_user.save().catch(function(error){
  console.log(error);
});

var test_routine = database.Routine.build({
  name: 'Joust',
  description: 'Daily jousting exercise',
  time_of_day: '12:00:00',
  repeat: '{"Sunday": true, "Monday": false, "Tuesday": false, "Wednesday": true, "Thursday": true, "Friday": false, "Saturday": false}'
});

test_routine.save().catch(function(error){
  console.log(error);
});

var test_task = database.Task.build({
  name: 'Get on horse',
  description: 'Prepare for jousting by getting on horse'
});

test_task.save().catch(function(error){
  console.log(error);
});

