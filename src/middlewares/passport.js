const path = require('path')
require('dotenv').config({ path: path.join(__dirname, "../../.env") })
const { Strategy, ExtractJwt } = require('passport-jwt')
const ModeloRegistro = require('../models/registro.model')

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    ignoreExpiration: false,
    secretOrKey: process.env.SECRETPRIVATEKEY
}

const middleware = new Strategy(opts, async (payload, done) => {

    const user = await ModeloRegistro.findById(payload._id)
    if (user) {
        return done(null, user)
    }

    return done('nell', false)
})

module.exports = {
    middleware
}