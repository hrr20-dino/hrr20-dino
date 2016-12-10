/**
 *      user store
 */

import AppDispatcher from '../dispatcher/app-dispatcher';
import UserConstants from '../constants/user-constants';
import Store from './store';
import MockUsers from '../spec/fixtures/mock-user-data';
import Crud from '../../lib/crud';

class UserStore extends Store {
  constructor() {
    super();

    this.db = new Crud();
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
      userStoreInstance.users.push(action.data);
      userStoreInstance.emitChange();
      // userStoreInstance.db.post('/users', { data: action.data })
      //   .then((data) => {
      //     userStoreInstance.emitChange(data);
      //   });
      break;
    case UserConstants.USER_REMOVE:
      break;
    case UserConstants.USER_UPDATE:
      break;
    default:
    // no op
  }

  // userStoreInstance.emitChange();    // will this fire too early for async events?
});

export default userStoreInstance;
