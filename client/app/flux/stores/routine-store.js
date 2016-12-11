/**
 *      routine store
 */

import AppDispatcher from '../dispatcher/app-dispatcher';
import RoutineConstants from '../constants/routine-constants';
import Store from './store';
import MockRoutines from '../spec/fixtures/mock-routine-data';


class RoutineStore extends Store {
  constructor() {
    super();

    this.routines = MockRoutines;
  }

  getRoutines(query) {
    if (!query) {
      return this.routines;
    }
  }
}

let routineStoreInstance = new RoutineStore();

routineStoreInstance.dispatchToken = AppDispatcher.register(action => {
  switch (action.actionType) {
    case RoutineConstants.ROUTINE_ADD:
      routineStoreInstance.routines.push(action.data);
      routineStoreInstance.emitChange();
      break;
    case RoutineConstants.ROUTINE_REMOVE:
      // remove routine
      break;
    case RoutineConstants.ROUTINE_UPDATE:
      // update routine
      break;
    default:
      // no op
  }

  // routineStoreInstance.emitChange();    // will this fire too early for async events?
});

export default routineStoreInstance;
