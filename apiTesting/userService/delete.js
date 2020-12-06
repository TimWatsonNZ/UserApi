var axios = require('axios');

const userUrl = require('../config').userApiUrl;

const deleteUser = (id) => {
  console.log("DELETE");
  var config = {
    method: 'delete',
    url: `${userUrl}/${id}`,
    headers: { 
      'Content-Type': 'application/json'
    }
  };
  
  return axios(config)
    .then(function (response) {
      return response.data;
    })
}

module.exports = { deleteUser };