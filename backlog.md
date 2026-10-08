# Backlog del Proyecto — Caso 2: Reserva de Espacios

## Formato
Como [quién], quiero [qué], para [para qué]
Criterio de aceptación: [condición exacta para dar por terminada]

---

## HU-01 — Registrar un espacio
Como usuario, quiero registrar un espacio con nombre, ubicación y capacidad, para que otros puedan reservarlo.
 Criterio de aceptación: Al enviar `POST /espacios` con los datos obligatorios, la API responde código `201` y devuelve el espacio creado con su ID.

## HU-02 — Listar espacios
Como usuario, quiero ver todos los espacios registrados, para saber cuáles puedo reservar.
 Criterio de aceptación: Al llamar `GET /espacios` obtengo un arreglo con todos los espacios, cada uno con: id, nombre, ubicación, capacidad.

## HU-03 — Crear una reserva
Como usuario, quiero crear una reserva indicando espacio, solicitante, fecha, hora de inicio y fin, para apartar ese espacio.
Criterio de aceptación:
- Si faltan datos obligatorios → responde `400` con mensaje claro
- Si el espacio ya está ocupado en ese horario → responde error y no guarda
- Si todo está bien → guarda y responde `201` con la reserva

## HU-04 — Ver todas las reservas
Como usuario, quiero consultar el listado completo de reservas, para ver la programación general.
Criterio de aceptación: `GET /reservas` devuelve un arreglo con todas las reservas existentes.

## HU-05 — Consultar reserva por ID
Como usuario, quiero buscar una reserva específica con su número de identificación, para ver sus detalles.
Criterio de aceptación:
- Si existe → devuelve los datos con código `200`
- Si no existe → devuelve `404` con mensaje "Reserva no encontrada"

## HU-06 — Editar una reserva
Como usuario, quiero modificar los datos o el horario de una reserva ya creada, para corregir cambios.
Criterio de aceptación:
- Al enviar `PUT /reservas/:id` se actualizan los datos
- Se vuelve a revisar que el nuevo horario no se solape con otra
- Si no existe → `404`

## HU-07 — Cancelar una reserva
Como usuario, quiero eliminar o cancelar una reserva, para liberar el espacio.
Criterio de aceptación:
- `DELETE /reservas/:id` borra el registro
- Responde con código `204` (sin contenido)
- Si no existe → `404`

## HU-08 — Consultar disponibilidad
Como usuario, quiero saber si un espacio está libre en una fecha determinada, antes de intentar reservarlo.
Criterio de aceptación: `GET /reservas/disponibilidad?espacio=X&fecha=Y` devuelve qué horas están ocupadas y cuáles libres.

## HU-09 — Filtrar reservas
Como usuario, quiero ver solo las reservas de un espacio específico o las que yo hice, para encontrar información rápido.
Criterio de aceptación:
- `GET /reservas?espacio=3` → solo reservas del espacio 3
- `GET /reservas?solicitante=Ana` → solo reservas hechas por Ana
- Si no hay coincidencias → devuelve arreglo vacío `[]`
