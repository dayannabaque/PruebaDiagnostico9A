const { getUUID } = require('../adapters/get-id.adapter');
const { getAge }  = require('../adapters/get-age.adapter');

const { http } = require('../adapters/http-client.adapter');

module.exports = {
  getAge, 
  getUUID,
  http,
}