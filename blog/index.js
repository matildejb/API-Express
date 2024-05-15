const http = require('http');
const app = require('./src/app');

//Configuración de fichero de entorno .env
require('dotenv').config();


//Configuración de la base de datos 
require('./src/config/db');

//Crear el servidor http
const server = http.createServer(app);

//Obtener el puerto desde las variables de entorno o usar 3000 por defecto
const PORT = process.env.PORT || 3000;

//Iniciar el servidor
server.listen(PORT, () => {
    console.log(`Servidor escuchando en http:/localhost:${PORT}`);
});









