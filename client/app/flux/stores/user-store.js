/**
 *      user store
 */

import AppDispatcher from '../dispatcher/app-dispatcher';
import UserConstants from '../constants/user-constants';
import Store from './store';

class UserStore extends Store {
  constructor() {
    super();

    this.users = {};
  }

  getUsers(query) {
    // retrieve user data and cache it in this.users
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