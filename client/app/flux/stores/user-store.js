/**
 *      user store
 */

import AppDispatcher from '../dispatcher/app-dispatcher';
import UserConstants from '../constants/user-constants';
import Store from './store';
import Crud from '../../lib/crud';
import MockUserData from '../spec/fixtures/mock-user-data';
import _ from 'lodash';

class UserStore extends Store {
  constructor(props) {
    super(props);

    this.db = new Crud();

    this.mock = false;

    this.users = [];
    this.currentUser = null;
  }

  useMockData() {
    this.mock = true;
    this.users = MockUserData;
    this.currentUser = this.users[0];
  }

  getUsers(params = {}) {

    return new Promise((resolve, reject) => {
      if (this.mock) {
        resolve(this.users);
      } else {
        this.db.get('task', params)
          .then((data) => {
            resolve(data);
          })
          .catch((err) => {
            reject(err);
          });
      }
    });
  }

  getCurrentUser() {
    return this.currentUser;
  }

}

let userStoreInstance = new UserStore();

userStoreInstance.dispatchToken = AppDispatcher.register(action => {
  switch (action.actionType) {
    case UserConstants.ADD_USER:
      if (userStoreInstance.mock) {
        userStoreInstance.users.push(action.data);
        userStoreInstance.emitChange();
      } else {
        userStoreInstance.db.post('user', action.data)
          .then(() => {
            userStoreInstance.emitChange();
          });
      }
      break;

    case UserConstants.REMOVE_USER:
      if (userStoreInstance.mock) {
        const userIndex = _.findIndex(userStoreInstance.users, (user) => {
          return user.id === action.id;
        });

        if (userIndex !== -1) {
          userStoreInstance.users.splice(userIndex, 1);
          userStoreInstance.emitChange();
        }
      } else {
        userStoreInstance.db.delete(`user/${action.data}`)
          .then(() => {
            userStoreInstance.emitChange();
          });
      }
      break;

    case UserConstants.UPDATE_USER:
      if (userStoreInstance.mock) {
        const userIndex = _.findIndex(userStoreInstance.users, (user) => {
          return user.id === action.id;
        });
        if (userIndex !== -1) {
          _.assignIn(userStoreInstance.users[userIndex], action.data);
          userStoreInstance.emitChange();
        }
      } else {
        userStoreInstance.db.update(`user/${action.id}`, action.data)
          .then(() => {
            userStoreInstance.emitChange();
          });
      }

      break;

    default:
    // no op
  }

});

export default userStoreInstance;
