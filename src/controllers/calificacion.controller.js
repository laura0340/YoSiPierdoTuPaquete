const ModeloCalificacion = require('../models/calificacion.model')
const { validationResult } = require('express-validator')

const calificacionServicio = async (req, res) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ status: false, errors: errors.array() })
        }

        const { calificacion, observacion, idSolicitud } = req.body;

        const nuevaCalificacion = new ModeloCalificacion({
            calificacion: calificacion,
            observacion: observacion,
            idSolicitud: idSolicitud
        })

        await nuevaCalificacion.save()


        return res.status(200).json({ status: true })


    } catch (error) {
        console.log(error)
        return res.status(400).json({
            status: false
        })
    }
}

module.exports = {
    calificacionServicio
}