import AppDispatcher from '../dispatcher/app-dispatcher';
import UserConstants from '../constants/user-constants';

export default {
  addUser(user) {
    AppDispatcher.dispatch({
      actionType: UserConstants.ADD_USER,
      data: user
    });
  },

  removeUser(user) {
    AppDispatcher.dispatch({
      actionType: UserConstants.REMOVE_USER,
      data: user
    });
  },

  updateUser(user) {
    AppDispatcher.dispatch({
      actionType: UserConstants.UPDATE_USER,
      data: user
    });
  }
};
