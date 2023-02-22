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
            usuario: req.user._id,
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

        const { _id, tipoUsuario } = req.user
        const { id } = req.params;

        const solicitud = await ModeloPauqete.findById(id);

        if (!solicitud) {
            return res.status(200).json({ status: true, message: "La solicitud no existe" })
        }


        if (tipoUsuario == "usuario") {

            const solicitud = await ModeloPauqete.find({ _id: id, usuario: _id });

            if (solicitud.length == 0) {
                return res.status(403).json({ status: false, message: "El usuario no puede eliminar esta solicitud de paquete" })
            }


            const solicitudRemovida = await ModeloPauqete.findByIdAndRemove(id);

            return res.status(200).json({ status: true, solicitud: solicitudRemovida })

        } else if (tipoUsuario == "lider") {

            const solicitudRemovida = await ModeloPauqete.findByIdAndRemove(id);

            return res.status(200).json({ status: true, solicitud: solicitudRemovida })
        }



    } catch (error) {
        console.log(error)
        return res.status(400).json({
            status: false
        })
    }
}

const listarSolicitudesPaquetes = async (req, res) => {
    try {
        const { _id, tipoUsuario } = req.user

        if (tipoUsuario == "usuario") {
            const solicitudes = await ModeloPauqete.find({ usuario: _id });

            if (!solicitudes) {
                return res.status(200).json({
                    status: true,
                    solicitudes: false
                })
            }

            return res.status(200).json({ status: true, solicitudes: solicitudes })

        } else if (tipoUsuario == "empleado") {
            const solicitudes = await ModeloPauqete.find({ empleado: _id });

            if (!solicitudes) {
                return res.status(200).json({
                    status: true,
                    solicitudes: false
                })
            }

            return res.status(200).json({ status: true, solicitudes: solicitudes })

        } else if (tipoUsuario == "lider") {
            const solicitudes = await ModeloPauqete.find();

            if (!solicitudes) {
                return res.status(200).json({
                    status: true,
                    solicitudes: false
                })
            }

            return res.status(200).json({ status: true, solicitudes: solicitudes })
        }

    } catch (error) {
        console.log(error)
        return res.status(400).json({
            status: false
        })
    }
}

const listarSolicitudesPaquetesRecogidos = async (req, res) => {
    try {


        const { _id, tipoUsuario } = req.user

        if (tipoUsuario == "usuario") {
            const solicitudes = await ModeloPauqete.find({ usuario: _id, "estado": true });

            if (!solicitudes) {
                return res.status(200).json({
                    status: true,
                    solicitudes: false
                })
            }

            return res.status(200).json({ status: true, solicitudes: solicitudes })

        } else if (tipoUsuario == "empleado") {
            const solicitudes = await ModeloPauqete.find({ empleado: _id, "estado": true });

            if (!solicitudes) {
                return res.status(200).json({
                    status: true,
                    solicitudes: false
                })
            }

            return res.status(200).json({ status: true, solicitudes: solicitudes })

        } else if (tipoUsuario == "lider") {
            const solicitudes = await ModeloPauqete.find({ lider: _id, "estado": true });

            if (!solicitudes) {
                return res.status(200).json({
                    status: true,
                    solicitudes: false
                })
            }

            return res.status(200).json({ status: true, solicitudes: solicitudes })
        }

    } catch (error) {
        console.log(error)
        return res.status(400).json({
            status: false
        })
    }
}

const listarSolicitudesPaquetesNoRecogidos = async (req, res) => {
    try {


        const { _id, tipoUsuario } = req.user

        if (tipoUsuario == "usuario") {
            const solicitudes = await ModeloPauqete.find({ usuario: _id, "estado": false });

            if (!solicitudes) {
                return res.status(200).json({
                    status: true,
                    solicitudes: false
                })
            }

            return res.status(200).json({ status: true, solicitudes: solicitudes })

        } else if (tipoUsuario == "empleado") {
            const solicitudes = await ModeloPauqete.find({ empleado: _id, "estado": false });

            if (!solicitudes) {
                return res.status(200).json({
                    status: true,
                    solicitudes: false
                })
            }

            return res.status(200).json({ status: true, solicitudes: solicitudes })

        } else if (tipoUsuario == "lider") {
            const solicitudes = await ModeloPauqete.find({ lider: _id, "estado": false });

            if (!solicitudes) {
                return res.status(200).json({
                    status: true,
                    solicitudes: false
                })
            }

            return res.status(200).json({ status: true, solicitudes: solicitudes })
        }

    } catch (error) {
        console.log(error)
        return res.status(400).json({
            status: false
        })
    }
}


const editarEstadoSolicitudePaquete = async (req, res) => {
    try {

        const { id } = req.params
        const { estado } = req.body
        const { _id } = req.user

        if (estado != true && estado != false) {
            return res.status(400).json({
                status: false,
                message: "El estado debe ser true o false"
            })
        }

        const solicitud = await ModeloPauqete.findByIdAndUpdate(id, { "estado": estado, "empleado": _id }, { new: true });

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