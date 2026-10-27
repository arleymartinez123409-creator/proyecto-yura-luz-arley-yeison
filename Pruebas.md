# Pruebas del Sistema de Reserva de Espacios

## Tabla de pruebas

| Endpoint | Caso probado | Datos enviados | Resultado esperado | Resultado obtenido | ¿Pasó? |
|-----------|-------------|----------------|-------------------|-------------------|---------|
| POST /reservas | Camino feliz | Espacio=Aula 101, Fecha=10/11/2026, Hora=08:00 | Reserva creada, código 201 | Reserva creada correctamente | ✅ |
| POST /reservas | Datos incompletos | Falta fecha | Error 400 | Error 400 mostrado | ✅ |
| POST /reservas | Espacio ocupado | Aula 101 ya reservada a las 08:00 | Error indicando conflicto | Error mostrado | ✅ |
| GET /reservas/1 | Camino feliz | ID=1 | Mostrar reserva | Reserva encontrada | ✅ |
| GET /reservas/999 | ID inexistente | ID=999 | Error 404 | Error 404 mostrado | ✅ |
| PUT /reservas/1 | Camino feliz | Cambio de horario | Reserva actualizada | Actualización correcta | ✅ |
| PUT /reservas/999 | ID inexistente | ID=999 | Error 404 | Error 404 mostrado | ✅ |
| DELETE /reservas/1 | Camino feliz | ID=1 | Reserva eliminada | Eliminación correcta | ✅ |
| DELETE /reservas/999 | ID inexistente | ID=999 | Error 404 | Error 404 mostrado | ✅ |

## Participantes de las pruebas

- Desarrollador: Nombre del integrante 1
- Probador: Nombre del integrante 2

## Conclusión

Todas las pruebas fueron ejecutadas satisfactoriamente y los endpoints responden según los requisitos establecidos.
