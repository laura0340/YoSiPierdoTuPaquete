const express = require('express')
const app = express()

app.use(require('./registro.route'));
app.use(require('./ingreso.route'));
app.use(require('./paquete.route'));
app.use(require('./calificacion.route'));

module.exports = app

