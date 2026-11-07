const express = require('express');

const app = express();

app.use(express.json());


const rutasEspacios = require('./src/routes/espacios');
app.use('/espacios', rutasEspacios);

const rutasReservas = require('./src/routes/reservas');
app.use('/reservas', rutasReservas);

app.get('/', (req, res) => {
  res.json({ mensaje: 'API de Reserva de Espacios funcionando' });
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log('Servidor activo en el puerto ' + PORT));
