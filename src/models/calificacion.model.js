const mongoose = require('mongoose')
const Schema = mongoose.Schema

const registroSchema = Schema({
    calificacion: { type: Number, required: true },
    observacion: { type: String, default: "" },
    idSolicitud: { type: String, required: true },
}, {
    timestamps: true
})


module.exports = mongoose.model('calificaciones', registroSchema)