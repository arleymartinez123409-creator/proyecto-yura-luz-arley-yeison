## Actores
- Usuario del sistema: persona que consulta disponibilidad, crea y gestiona reservas

## Requisitos Funcionales (RF)
RF1. El sistema debe permitir registrar nuevos espacios con nombre, ubicación y capacidad.
RF2. El sistema debe permitir listar todos los espacios registrados.
RF3. El sistema debe permitir crear reservas indicando espacio, solicitante, fecha, hora de inicio y fin.
RF4. El sistema debe permitir listar todas las reservas.
RF5. El sistema debe consultar reservas por identificador.
RF6. El sistema debe permitir editar datos de una reserva existente.
RF7. El sistema debe permitir cancelar/eliminar una reserva.
RF8. El sistema debe **impedir** crear una reserva si ya existe otra en el mismo espacio, fecha y horario solapado.
RF9. El sistema debe permitir consultar la disponibilidad de un espacio en una fecha dada.
RF10. El sistema debe permitir filtrar reservas por espacio o por solicitante.

## Requisitos No Funcionales (RNF)
RNF1. La API debe responder siempre en formato JSON.
RNF2. Los campos obligatorios (espacio, solicitante, fecha, hora inicio, hora fin) no pueden quedar vacíos.
RNF3. La aplicación debe funcionar desde cualquier navegador moderno.
RNF4. La validación de solapes debe hacerse antes de guardar cualquier reserva.
RNF5. El código debe alojarse en GitHub con mensajes de commit claros.

