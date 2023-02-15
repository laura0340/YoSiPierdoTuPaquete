const express = require("express");
const router = express.Router();
const ctrlPaquete = require('../controllers/paquete.controller')
const validations = require('../utils/validations')
const passport = require('passport')


router.post('/solicitudPaquete', passport.authenticate('jwt', { session: false }), validations.validar_paquete, ctrlPaquete.solicitarPaquete)
router.delete('/removerSolicitudPaquete/:id', passport.authenticate('jwt', { session: false }), ctrlPaquete.eliminarSolicitudPaquete)
router.get('/listarSolicitudesPaquetes', passport.authenticate('jwt', { session: false }), ctrlPaquete.listarSolicitudesPaquetes)
router.get('/listarSolicitudesPaquetesRecogidos', passport.authenticate('jwt', { session: false }), ctrlPaquete.listarSolicitudesPaquetesRecogidos)
router.get('/listarSolicitudesPaquetesNoRecogidos', passport.authenticate('jwt', { session: false }), ctrlPaquete.listarSolicitudesPaquetesNoRecogidos)
router.put('/editarEstadoPaquete/:id', passport.authenticate('jwt', { session: false }), ctrlPaquete.editarEstadoSolicitudePaquete)


module.exports = router;
