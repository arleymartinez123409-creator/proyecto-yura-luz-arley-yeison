const data = require('../data/reservas');

// Validación de cruce de horarios
function hayCruce(reservaExistente, nueva) {
  return reservaExistente.espacio === nueva.espacio &&
         reservaExistente.fecha === nueva.fecha &&
         nueva.horaInicio < reservaExistente.horaFin &&
         nueva.horaFin > reservaExistente.horaInicio;
}

function listar(req, res) {
  res.json(data.obtenerTodas());
}

function obtener(req, res) {
  const id = parseInt(req.params.id);
  const reserva = data.obtenerPorId(id);
  if (!reserva) return res.status(404).json({ error: 'Reserva no encontrada' });
  res.json(reserva);
}

function crear(req, res) {
  const nueva = req.body;

  // Validar cruce de horarios
  const cruce = data.obtenerTodas().some(r => hayCruce(r, nueva));
if (
!nueva.espacio ||
!nueva.fecha ||
!nueva.horaInicio ||
!nueva.horaFin
) {
return res.status(400).json({
error: 'Todos los campos son obligatorios'
});
}

  const creada = data.crear(nueva);
  res.status(201).json(creada);
}

function actualizar(req, res) {
  const id = parseInt(req.params.id);
  const actualizada = data.actualizar(id, req.body);
  if (!actualizada) return res.status(404).json({ error: 'Reserva no encontrada' });
  res.json(actualizada);
}

function eliminar(req, res) {
  const id = parseInt(req.params.id);
  const exito = data.eliminar(id);
  if (!exito) return res.status(404).json({ error: 'Reserva no encontrada' });
  res.status(204).send();
}

module.exports = { listar, obtener, crear, actualizar, eliminar };
