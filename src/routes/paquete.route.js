const express = require("express");
const router = express.Router();
const ctrlPaquete = require('../controllers/paquete.controller')
const validations = require('../utils/validations')
const passport = require('passport')
const { rolUsuario } = require('../middlewares/rolUsuario')
const { rolEmpleado } = require('../middlewares/rolEmpleado')
const { rolLiderUsuario } = require('../middlewares/rolLiderUsuario')


router.post('/solicitudPaquete', validations.validar_paquete, passport.authenticate('jwt', { session: false }), rolUsuario, ctrlPaquete.solicitarPaquete)
router.delete('/removerSolicitudPaquete/:id', passport.authenticate('jwt', { session: false }), rolLiderUsuario, ctrlPaquete.eliminarSolicitudPaquete)
router.get('/listarSolicitudesPaquetes', passport.authenticate('jwt', { session: false }), ctrlPaquete.listarSolicitudesPaquetes)
router.get('/listarSolicitudesPaquetesRecogidos', passport.authenticate('jwt', { session: false }), ctrlPaquete.listarSolicitudesPaquetesRecogidos)
router.get('/listarSolicitudesPaquetesNoRecogidos', passport.authenticate('jwt', { session: false }), ctrlPaquete.listarSolicitudesPaquetesNoRecogidos)
router.put('/editarEstadoPaquete/:id', passport.authenticate('jwt', { session: false }), rolEmpleado, ctrlPaquete.editarEstadoSolicitudePaquete)


module.exports = router;
