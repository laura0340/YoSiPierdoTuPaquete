const mongoose = require('mongoose')
const Schema = mongoose.Schema

const registroSchema = Schema({
    correo: { type: String, required: true, unique: true },
    contrasena: { type: String, required: true, unique: true },
    nombre: { type: String, required: true },
    apellidos: { type: String, required: true },
    documento: { type: Number, unique: true },
    telefono: { type: Number },
}, {
    timestamps: true
})


module.exports = mongoose.model('registro', registroSchema)