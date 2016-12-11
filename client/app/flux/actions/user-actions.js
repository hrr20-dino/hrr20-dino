import AppDispatcher from '../dispatcher/app-dispatcher';
import UserConstants from '../constants/user-constants';

export default {
  addUser(data) {
    AppDispatcher.dispatch({
      actionType: UserConstants.ADD_USER,
      data: data
    });
  },

  removeUser(id) {
    AppDispatcher.dispatch({
      actionType: UserConstants.REMOVE_USER,
      id: id
    });
  },

  updateUser(id, data) {
    AppDispatcher.dispatch({
      actionType: UserConstants.UPDATE_USER,
      id: id,
      data: data
    });
  }
};
