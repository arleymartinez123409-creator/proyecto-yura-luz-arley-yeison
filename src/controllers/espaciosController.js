const dataEspacios = require('../data/espacios');
const dataReservas = require('../data/reservas'); 


function listar(req, res) {
  res.json(dataEspacios.obtenerTodas());
}

function obtener(req, res) {
  const id = parseInt(req.params.id);   
  const espacio = dataEspacios.obtenerPorId(id);
  if (!espacio) return res.status(404).json({ error: 'Espacio no encontrado' });
  res.json(espacio);
}


function crear(req, res) {
  const { nombre, ubicacion, capacidad } = req.body;


  if (!nombre || !ubicacion || capacidad === undefined) {
    return res.status(400).json({ error: 'nombre, ubicacion y capacidad son obligatorios' });
  }
  
  if (typeof capacidad !== 'number' || capacidad <= 0) {
    return res.status(400).json({ error: 'capacidad debe ser un número mayor que 0' });
  }

  const nuevo = dataEspacios.crear({ nombre, ubicacion, capacidad });
  res.status(201).json(nuevo);          
}


function actualizar(req, res) {
  const id = parseInt(req.params.id);
  const espacio = dataEspacios.obtenerPorId(id);
  if (!espacio) return res.status(404).json({ error: 'Espacio no encontrado' });

  if (req.body.capacidad !== undefined &&
      (typeof req.body.capacidad !== 'number' || req.body.capacidad <= 0)) {
    return res.status(400).json({ error: 'capacidad debe ser un número mayor que 0' });
  }

  res.json(dataEspacios.actualizar(id, req.body));
}


function eliminar(req, res) {
  const id = parseInt(req.params.id);
  const espacio = dataEspacios.obtenerPorId(id);
  if (!espacio) return res.status(404).json({ error: 'Espacio no encontrado' });


  if (dataReservas.contarActivasPorEspacio(id) > 0) {
    return res.status(400).json({ error: 'No se puede eliminar: el espacio tiene reservas activas' });
  }

  dataEspacios.eliminar(id);
  res.status(204).send();
}


function disponibilidad(req, res) {
  const id = parseInt(req.params.id);
  const espacio = dataEspacios.obtenerPorId(id);
  if (!espacio) return res.status(404).json({ error: 'Espacio no encontrado' });

  const { fecha } = req.query;         
  if (!fecha) {
    return res.status(400).json({ error: 'Debe indicar la fecha: ?fecha=AAAA-MM-DD' });
  }

  const ocupados = dataReservas.obtenerTodas().filter(
    r => r.espacio === id && r.fecha === fecha && r.estado === 'activa'
  );

  res.json({ espacio: espacio.nombre, fecha: fecha, horariosOcupados: ocupados });
}

module.exports = { listar, obtener, crear, actualizar, eliminar, disponibilidad };
