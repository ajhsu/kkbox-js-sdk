const axios = require('axios');

const http = {
  get(url, requestOptions) {
    return axios({
      url,
      method: 'GET',
      responseType: 'json',
      ...requestOptions
    })
      .then(function(response) {
        return response.data;
      })
      .catch(function(err) {
        console.error({ status: err.response.status, data: err.response.data });
      });
  },
  post(url, requestOptions) {
    return axios({
      url,
      method: 'POST',
      responseType: 'json',
      ...requestOptions
    })
      .then(function(response) {
        return response.data;
      })
      .catch(function(err) {
        console.error({ status: err.response.status, data: err.response.data });
      });
  }
};

module.exports = http;
