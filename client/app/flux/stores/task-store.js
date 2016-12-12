/**
 *      task store
 */

import AppDispatcher from '../dispatcher/app-dispatcher';
import TaskConstants from '../constants/task-constants';
import Store from './store';
import Crud from '../../lib/crud';
import _ from 'lodash';
import MockTaskData from '../../flux/spec/fixtures/mock-task-data';

class TaskStore extends Store {
  constructor() {
    super();

    this.db = new Crud();

    this.mock = false;

    this.tasks = [];
  }

  useMockData() {
    this.mock = true;
    this.tasks = MockTaskData;
  }

  getTasks(params = {}) {
    return new Promise((resolve, reject) => {
      if (this.mock) {
        resolve(this.tasks);
      } else {
        this.db.get('task', params)
          .then((data) => {
            resolve(data);
          })
          .catch((err) => {
            reject(err);
          });
      }
    });
  }
}

let taskStoreInstance = new TaskStore();

taskStoreInstance.dispatchToken = AppDispatcher.register(action => {
  switch (action.actionType) {
    case TaskConstants.ADD_TASK:
      if (taskStoreInstance.mock) {
        taskStoreInstance.tasks.push(action.data);
        taskStoreInstance.emitChange();
      } else {
        taskStoreInstance.db.post('task', action.data)
          .then(() => {
            taskStoreInstance.emitChange();
          });
      }
      break;

    case TaskConstants.REMOVE_TASK:
      if (taskStoreInstance.mock) {
        const taskIndex = _.findIndex(taskStoreInstance.tasks, (task) => {
          return task.id === action.id;
        });

        if (taskIndex !== -1) {
          taskStoreInstance.tasks.splice(taskIndex, 1);
          taskStoreInstance.emitChange();
        }
      } else {
        taskStoreInstance.db.delete(`task/${action.data}`)
          .then(() => {
            taskStoreInstance.emitChange();
          });
      }
      break;

    case TaskConstants.UPDATE_TASK:
      if (taskStoreInstance.mock) {
        const taskIndex = _.findIndex(taskStoreInstance.tasks, (task) => {
          return task.id === action.id;
        });
        if (taskIndex !== -1) {
          _.assignIn(taskStoreInstance.tasks[taskIndex], action.data);
          taskStoreInstance.emitChange();
        }
      } else {
        taskStoreInstance.db.update(`task/${action.id}`, action.data)
          .then(() => {
            taskStoreInstance.emitChange();
          });
      }
      break;

    default:
    // no op
  }

});

export default taskStoreInstance;
