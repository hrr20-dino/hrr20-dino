/**
 *      task store
 */

import AppDispatcher from '../dispatcher/app-dispatcher';
import TaskConstants from '../constants/task-constants';
import Store from './store';

class TaskStore extends Store {
  constructor() {
    super();

    this.tasks = {};
  }

  getTasks(query) {
    // retrieve from server as requested and store in this.tasks
  }
}

let taskStoreInstance = new TaskStore();

taskStoreInstance.dispatchToken = AppDispatcher.register(action => {
  switch (action.actionType) {
    case TaskConstants.ADD_TASK:
      // add task
      break;
    case TaskConstants.REMOVE_TASK:
      // remove task
      break;
    case TaskConstants.UPDATE_TASK:
      // update task
      break;
    default:
    // no op
  }

  taskStoreInstance.emitChange();    // will this fire too early for async events?
});

export default taskStoreInstance;
