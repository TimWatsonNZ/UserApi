var axios = require('axios');
const userUrl = require('../config').userApiUrl;

const update = (user) => axios({
  method: 'put',
  url: userUrl,
  headers: { 
    'Content-Type': 'application/json'
  },
  data: user
})
  .then(function (response) {
    return response.data;
  });

module.exports = { update };