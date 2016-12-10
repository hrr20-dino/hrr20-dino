import AppDispatcher from '../dispatcher/app-dispatcher';
import RoutineConstants from '../constants/routine-constants';

export default {
  routineAdd(routine) {
    AppDispatcher.dispatch({
      actionType: RoutineConstants.ROUTINE_ADD,
      data: routine
    });
  },

  routineRemove(routine) {
    AppDispatcher.dispatch({
      actionType: RoutineConstants.ROUTINE_REMOVE,
      data: routine
    });
  },

  routineUpdate(routine) {
    AppDispatcher.dispatch({
      actionType: RoutineConstants.ROUTINE_UPDATE,
      data: routine
    });
  }
}
