import AppDispatcher from '../dispatcher/app-dispatcher';
import TaskConstants from '../constants/task-constants';

export default {
  addTask(data) {
    AppDispatcher.dispatch({
      actionType: TaskConstants.ADD_TASK,
      data: data
    });
  },

  removeTask(id) {
    AppDispatcher.dispatch({
      actionType: TaskConstants.REMOVE_TASK,
      id: id
    });
  },

  updateTask(id, data) {
    AppDispatcher.dispatch({
      actionType: TaskConstants.UPDATE_TASK,
      id: id,
      data: data
    });
  }
};
