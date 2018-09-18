// listen to the redis event
const pubsub = require('./pubsub');
const mysql = require('./mysql');

pubsub.on('sell', function(data) {
    console.log('Sell ' + data.id + ' with amount equals to ' + data.amount);

    var processedAmount = data.amount + 10;

    mysql.query('update sells set node = ' + processedAmount + ' where id=' + data.id);

});
