"use strict";
const express = require('express');
const app = express();
const logger = require('../src/middleware/logger')
const validator = require('../src/middleware/validator')
const errorHandler = require('../src/error-handlers/500')
const notFound = require('../src/error-handlers/404')
app.use(logger)



app.get('/', (req, res) => {

    res.status(200).send("Welcom in home page.")
})

app.get('/person', validator, (req, res) => {

    res.status(200).json({
        Name: req.query.name

    })
})

app.use(errorHandler)
app.use('*', notFound)
function start(port) {
    app.listen(port, () => {
        console.log(`The server is connected on ${port}`)
    })
}



module.exports = {
    app: app,
    start: start
}