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
      this.axios.get(`/${endpoint}`, {
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

  post(endpoint, params) {
    return new Promise((resolve, reject) => {
      this.axios.post(`/${endpoint}`, params)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  update(endpoint, data, params) {
    return new Promise((resolve, reject) => {
      this.axios.put(`/${endpoint}`, data, params)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  delete(endpoint, params) {
    return new Promise((resolve, reject) => {
      this.axios.delete(`/${endpoint}`, params)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    })
  }
}
