//const { default: mongoose } = require("mongoose");

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

//llamado a body-parser
app.use(bodyParser.json());

//Importar las rutas
//const postRutas = require('./routes/rpost.js'); //const postRoute = require('./routes/rpost.js');
const postRoute = require('./routes/rpost.js');
app.use('/servicios',postRoute);
//app.use('/servicios', postRutas);

//constante para usar puerto dinamico
const port = process.env.port || 40000;

//RUTAS
app.get('/',(req,res) =>{
    res.send('Servidor Activo');
});

//CONEXION A LA BD
mongoose.connect(process.env.MONGODB_ATLAS)
.then(()=>console.log('Conectado a MongoDB'))
.catch((error)=>console.log('error al conectar a MongoDB Atlas'));

//Puerto de escucha del servidor, accediendo a http://localhost:40000/
//app.listen(40000);
app.listen(port, () => console.log('Conectado por el puerto: '+port));

// linea de package.json en  "scripts"
//  "test": "echo \"Error: no test specified\" && exit 1"  
//  "body-parse": "^0.1.0",