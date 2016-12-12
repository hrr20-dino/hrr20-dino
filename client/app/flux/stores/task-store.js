/**
 *      task store
 */

import AppDispatcher from '../dispatcher/app-dispatcher';
import TaskConstants from '../constants/task-constants';
import Store from './store';


class TaskStore extends Store {
  constructor() {
    super({
      storeName: 'task'
    });

    this.data.tasks = [];
  }
}

let that = new TaskStore();

that.dispatchToken = AppDispatcher.register(action => {
  switch (action.actionType) {
    case TaskConstants.ADD_TASK:
      that.add(action.data);
      break;

    case TaskConstants.UPDATE_TASK:
      that.update(action.id, action.newData);
      break;

    case TaskConstants.REMOVE_TASK:
      that.remove(action.id);
      break;

    default:
    // no op
  }

});

export default that;
