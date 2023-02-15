const express = require('express')
const router = express.Router()
const ctrlRegistro = require('../controllers/registro.controller')
const validations = require('../utils/validations')


router.get('/registro', validations.validar_registro, ctrlRegistro.registro)

module.exports = router