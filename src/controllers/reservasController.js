const dataReservas = require('../data/reservas');
const dataEspacios = require('../data/espacios');


function validarReserva(datos, idExcluido) {
  const { espacio, solicitante, fecha, horaInicio, horaFin } = datos;

  if (espacio === undefined || !solicitante || !fecha || !horaInicio || !horaFin) {
    return 'espacio, solicitante, fecha, horaInicio y horaFin son obligatorios';
  }

  const espacioId = Number(espacio);
  if (!dataEspacios.obtenerPorId(espacioId)) {
    return 'El espacio indicado no existe';
  }

  const formatoFecha = /^\d{4}-\d{2}-\d{2}$/;
  if (!formatoFecha.test(fecha)) {
    return 'La fecha debe tener formato AAAA-MM-DD (ejemplo: 2026-11-05)';
  }

  
  const formatoHora = /^([01]\d|2[0-3]):[0-5]\d$/;
  if (!formatoHora.test(horaInicio) || !formatoHora.test(horaFin)) {
    return 'Las horas deben tener formato HH:mm (ejemplo: 14:30)';
  }

  if (horaInicio >= horaFin) {
    return 'horaInicio debe ser menor que horaFin';
  }


  const hayCruce = dataReservas.obtenerTodas().some(r =>
    r.id !== idExcluido &&        
    r.espacio === espacioId &&    
    r.estado === 'activa' &&      
    r.fecha === fecha &&          
    horaInicio < r.horaFin &&
    horaFin > r.horaInicio
  );
  if (hayCruce) {
    return 'El espacio ya está reservado en ese horario';
  }

  return null; 
}


function listar(req, res) {
  let resultado = dataReservas.obtenerTodas();

  const { espacio, solicitante, fecha, estado } = req.query;
  if (espacio)     resultado = resultado.filter(r => r.espacio === Number(espacio));
  if (solicitante) resultado = resultado.filter(r => r.solicitante === solicitante);
  if (fecha)       resultado = resultado.filter(r => r.fecha === fecha);
  if (estado)      resultado = resultado.filter(r => r.estado === estado);

  res.json(resultado);
}


function obtener(req, res) {
  const id = parseInt(req.params.id);
  const reserva = dataReservas.obtenerPorId(id);
  if (!reserva) return res.status(404).json({ error: 'Reserva no encontrada' });
  res.json(reserva);
}

function crear(req, res) {
  const error = validarReserva(req.body, null);
  if (error) return res.status(400).json({ error });

  const nueva = dataReservas.crear({
    espacio: Number(req.body.espacio),
    solicitante: req.body.solicitante,
    fecha: req.body.fecha,
    horaInicio: req.body.horaInicio,
    horaFin: req.body.horaFin,
    estado: 'activa'                  
  });
  res.status(201).json(nueva);
}


function actualizar(req, res) {
  const id = parseInt(req.params.id);
  const reserva = dataReservas.obtenerPorId(id);
  if (!reserva) return res.status(404).json({ error: 'Reserva no encontrada' });

  const combinados = { ...reserva, ...req.body };
  const error = validarReserva(combinados, id);
  if (error) return res.status(400).json({ error });

  const actualizada = dataReservas.actualizar(id, {
    espacio: Number(combinados.espacio),
    solicitante: combinados.solicitante,
    fecha: combinados.fecha,
    horaInicio: combinados.horaInicio,
    horaFin: combinados.horaFin
  });
  res.json(actualizada);
}

function eliminar(req, res) {
  const id = parseInt(req.params.id);
  const cancelada = dataReservas.cancelar(id);
  if (!cancelada) return res.status(404).json({ error: 'Reserva no encontrada' });
  res.json({ mensaje: 'Reserva cancelada', reserva: cancelada });
}

module.exports = { listar, obtener, crear, actualizar, eliminar };
