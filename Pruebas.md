# Pruebas - Sistema de Reserva de Espacios Académicos

## Objetivo

Verificar el correcto funcionamiento de todos los endpoints de la API de reservas.

---

## Tabla de pruebas

| Endpoint | Caso | Entrada | Resultado esperado | Resultado obtenido | ¿Pasó? |
|-----------|-----------|-----------|-----------|-----------|-----------|
| GET /reservas | Camino feliz | Sin parámetros | Lista de reservas | Lista obtenida correctamente | ✅ |
| GET /reservas/1 | Camino feliz | ID existente | Reserva encontrada | Reserva mostrada correctamente | ✅ |
| GET /reservas/999 | ID inexistente | ID = 999 | Error 404 | "Reserva no encontrada" | ✅ |
| POST /reservas | Camino feliz | Espacio:Aula101 Fecha:2026-10-30 Hora:08:00-10:00 | Reserva creada | Código 201 y reserva creada | ✅ |
| POST /reservas | Espacio ocupado | Mismo espacio y horario | Error 400 | "El espacio ya está reservado en ese horario" | ✅ |
| PUT /reservas/1 | Camino feliz | Cambio de horario | Reserva actualizada | Actualización correcta | ✅ |
| PUT /reservas/999 | ID inexistente | ID = 999 | Error 404 | "Reserva no encontrada" | ✅ |
| DELETE /reservas/1 | Camino feliz | ID = 1 | Reserva eliminada | Eliminación correcta | ✅ |
| DELETE /reservas/999 | ID inexistente | ID = 999 | Error 404 | "Reserva no encontrada" | ✅ |

---

## Validación de reglas del negocio

### Reserva duplicada

Se intentó registrar una reserva para el mismo espacio, fecha y horario.

Resultado esperado:

- Rechazar reserva.
- Retornar código 400.

Resultado obtenido:

- El sistema respondió:
  "El espacio ya está reservado en ese horario".

Estado:

✅ Prueba exitosa.

---

## Participantes

| Rol | Nombre |
|-------|-------|
| Desarrollador | Arley Yeison |
| Probador | Luz Aristizabal |

---

## Conclusiones

Todas las pruebas realizadas sobre los endpoints de la aplicación fueron satisfactorias.

Se verificó:

- Creación de reservas.
- Consulta de reservas.
- Actualización de reservas.
- Eliminación de reservas.
- Manejo de errores 404.
- Validación de conflicto de horarios.

El sistema cumple con los requisitos definidos para el Caso 2: Reserva de Espacios Académicos.
