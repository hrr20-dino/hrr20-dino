/**
 *      task store
 */

import AppDispatcher from '../dispatcher/app-dispatcher';
import TaskConstants from '../constants/task-constants';
import Store from './store';
import Crud from '../../lib/crud';

class TaskStore extends Store {
  constructor() {
    super();

    this.db = new Crud();

    this.tasks = [];
  }

  getTasks(params = {}) {
    return new Promise((resolve, reject) => {
      this.db.get('task', params)
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}

let taskStoreInstance = new TaskStore();

taskStoreInstance.dispatchToken = AppDispatcher.register(action => {
  switch (action.actionType) {
    case TaskConstants.ADD_TASK:
      taskStoreInstance.db.post('task', action.data)
        .then(() => {
          taskStoreInstance.emitChange();
        });
      break;
    case TaskConstants.REMOVE_TASK:
      taskStoreInstance.db.delete(`task/${action.data}`)
        .then(() => {
          taskStoreInstance.emitChange();
        });
      break;
    case TaskConstants.UPDATE_TASK:
      taskStoreInstance.db.update(`task/${action.id}`, action.data)
        .then(() => {
          taskStoreInstance.emitChange();
        });
      break;
    default:
    // no op
  }

});

export default taskStoreInstance;
