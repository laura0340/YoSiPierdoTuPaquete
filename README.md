# Servicio web rest 
## Proyecto YoSiPierdoTuPaquete

##  Pasos para adecuar proyecto en ambiente local y poder realizar pruebas de funcionamiento

1. Descargar el repositorio
2. Crear archivo .env en la raíz de la carpeta y poner las siguientes variables de entorno:
    * PORT = 3000
    * DB = mongodb+srv://root:root@cluster0.bzui1.mongodb.net/yosipierdotupaquete?retryWrites=true&w=majority
    * SECRETPRIVATEKEY=C1av3Pr1v7ad1*
    * Nota: la información de las variables de entorno solo es con fines de prueba
3. Abrir una consola de comandos y situarse en la carpeta raíz y allí el comando **npm install**.  Esto con el fin de instalar todas las librerías necesarias
4. Una vez instaladas las librerias se puede inciar el proyecto, para esto se debe ejecutar el comando **npm run start:dev**

## El proyecto cuenta con 9 endpoints los cuales son: 
    * http://localhost:3000/api/registro
    * http://localhost:3000/api/ingreso
    * http://localhost:3000/api/solicitudPaquete
    * http://localhost:3000/api/listarSolicitudesPaquetes
    * http://localhost:3000/api/listarSolicitudesPaquetesRecogidos
    * http://localhost:3000/api/listarSolicitudesPaquetesNoRecogidos
    * http://localhost:3000/api/removerSolicitudPaquete/id
    * http://localhost:3000/api/editarEstadoPaquete/id
    * http://localhost:3000/api/calificacion

El endpoint http://localhost:3000/api/ingreso da como respuesta un token de acceso, que se deberá pasar a todos los otros endpoint a excepción del endpoint http://localhost:3000/api/registro para consumir su servico.

ejemplo de respuesta del endpoint http://localhost:3000/api/ingreso: 



    {

    "satatus": true,

    "token": "Bearer eyJhbGciOiJIUzI1NiIsI..."
    }

Para hacer la petición a los otros endpoints es necesario copia esta parte de la respuesta **eyJhbGciOiJIUzI1NiIsI...** y en la pestaña Authorization de postman buscar el typo **Bearer token** y pegarlo