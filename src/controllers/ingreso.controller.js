const path = require('path')
require('dotenv').config({ path: path.join(__dirname, "../../.env") })
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const ModeloRegistro = require('../models/registro.model')
const { validationResult } = require('express-validator')

const ingreso = async (req, res) => {

    try {

        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ status: false, errors: errors.array() })
        }

        const { correo, contrasena } = req.body

        //Verify email
        const email = await ModeloRegistro.findOne({ correo, correo })

        if (email.length === 0) {
            return res.status(401).json({
                status: false,
                errors: [
                    {
                        msg: "Usuario o contraseña incorrectos"
                    }
                ]
            })
        }
        //Verify password
        const hash = bcrypt.compareSync(contrasena, email.contrasena)

        if (!hash) {
            return res.status(401).json({
                status: false,
                errors: [
                    {
                        msg: "Usuario o contraseña incorrectos"
                    }
                ]
            })
        }

        //Information to store in the token
        const payload = {
            _id: email._id,
            correo: email.correo
        }

        //Generate the token
        const token = jwt.sign(payload, process.env.SECRETPRIVATEKEY, { expiresIn: '1h' })

        return res.json({
            satatus: true,
            token: `Bearer ${token}`
        })

    } catch (error) {
        return res.status(400).json({
            status: false
        })
    }

}


module.exports = {
    ingreso
}