let reservas = [];
let siguienteId = 1;

function obtenerTodas() {
  return reservas;
}

function obtenerPorId(id) {
  return reservas.find(r => r.id === id);
}

function crear(datos) {
  const nueva = { id: siguienteId++, ...datos };
  reservas.push(nueva);
  return nueva;
}

function actualizar(id, datos) {
  const reserva = obtenerPorId(id);
  if (!reserva) return null;
  Object.assign(reserva, datos);
  return reserva;
}

// Regla del caso: dos reservas se solapan si son del mismo espacio,
// misma fecha, y sus horarios se cruzan. Solo cuentan las "activa".
function seSolapa({ espacioId, fecha, horaInicio, horaFin, idExcluir = null }) {
  return reservas.some(r =>
    r.estado === 'activa' &&
    r.espacioId === espacioId &&
    r.fecha === fecha &&
    (idExcluir === null || r.id !== idExcluir) &&
    horaInicio < r.horaFin && horaFin > r.horaInicio
  );
}

module.exports = { obtenerTodas, obtenerPorId, crear, actualizar, seSolapa };
