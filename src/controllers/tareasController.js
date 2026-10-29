const data = require('../data/tareasData');

module.exports = {
  listar: (req, res) => res.json(data.obtenerTodas()),
  obtener: (req, res) => {
    const tarea = data.obtenerPorId(parseInt(req.params.id));
    return tarea ? res.json(tarea) : res.status(404).json({ error: 'Tarea no encontrada' });
  },
  crear: (req, res) => {
    const { titulo, responsable, descripcion } = req.body;
    if (!titulo || !responsable) {
      return res.status(400).json({ error: 'Título y responsable son obligatorios' });
    }
    const nueva = data.crear({ titulo, descripcion: descripcion || '', responsable, estado: 'pendiente' });
    res.status(201).json(nueva);
  },
  actualizar: (req, res) => {
    const actualizada = data.actualizar(parseInt(req.params.id), req.body);
    return actualizada ? res.json(actualizada) : res.status(404).json({ error: 'Tarea no encontrada' });
  },
  eliminar: (req, res) => {
    const exito = data.eliminar(parseInt(req.params.id));
    return exito ? res.status(204).send() : res.status(404).json({ error: 'Tarea no encontrada' });
  }
};
