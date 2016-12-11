import AppDispatcher from '../dispatcher/app-dispatcher';
import TaskConstants from '../constants/task-constants';

export default {
  addTask(task) {
    AppDispatcher.dispatch({
      actionType: TaskConstants.ADD_TASK,
      data: task
    });
  },

  removeTask(task) {
    AppDispatcher.dispatch({
      actionType: TaskConstants.REMOVE_TASK,
      data: task
    });
  },

  updateTask(task) {
    AppDispatcher.dispatch({
      actionType: TaskConstants.UPDATE_TASK,
      data: task
    });
  }
};
