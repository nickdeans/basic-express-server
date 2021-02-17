'use strict';

module.exports = function(request,response,next){
    response.status(404).send('that route is not found');
}


