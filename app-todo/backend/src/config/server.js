const port = 3000

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')

server.use(allowCors)
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())


server.listen(port, function() {
    console.log('BackEnd is running on porta ' + port)
})

module.exports = server