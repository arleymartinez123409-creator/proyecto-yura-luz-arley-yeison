let espacios = [
  { id: 1, nombre: 'Sala de estudio A', ubicacion: 'Biblioteca piso 2', capacidad: 8 },
  { id: 2, nombre: 'Sala de estudio B', ubicacion: 'Biblioteca piso 3', capacidad: 6 },
  { id: 3, nombre: 'Laboratorio de redes', ubicacion: 'Bloque C, salon 201', capacidad: 20 }
];
let siguienteId = 4;

function obtenerTodas() {
  return espacios;
}

function obtenerPorId(id) {
  return espacios.find(e => e.id === id);
}

function crear(datos) {
  const nuevo = { id: siguienteId++, ...datos };
  espacios.push(nuevo);
  return nuevo;
}

module.exports = { obtenerTodas, obtenerPorId, crear };
