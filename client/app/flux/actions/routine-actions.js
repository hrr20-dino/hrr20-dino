import AppDispatcher from '../dispatcher/app-dispatcher';
import RoutineConstants from '../constants/routine-constants';

export default {
  addRoutine(routine) {
    AppDispatcher.dispatch({
      actionType: RoutineConstants.ADD_ROUTINE,
      data: routine
    });
  },

  removeRoutine(routine) {
    AppDispatcher.dispatch({
      actionType: RoutineConstants.REMOVE_ROUTINE,
      data: routine
    });
  },

  updateRoutine(routine) {
    AppDispatcher.dispatch({
      actionType: RoutineConstants.UPDATE_ROUTINE,
      data: routine
    });
  }
};
