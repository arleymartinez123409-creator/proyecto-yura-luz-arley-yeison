const data = require('../data/tareas');

function listar(req, res) {
  res.json(data.obtenerTodas());
}

function obtener(req, res) {
  const id = parseInt(req.params.id);
  const tarea = data.obtenerPorId(id);
  if (!tarea) return res.status(404).json({ error: 'Tarea no encontrada' });
  res.json(tarea);
}

function crear(req, res) {
  const { titulo, responsable } = req.body;
  if (!titulo || !responsable) {
    return res.status(400).json({ error: 'titulo y responsable son obligatorios' });
  }
  const nueva = data.crear({
    titulo,
    descripcion: req.body.descripcion || '',
    responsable,
    estado: 'pendiente'
  });
  res.status(201).json(nueva);
}

function actualizar(req, res) {
  const id = parseInt(req.params.id);
  const actualizada = data.actualizar(id, req.body);
  if (!actualizada) return res.status(404).json({ error: 'Tarea no encontrada' });
  res.json(actualizada);
}

function eliminar(req, res) {
  const id = parseInt(req.params.id);
  const exito = data.eliminar(id);
  if (!exito) return res.status(404).json({ error: 'Tarea no encontrada' });
  res.status(204).send();
}

module.exports = { listar, obtener, crear, actualizar, eliminar };
