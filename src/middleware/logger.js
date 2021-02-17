'use strict';

const logger = (request, reponse, next) => {
    console.log(`request method at ${request.method} :: ${request.url}`);
    next();
}

module.exports = logger;

