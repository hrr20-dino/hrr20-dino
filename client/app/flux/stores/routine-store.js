/**
 *      routine store
 */

import AppDispatcher from '../dispatcher/app-dispatcher';
import RoutineConstants from '../constants/routine-constants';
import Store from './store';
import Crud from '../../lib/crud';
import _ from 'lodash';
import MockRoutineData from '../spec/fixtures/mock-routine-data';

import EventEmitter from 'events';

const CHANGE_EVENT = 'change';

class RoutineStore{
  constructor() {
    // super();

    this.mock = false;

    this.db = new Crud();

    this.routines = [];
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  useMockData() {
    this.mock = true;
    this.routines = MockRoutineData;
  }

  getRoutines(params = {}) {

    return new Promise((resolve, reject) => {
      if (this.mock) {
        resolve(this.routines);
      } else {
        this.db.get('routine', params)
          .then((data) => {
            resolve(data);
          })
          .catch((err) => {
            reject(err);
          });
      }
    });
  }
}

let routineStoreInstance = new RoutineStore();

routineStoreInstance.dispatchToken = AppDispatcher.register(action => {
  switch (action.actionType) {
    case RoutineConstants.ADD_ROUTINE:
      if (routineStoreInstance.mock) {
        routineStoreInstance.routines.push(action.data);
        routineStoreInstance.emitChange();
      } else {
        routineStoreInstance.db.post('routine', action.data)
          .then(() => {
            routineStoreInstance.emitChange();
          });
      }
      break;

    case RoutineConstants.REMOVE_ROUTINE:
      if (routineStoreInstance.mock) {
        const routineIndex = _.findIndex(routineStoreInstance.routines, (routine) => {
          return routine.id === action.id;
        });

        if (routineIndex !== -1) {
          routineStoreInstance.routines.splice(routineIndex, 1);
          routineStoreInstance.emitChange();
        }
      } else {
        routineStoreInstance.db.delete(`routine/${action.data}`)
          .then(() => {
            routineStoreInstance.emitChange();
          });
      }
      break;

    case RoutineConstants.UPDATE_ROUTINE:
      if (routineStoreInstance.mock) {
        const routineIndex = _.findIndex(routineStoreInstance.routines, (routine) => {
          return routine.id === action.id;
        });
        if (routineIndex !== -1) {
          _.assignIn(routineStoreInstance.routines[routineIndex], action.data);
          routineStoreInstance.emitChange();
        }
      } else {
        routineStoreInstance.db.update(`routine/${action.id}`, action.data)
          .then(() => {
            routineStoreInstance.emitChange();
          });

      }
      break;

    default:
    // no op
  }

});

export default routineStoreInstance;
