/**
 *      routine store
 */

import AppDispatcher from '../dispatcher/app-dispatcher';
import RoutineConstants from '../constants/routine-constants';
import Store from './store';
import MockRoutines from '../spec/fixtures/mock-routine-data';
import Crud from '../../lib/crud';


class RoutineStore extends Store {
  constructor(options) {
    super();

    this.options = options;

    this.db = new Crud();

    this.routines = this.options.mock ? MockRoutines : [];
  }

  getRoutines(params = {}) {
    if (this.options.mock) {
      return this.routines;
    } else {
      return new Promise((resolve, reject) => {
        this.db.get('task', params)
          .then((data) => {
            resolve(data);
          })
          .catch((err) => {
            reject(err);
          });
      });
    }
  }
}

let routineStoreInstance = new RoutineStore();

routineStoreInstance.dispatchToken = AppDispatcher.register(action => {
  switch (action.actionType) {
    case RoutineConstants.ADD_TASK:
      routineStoreInstance.db.post('routine', action.data)
        .then(() => {
          routineStoreInstance.emitChange();
        });
      break;
    case RoutineConstants.REMOVE_TASK:
      routineStoreInstance.db.delete(`routine/${action.data}`)
        .then(() => {
          routineStoreInstance.emitChange();
        });
      break;
    case RoutineConstants.UPDATE_TASK:
      routineStoreInstance.db.update(`routine/${action.id}`, action.data)
        .then(() => {
          routineStoreInstance.emitChange();
        });
      break;
    default:
    // no op
  }
});

export default routineStoreInstance;
