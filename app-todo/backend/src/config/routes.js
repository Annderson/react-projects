const express = require('express')

module.exports = function(server) {

    const router = express.Router()
    server.use('/api', router)

    const todoService = require('../api/todo/todoService')
    todoService.register(router, '/todos')

    const loginService = require('../api/login/loginService')
    loginService.register(router, '/logins')

}