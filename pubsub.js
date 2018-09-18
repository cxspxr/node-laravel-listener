const NRP = require('node-redis-pubsub');

var config = {
    port  : 6379
};

module.exports = new NRP(config);
