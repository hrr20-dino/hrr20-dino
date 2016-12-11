import AppDispatcher from '../dispatcher/app-dispatcher';
import RoutineConstants from '../constants/routine-constants';

export default {
  addRoutine(data) {
    AppDispatcher.dispatch({
      actionType: RoutineConstants.ADD_ROUTINE,
      data: data
    });
  },

  removeRoutine(id) {
    AppDispatcher.dispatch({
      actionType: RoutineConstants.REMOVE_ROUTINE,
      id: id
    });
  },

  updateRoutine(id, data) {
    AppDispatcher.dispatch({
      actionType: RoutineConstants.UPDATE_ROUTINE,
      id: id,
      data: data
    });
  }
};
