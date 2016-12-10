/**
 *      task store
 */

import AppDispatcher from '../dispatcher/app-dispatcher';
import TaskConstants from '../constants/task-constants';
import Store from './store';

class TaskStore extends Store {
  constructor() {
    super();
  }
}

let taskStoreInstance = new TaskStore();

taskStoreInstance.dispatchToken = AppDispatcher.register(action => {
  switch (action.actionType) {
    case TaskConstants.TASK_GET:
      // get task
      break;
    case TaskConstants.TASK_ADD:
      // add task
      break;
    case TaskConstants.TASK_REMOVE:
      // remove task
      break;
    case TaskConstants.TASK_UPDATE:
      // update task
      break;
    default:
    // no op
  }

  taskStoreInstance.emitChange();    // will this fire too early for async events?
});

export default taskStoreInstance;
