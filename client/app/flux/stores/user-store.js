/**
 *      user store
 */

import AppDispatcher from '../dispatcher/app-dispatcher';
import UserConstants from '../constants/user-constants';
import Store from './store';
import MockUsers from '../spec/fixtures/mock-user-data';

class UserStore extends Store {
  constructor() {
    super();

    this.users = MockUsers;   // temporary for testing
  }

  getUsers(query) {
    // retrieve user data and cache it in this.users
    if (!query) {
      return this.users;
    } else {

    }
  }
}

let userStoreInstance = new UserStore();

userStoreInstance.dispatchToken = AppDispatcher.register(action => {
  switch (action.actionType) {
    case UserConstants.USER_ADD:
      // add routine
      break;
    case UserConstants.USER_REMOVE:
      // remove routine
      break;
    case UserConstants.USER_UPDATE:
      // update routine
      break;
    default:
    // no op
  }

  userStoreInstance.emitChange();    // will this fire too early for async events?
});

export default userStoreInstance;
