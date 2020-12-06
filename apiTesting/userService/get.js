var axios = require('axios');

const userUrl = require('../config').userApiUrl;

const getAll = (filter) => {
  const query = filter !== undefined ? new URLSearchParams(filter).toString() : undefined;
  const url = query ? `${userUrl}?${query}` : userUrl;

  return axios(url)
    .then(function (response) {
      return response.data;
    });
}


const getById = (id) => axios(`${userUrl}/${id}`)
  .then(function (response) {
    return response.data;
  });

  module.exports = { getAll, getById };