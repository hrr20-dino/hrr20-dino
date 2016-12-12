/**
 *      superclass for other stores
 */


import EventEmitter from 'events';
import Crud from '../../lib/crud';
import MockData from '../spec/fixtures/mock-data-index';
import _ from 'lodash';

const CHANGE_EVENT = 'change';

class Store extends EventEmitter {
  constructor(subClass) {
    super();
    this.db = new Crud();

    this.storeName = subClass.storeName;
    this.mock = false;

    this.data = {
      collection: []
    };
  }

  useMockData() {
    this.mock = true;
    this.data.collection = MockData[this.storeName];
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

  get(params) {
    return new Promise((resolve, reject) => {
      if (this.mock) {
        resolve(this.data);
      } else {
        this.db.get(this.storeName, params)
          .then((data) => {
            resolve(data);
          })
          .catch((err) => {
            reject(err);
          });
      }
    });
  }

  add(data) {
    if (this.mock) {
      this.data.collection.push(data);
      this.emitChange();
    } else {
      this.db.post(this.storeName, data)
        .then(() => {
          this.emitChange();
        });
    }
  }

  update(id, data) {
    if (this.mock) {
      const index = _.findIndex(this.data.collection, { id: id });
      if (index !== -1) {
        _.assignIn(this.data.collection[index], data);
        this.emitChange();
      }
    } else {
      this.db.update(`${this.storeName}/${id}`, data)
        .then(() => {
          this.emitChange();
        });
    }
  }

  remove(id) {
    if (this.mock) {
      const index = _.findIndex(this.data.collection, { id: id });
      if (index !== -1) {
        this.data.collection.splice(index, 1);
        this.emitChange();
      }
    } else {
      this.db.delete(`${this.storeName}/${id}`)
        .then(() => {
          this.emitChange();
        });
    }
  }
}

Store.dispatchToken = null;

export default Store;
