// listen to the redis event
const pubsub = require('./pubsub');

pubsub.on('sell', function(data) {
    console.log('Sell ' + data.id + ' with amount equals to ' + data.amount);


});
