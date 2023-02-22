const express = require('express')
const app = express()

const rolUsuario = app.use((req, res, next) => {
    const rol = req.user.tipoUsuario

    if (rol == 'usuario') {
        next()
    } else {
        return res.status(400).json({
            status: false,
            message: "El usuario no esta autorizado para realizar esta tarea"
        })
    }
})

module.exports = {
    rolUsuario
}

