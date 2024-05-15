const express = require('express');
const app = express();

//Middleware para parsear el cuerpo de las peticiones
app.use(express.json());

//Usar las rutas definidas en src/routes
app.use('/api', require('./routes/api'));

// Configurar Express para servir archivos estáticos desde la carpeta 'public'
app.use(express.static('public'));


module.exports = app;