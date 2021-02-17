'use strict';

/// using dependencies
const express = require('express');
const app = express();
const routeError = require('./error-handlers/404.js');
const logger = require('./middleware/logger.js');
const validator = require('./middleware/validator.js');

app.use(routeError);
app.use(express.json());

/// route
app.get('/person', logger, validator, (request, response, next) => {
    let resObject = {
        name: request.query.name
    }
    response.status(200).json(resObject);
});

function start(port){
    app.listen(port, () => {
        console.log('App is listening on Port ', port)
    });
}

module.exports = {
    app: app,
    start: start
};