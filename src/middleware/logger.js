'use strict';

const logger = (request, reponse, next) => {
    console.log(`request method at ${request.method} at ${request.url}`);
    next();
}

module.exports = logger;

