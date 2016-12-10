/**
 *    crud
 *
 *    communicates with the server using Axios
 *    this class is implemented as a singleton
 */

let instance = null;

import axios from 'axios';

export default class Crud {
  constructor() {
    if (!instance) {
      instance = this;
    }

    return instance;
  }

  get(endpoint, params = { limit: 10, orderBy: 'desc' }) {
    axios.get(`/${endpoint}`, {
      params: params
    })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.error(err);
      });
  }

  post(endpoint, params) {
    axios.post(`/${endpoint}`, params)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.error(err);
      });
  }

  update(endpoint, data, params) {
    axios.put(`/${endpoint}`, data, params)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.error(err);
      });
  }

  delete(endpoint, params) {
    axios.delete(`/${endpoint}`, params)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.error(err);
      });
  }


}
