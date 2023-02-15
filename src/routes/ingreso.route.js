const express = require('express')
const router = express.Router()
const ctrlIngreso = require('../controllers/ingreso.controller')
const validations = require('../utils/validations')


router.get('/ingreso', validations.validar_ingreso, ctrlIngreso.ingreso)

module.exports = router