'use strict';

const queryName = (request, response, next) => {
    if(!request.query.name){
        next('not available')
    }
    next();
};

module.exports = queryName;