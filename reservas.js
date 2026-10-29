let reservas = [];
let siguienteId = 1;

function obtenerTodas() {
  return reservas;
}

function obtenerPorId(id) {
  return reservas.find(r => r.id === id);
}

function crear(datos) {
  const nuevaReserva = {
    id: siguienteId++,
    ...datos
  };

  reservas.push(nuevaReserva);

  return nuevaReserva;
}

function actualizar(id, datos) {
  const reserva = obtenerPorId(id);

  if (!reserva) {
    return null;
  }

  Object.assign(reserva, datos);

  return reserva;
}

function eliminar(id) {
  const index = reservas.findIndex(r => r.id === id);

  if (index === -1) {
    return false;
  }

  reservas.splice(index, 1);

  return true;
}

module.exports = {
  obtenerTodas,
  obtenerPorId,
  crear,
  actualizar,
  eliminar
};
