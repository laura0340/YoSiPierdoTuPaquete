const path = require('path')
require('dotenv').config({ path: path.join(__dirname, "../.env") })
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const morgan = require('morgan')
const passport = require('passport')
const { middleware } = require('./middlewares/passport')


//middlewares
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(morgan('dev'))
app.use(passport.initialize())
passport.use(middleware)

// Cors
app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


//Routes
app.use('/api', require('./routes/index.route'))


//db
mongoose.connect(
    process.env.DB,
    (err) => {
        if (err) console.log(err)
        console.log('conexión a la base de datos')
    })


//server
app.listen(process.env.PORT, () => {
    console.log(`servidor corriendo en el puerto ${process.env.PORT}`)
})