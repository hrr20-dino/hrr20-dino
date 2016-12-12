/**
 *    crud
 *
 *    communicates with the server using Axios
 *    this class is implemented as a singleton
 */

let instance = null;

import Axios from 'axios';
import config from '../config/config.js';

export default class Crud {
  constructor() {
    if (!instance) {
      instance = this;
    }

    this.axios = Axios.create({
      baseURL: config.baseURL
    });

    return instance;
  }

  get(endpoint, params = { limit: 10, orderBy: 'desc' }) {
    return new Promise((resolve, reject) => {
      const id = params.id !== undefined ? params.id : '';
      this.axios.get(`/${endpoint}/${id}`, {
        params: params
      })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  post(endpoint, data) {
    return new Promise((resolve, reject) => {
      this.axios.post(`/${endpoint}`, data)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  update(endpoint, id, data) {
    return new Promise((resolve, reject) => {
      this.axios.put(`/${endpoint}/${id}`, data)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  delete(endpoint, id) {
    return new Promise((resolve, reject) => {
      this.axios.delete(`/${endpoint}`, id)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}
