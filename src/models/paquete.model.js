const mongoose = require('mongoose')
const Schema = mongoose.Schema

const registroSchema = Schema({
    descripcionPaquete: { type: String, required: true },
    categoriaPaquete: { type: String, required: true },
    ciudadOrigen: { type: String, required: true },
    direccionOrigen: { type: String, required: true },
    ciudadDestino: { type: String, required: true },
    direccionDestino: { type: String, required: true },
    estado: { type: Boolean, default: false }
}, {
    timestamps: true
})


module.exports = mongoose.model('paquete', registroSchema)