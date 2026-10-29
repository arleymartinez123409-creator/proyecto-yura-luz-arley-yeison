const express = require('express');
const app = express();
app.use(express.json());

const rutasTareas = require('./src/routes/tareas');
app.use('/tareas', rutasTareas);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Servidor activo en el puerto ' + PORT));
