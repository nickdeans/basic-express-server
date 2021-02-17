'use strict';


const supertest = require('supertest');
const server = require('../src/server.js');
const request = supertest(server.app);

describe('testing server for 500', () => {
    it('should send a 500 for no name', async () => {
        const response = await request.get('/person?');
        
        expect(response.status).toEqual(500);
        expect(response.text).toEqual('Invalid name');
    })
})