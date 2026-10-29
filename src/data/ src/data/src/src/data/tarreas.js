let tareas = [];
let siguienteId = 1;

function obtenerTodas() {
  return tareas;
}

function obtenerPorId(id) {
  return tareas.find(t => t.id === id);
}

function crear(datos) {
  const nuevaTarea = { id: siguienteId++, ...datos };
  tareas.push(nuevaTarea);
  return nuevaTarea;
}

function actualizar(id, datos) {
  const tarea = obtenerPorId(id);
  if (!tarea) return null;
  Object.assign(tarea, datos);
  return tarea;
}

function eliminar(id) {
  const index = tareas.findIndex(t => t.id === id);
  if (index === -1) return false;
  tareas.splice(index, 1);
  return true;
}

module.exports = { obtenerTodas, obtenerPorId, crear, actualizar, eliminar };
