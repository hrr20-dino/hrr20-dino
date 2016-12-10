import AppDispatcher from '../dispatcher/app-dispatcher';
import TaskConstants from '../constants/task-constants';

export default {
  taskAdd(task) {
    AppDispatcher.dispatch({
      actionType: TaskConstants.TASK_ADD,
      data: task
    });
  },

  taskRemove(task) {
    AppDispatcher.dispatch({
      actionType: TaskConstants.TASK_REMOVE,
      data: task
    });
  },

  taskUpdate(task) {
    AppDispatcher.dispatch({
      actionType: TaskConstants.TASK_UPDATE,
      data: task
    });
  }
};
