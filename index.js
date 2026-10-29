const express = require('express');
const app = express();

app.use(express.json());

// Importar rutas
const rutasTareas = require('./src/routes/tareas');
const rutasReservas = require('./src/routes/reservas');

// Asignar rutas base
app.use('/tareas', rutasTareas);
app.use('/reservas', rutasReservas);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Servidor activo en el puerto ' + PORT));
