const moment = require('moment');

function timer (request, response, next) {
    console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
    next();
}

module.exports = timer;