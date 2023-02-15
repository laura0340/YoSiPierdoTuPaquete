const { check } = require('express-validator')


const validar_paquete = [
    check('descripcionPaquete')
        .isString()
        .withMessage("El parametro debe ser string")
        .notEmpty()
        .withMessage("El parametro es requerido"),
    check('categoriaPaquete')
        .isString()
        .withMessage("El parametro debe ser string")
        .notEmpty()
        .withMessage("El parametro es requerido"),
    check('ciudadOrigen')
        .isString()
        .withMessage("El parametro debe ser string")
        .notEmpty()
        .withMessage("El parametro es requerido"),
    check('direccionOrigen')
        .isString()
        .withMessage("El parametro debe ser string")
        .notEmpty()
        .withMessage("El parametro es requerido"),
    check('ciudadDestino')
        .isString()
        .withMessage("El parametro debe ser string")
        .notEmpty()
        .withMessage("El parametro es requerido"),
    check('direccionDestino')
        .isString()
        .withMessage("El parametro debe ser string")
        .notEmpty()
        .withMessage("El parametro es requerido")

]

const validar_ingreso = [
    check('correo')
        .isString()
        .withMessage("El parametro debe ser string")
        .notEmpty()
        .withMessage("El parametro es requerido"),
    check('contrasena')
        .notEmpty()
        .withMessage("El parametro es requerido"),
]

const validar_registro = [
    check('correo')
        .isString()
        .withMessage("El parametro debe ser string")
        .notEmpty()
        .withMessage("El parametro es requerido"),
    check('contrasena')
        .notEmpty()
        .withMessage("El parametro es requerido"),
    check('nombre')
        .isString()
        .withMessage("El parametro debe ser string"),
    check('apellidos')
        .isString()
        .withMessage("El parametro debe ser string"),
    check('documento')
        .isNumeric()
        .withMessage("The document must be numeric")
        .notEmpty()
        .withMessage("The document phone is required"),
    check('telefono')
        .isNumeric()
        .withMessage("El teléfono debe ser númerico")
        .notEmpty()
        .withMessage("El teléfono es obligatorio")
        .isLength({ min: 1, max: 10 })
        .withMessage("El teléfono debe estar entre los 10 digitos"),

]

const validar_calificacion = [
    check('calificacion')
        .isNumeric()
        .withMessage("La calificación debe ser númerico")
        .notEmpty()
        .withMessage("El calificación es obligatoria")
        .isLength({ min: 1, max: 10 })
        .withMessage("La califiación debe estar entre 1 y 5"),
    check('idSolicitud')
        .isString()
        .withMessage("El parametro debe ser string")
        .notEmpty()
        .withMessage("El parametro es requerido"),

]

module.exports = {
    validar_paquete,
    validar_ingreso,
    validar_registro,
    validar_calificacion
}