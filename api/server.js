const express = require('express')
const helmet = require('helmet')

const carsRouter = require('../cars/carsRouter')

const server = express()

server.use(helmet())
server.use(logger)
server.use(express.json())

server.use('/api/cars', carsRouter)

server.get('/'), (req, res) => {
    res.status(200).json({ api: 'server upppp'})
}

function logger(req, res, next) {
    console.log(`a ${req.method} request was made to ${req.url}`)
    next()
}

module.exports = server