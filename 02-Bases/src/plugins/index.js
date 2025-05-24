const { getUuid } = require('../plugins/get-uuid.plugin');
const { getAge } = require('../plugins/get-age.plugin');
const { httpClient } = require('../plugins/http-client.plugin');
const buildLogger = require('../plugins/logger.plugin');

module.exports = {
    getAge,
    getUuid,
    httpClient,
    buildLogger
}