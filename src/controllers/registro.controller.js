const ModeloRegistro = require('../models/registro.model')
const { validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')


const registro = async (req, res) => {
    try {

        //Validar entradas del body
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ status: false, errors: errors.array() })
        }

        const { correo, contrasena, nombre, apellidos, documento, telefono } = req.body

        const nuevoUsuario = new ModeloRegistro({
            correo: correo,
            contrasena: bcrypt.hashSync(contrasena, 10),
            nombre: nombre,
            apellidos: apellidos,
            documento: documento,
            telefono: telefono
        })

        await nuevoUsuario.save()

        return res.status(200).json({ status: true })

    } catch (error) {

        console.log(error)
        return res.status(500).json({ status: false })
    }
}

module.exports = {
    registro
}