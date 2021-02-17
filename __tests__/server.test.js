'use strict';

const server = require('../src/server.js');
const supertest = require('supertest');
const request = supertest(server.app);

describe('Server tests', () => {
    it('should pass a 500 error with an invalid name', async () => {
        const response = await request.get('/person/wrong');

        expect(response.status).toEqual(500);
        expect(response.text).toEqual('Invalid person name');
    });

    it('should pass a 404 error when no route is triggered', async () => {
        const response = await request.get('/wrong');

        expect(response.status).toEqual(404);
        expect(response.text).toEqual('that route is not found');
    });

    it('should be able to create a person on POST /person', async () => {
        const response = await request.post('/person');

        expect(response.status).toEqual(404);
        expect(response.text).toEqual('that route is not found');
    });

    it('should pass a 200 if the name is in the query sting', async () => {
        const response = await request.get('/person?name=nick');

        expect(response.status).toEqual(200);
        expect(response.text).toEqual('Ivalid search query');
    });
});