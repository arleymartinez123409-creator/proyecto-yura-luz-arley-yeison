# Etapa 03 — Diseño del Proyecto
## Caso 2: Reserva de Espacios Académicos

---

## 1. Modelo de Datos
Descripción de cada entidad: qué campos tiene, tipo de dato y si es obligatorio.

### Entidad: Espacio
- id → número, autogenerado, obligatorio
- nombre → texto, obligatorio
- ubicación → texto, obligatorio
- capacidad → número, obligatorio

### Entidad: Reserva
- id → número, autogenerado, obligatorio
- espacio → número (referencia al id de Espacio), obligatorio
- solicitante → texto, obligatorio
- fecha → texto (formato AAAA-MM-DD), obligatorio
- horaInicio → texto (formato HH:MM), obligatorio
- horaFin → texto (formato HH:MM), obligatorio
- estado → texto: "confirmada" o "cancelada", por defecto "confirmada", obligatorio

---

## 2. Rutas de la API
Endpoints que va a tener la aplicación: método, dirección y qué hace.

### Espacios
- GET /espacios → Lista todos los espacios
- GET /espacios/:id → Consulta un espacio por su ID
- POST /espacios → Crea un espacio nuevo

### Reservas
- GET /reservas → Lista todas las reservas; filtra con ?espacio=X o ?solicitante=Y
- GET /reservas/:id → Consulta una reserva por su ID
- GET /reservas/disponibilidad → Verifica si un espacio está libre: ?espacio=X&fecha=Y
- POST /reservas → Crea una reserva nueva (valida que no se solape con otra)
- PUT /reservas/:id → Edita una reserva existente (revalida solape)
- DELETE /reservas/:id → Cancela/elimina una reserva

---

## 3. Estructura de Carpetas
Cómo se organiza el proyecto:

/proyecto
├── /src
│   ├── /data
│   │   ├── espacios.js    → Datos y funciones de lectura/escritura de espacios
│   │   └── reservas.js      → Datos y funciones de lectura/escritura de reservas
│   ├── /controllers
│   │   ├── espaciosController.js → Lógica de cada acción de espacios
│   │   └── reservasController.js  → Lógica de cada acción de reservas
│   ├── /routes
│   │   ├── espacios.js      → Conexión rutas → controlador (espacios)
│   │   └── reservas.js      → Conexión rutas → controlador (reservas)
│   └── index.js             → Archivo principal: arranca el servidor
├── package.json
├── requisitos.md
├── equipo.md
├── diseño.md
└── README.md

---

