'use strict';

/// using dependencies
const express = require('express');
const app = express();

/// 2 middlewares that perform specific server actions
const logger = require('./middleware/logger.js');
const validator = require('./middleware/validator.js');
const fiveHundred = require('./error-handlers/500.js');
const routeError = require('./error-handlers/404.js');

app.use(express.json());

/// route that defines our GET on '/person'
app.get('/person', logger, validator, (request, response, next) => {
    let resObject = {
        name: request.query.name
    }
    response.status(200).json(resObject);
});

app.use(fiveHundred);
app.use(routeError);


module.exports = {
    app: app,
    start: (port) => {
        app.listen(port, () => 
            console.log('App is listening on Port :: ' + port));
    }
}