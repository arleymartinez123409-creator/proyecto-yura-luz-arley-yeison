let tareas = [];
let siguienteId = 1;

module.exports = {
  obtenerTodas: () => tareas,
  obtenerPorId: (id) => tareas.find(t => t.id === id),
  crear: (datos) => {
    const nueva = { id: siguienteId++, ...datos };
    tareas.push(nueva);
    return nueva;
  },
  actualizar: (id, datos) => {
    const tarea = tareas.find(t => t.id === id);
    if (tarea) Object.assign(tarea, datos);
    return tarea;
  },
  eliminar: (id) => {
    const index = tareas.findIndex(t => t.id === id);
    if (index === -1) return false;
    tareas.splice(index, 1);
    return true;
  }
};
