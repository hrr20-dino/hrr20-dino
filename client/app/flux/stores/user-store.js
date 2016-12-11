/**
 *      user store
 */

import AppDispatcher from '../dispatcher/app-dispatcher';
import UserConstants from '../constants/user-constants';
import Store from './store';
import MockUsers from '../spec/fixtures/mock-user-data';
import Crud from '../../lib/crud';

class UserStore extends Store {
  constructor(options) {
    super();

    this.db = new Crud();

    this.options = options;

    this.users = this.options.mock? MockUsers : [];
    this.currentUser = this.options.mock ? this.users[0] : null;
  }

  getUsers(params = {}) {
    if (this.options.mock) {
      return this.users;
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

  getCurrentUser() {
    return this.currentUser;
  }

}

let userStoreInstance = new UserStore();

userStoreInstance.dispatchToken = AppDispatcher.register(action => {
  switch (action.actionType) {
    case UserConstants.ADD_TASK:
      userStoreInstance.db.post('user', action.data)
        .then(() => {
          userStoreInstance.emitChange();
        });
      break;
    case UserConstants.REMOVE_TASK:
      userStoreInstance.db.delete(`user/${action.data}`)
        .then(() => {
          userStoreInstance.emitChange();
        });
      break;
    case UserConstants.UPDATE_TASK:
      userStoreInstance.db.update(`user/${action.id}`, action.data)
        .then(() => {
          userStoreInstance.emitChange();
        });
      break;
    default:
    // no op
  }
});

export default userStoreInstance;
