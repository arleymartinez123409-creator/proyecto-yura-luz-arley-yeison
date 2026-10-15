const express = require('express');
const app = express();
app.use(express.json());

const rutasReservas = require('./src/routes/reservas');
app.use('/reservas', rutasReservas);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Servidor activo en el puerto ' + PORT));

