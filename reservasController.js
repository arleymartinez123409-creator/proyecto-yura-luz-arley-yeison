const data = require('../data/reservasData');

function hayCruce(reservaExistente, nueva) {
  return reservaExistente.espacio === nueva.espacio &&
         reservaExistente.fecha === nueva.fecha &&
         nueva.horaInicio < reservaExistente.horaFin &&
         nueva.horaFin > reservaExistente.horaInicio;
}

module.exports = {
  listar: (req, res) => res.json(data.obtenerTodas()),
  crear: (req, res) => {
    const nueva = req.body;
    const cruce = data.obtenerTodas().some(r => hayCruce(r, nueva));
    
    if (cruce) {
      return res.status(400).json({ error: 'El espacio ya está reservado en ese horario' });
    }
    
    const creada = data.crear(nueva);
    res.status(201).json(creada);
  }
};
