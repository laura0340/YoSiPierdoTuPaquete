const express = require("express");
const router = express.Router();
const ctrlCalificacion = require('../controllers/calificacion.controller')
const validations = require('../utils/validations')
const passport = require('passport')
const { rolUsuario } = require('../middlewares/rolUsuario')


router.post('/calificacion', validations.validar_calificacion, passport.authenticate('jwt', { session: false }), rolUsuario, ctrlCalificacion.calificacionServicio)


module.exports = router;
