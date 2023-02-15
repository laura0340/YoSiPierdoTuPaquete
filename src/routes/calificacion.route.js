const express = require("express");
const router = express.Router();
const ctrlCalificacion = require('../controllers/calificacion.controller')
const validations = require('../utils/validations')
const passport = require('passport')


router.post('/calificacion', passport.authenticate('jwt', { session: false }), validations.validar_calificacion, ctrlCalificacion.calificacionServicio)


module.exports = router;
