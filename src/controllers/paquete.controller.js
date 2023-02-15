const { validationResult } = require('express-validator')
const ModeloPauqete = require('../models/paquete.model')


const solicitarPaquete = async (req, res) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ status: false, errors: errors.array() })
        }

        const { descripcionPaquete, categoriaPaquete, ciudadOrigen, direccionOrigen, ciudadDestino, direccionDestino } = req.body;

        const solicitudPaquete = new ModeloPauqete({
            descripcionPaquete: descripcionPaquete,
            categoriaPaquete: categoriaPaquete,
            ciudadOrigen: ciudadOrigen,
            direccionOrigen: direccionOrigen,
            ciudadDestino: ciudadDestino,
            direccionDestino: direccionDestino,
        })

        await solicitudPaquete.save()


        return res.status(200).json({ status: true })


    } catch (error) {
        console.log(error)
        return res.status(400).json({
            status: false
        })
    }
}

const eliminarSolicitudPaquete = async (req, res) => {
    try {

        const { id } = req.params;

        const solicitudRemovida = await ModeloPauqete.findByIdAndRemove(id);

        return res.status(200).json({ status: true, solicitud: solicitudRemovida })

    } catch (error) {
        console.log(error)
        return res.status(400).json({
            status: false
        })
    }
}

const listarSolicitudesPaquetes = async (req, res) => {
    try {

        const solicitudes = await ModeloPauqete.find();

        if (!solicitudes) {
            return res.status(200).json({
                status: true,
                solicitudes: false
            })
        }

        return res.status(200).json({ status: true, solicitudes: solicitudes })

    } catch (error) {
        console.log(error)
        return res.status(400).json({
            status: false
        })
    }
}

const listarSolicitudesPaquetesRecogidos = async (req, res) => {
    try {

        const solicitudes = await ModeloPauqete.find({ "estado": true });

        if (!solicitudes) {
            return res.status(200).json({
                status: true,
                solicitudes: false
            })
        }

        return res.status(200).json({ status: true, solicitudes: solicitudes })

    } catch (error) {
        console.log(error)
        return res.status(400).json({
            status: false
        })
    }
}

const listarSolicitudesPaquetesNoRecogidos = async (req, res) => {
    try {

        const solicitudes = await ModeloPauqete.find({ "estado": false });

        if (!solicitudes) {
            return res.status(200).json({
                status: true,
                solicitudes: false
            })
        }

        return res.status(200).json({ status: true, solicitudes: solicitudes })

    } catch (error) {
        console.log(error)
        return res.status(400).json({
            status: false
        })
    }
}


const editarEstadoSolicitudePaquete = async (req, res) => {
    try {

        const { id } = req.params;
        const { estado } = req.body

        if (estado != true && estado != false) {
            return res.status(400).json({
                status: false,
                message: "El estado debe ser true o false"
            })
        }

        const solicitud = await ModeloPauqete.findByIdAndUpdate(id, { "estado": estado }, { new: true });

        if (!solicitud) {
            return res.status(200).json({
                status: true,
                solicitud: false
            })
        }

        return res.status(200).json({ status: true, solicitud: solicitud })

    } catch (error) {
        console.log(error)
        return res.status(400).json({
            status: false
        })
    }
}

module.exports = {
    solicitarPaquete,
    eliminarSolicitudPaquete,
    listarSolicitudesPaquetes,
    editarEstadoSolicitudePaquete,
    listarSolicitudesPaquetesRecogidos,
    listarSolicitudesPaquetesNoRecogidos
}