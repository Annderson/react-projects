const restful = require('node-restful')

const mongoose = restful.mongoose

const loginSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    createAt: { type: Date, default: Date.now }
})

module.exports = restful.model('Login', loginSchema)