"use strict";
const server = require('../src/server')
const supertest = require('supertest')
const request = supertest(server.app)

describe('testing API server', () => {
    it('testing /', async () => {
        const response = await request.get('/');
        expect(response.text).toEqual('Welcom in home page.')
        expect(response.status).toEqual(200)
    })

    it('testing /person with params', async () => {
        const response = await request.get('/person?name=name');
        expect(typeof response).toEqual('object')
        expect(response.status).toEqual(200)
    })

    it('testing /person without params', async () => {
        const response = await request.get('/person');
        expect(response.status).toEqual(500)
    })

    it('testing req path not found', async () => {
        const response = await request.get('/notfound');
        expect(response.status).toEqual(404)
    })
})