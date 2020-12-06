var axios = require('axios');
const url = require('../config').userApiUrl;
const User = require('./user');
const post = (user) => 
  axios({
    method: 'post',
    url,
    headers: { 
      'Content-Type': 'application/json'
    },
    data: user
  })
  .then(function (response) {
    return response.data;
  });

module.exports = { post }
