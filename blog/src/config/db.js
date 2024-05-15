const mysql = require('mysql2');


//Configuración de la conexión a la bbdd
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME
});

//Conectar a la bbdd
global.db = pool.promise();

