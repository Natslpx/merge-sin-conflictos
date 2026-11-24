# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Estudiantes de la Escuela Profesional de Ciencia de la Computación (EPCC) de la UNSA, de primer a
quinto año. La mayoría llega **desde el celular**, tocando un enlace compartido en un grupo de
WhatsApp o en Instagram, en un momento suelto (entre clases, en el bus). Su tarea: entender rápido
qué propone la lista y decidir su voto; algunos quieren profundizar en una propuesta concreta.

Son estudiantes de computación: reconocen git (ramas, commits, merge) y detectan al instante lo
genérico o lo exagerado.

## Product Purpose

Página web temporal de campaña de la lista **Merge sin conflictos**, candidata a la presidencia del
Centro de Estudiantes de la EPCC. Sirve hasta la elección.

Éxito: que cualquier estudiante entienda **en menos de un minuto** qué propone la lista, pueda
abrir el detalle de cada propuesta si quiere, y termine con un motivo claro para votar por ella.

## Positioning

Compite contra otra(s) lista(s). Lo que el estudiante debe recordar:

1. **Propuestas concretas y realizables**: diez propuestas aterrizadas a la vida real de la Escuela
   (biblioteca, mesa de tenis, repositorio de exámenes, talleres de inicio de semestre), no promesas
   grandes.
2. **Enfoque en oportunidades**: programación competitiva, difusión de competencias y hackathones,
   visibilización del talento estudiantil.

El nombre viene de git: cada eje de propuestas es una rama que hace merge a `main` (la Escuela),
sin conflictos.

## Operating Context

- El enlace se comparte por WhatsApp e Instagram: la vista previa (Open Graph) es la primera
  impresión.
- Lectura rápida en móvil, a menudo con una mano y con poco tiempo.
- La lista tiene dos cargos: **Natalie Lazo** (Presidenta, "Nat", 6.º ciclo) y **Jhair Torres**
  (Vicepresidente). No hay más integrantes.
- Diez propuestas en cuatro ejes: Académico, Oportunidades y talento, Integración y bienestar,
  Participación y comunicación.

## Capabilities and Constraints

- Sitio **estático** en Astro + Tailwind, desplegado en Vercel o Netlify. Sin backend, base de
  datos, panel de administración ni buzón de sugerencias.
- El texto de las propuestas vive solo en `src/content/propuestas/*.md`; el equipo en
  `src/content/equipo/*.md`. Los componentes no llevan texto de propuestas escrito a mano.
- JavaScript mínimo: solo filtro por eje y buscador (que ignora tildes y mayúsculas).
- Página principal con secciones (inicio, propuestas, quiénes somos, contacto) y una página por
  propuesta con enlaces a la anterior y la siguiente.
- Todo el texto visible en español de Perú.
- **Abierto (no inventar):** fecha de la elección; redes y correo de la lista; descripción
  definitiva y ciclo de Jhair; fotos; plazos y pasos de las propuestas; logo; URL definitiva del
  sitio. Mientras falten, se muestran como `PENDIENTE: …`.

## Brand Commitments

- Nombre: **Merge sin conflictos**. Es la **lista 3** (dato confirmado por la candidata).
- Eslogan propuesto (en uso, a confirmar): «Todas las ramas llevan a la Escuela.»
- Voz: cercana, clara, sin frases de mitin.
- Colores obligatorios (definidos por la lista): verde `#78c203`, azul `#034da1`, blanco `#ffffff`,
  negro `#0b0f14`. Solo se permiten tonos derivados de estos. El verde nunca va como texto sobre
  blanco.
- Concepto git (ramas, commits, merge) usado de forma sutil y legible, sin convertir la página en
  una terminal.

## Evidence on Hand

- 10 propuestas reales con título, eje, resumen y texto: `src/content/propuestas/`.
- Presentación y logros reales de Natalie: 2 años en el Centro de Estudiantes, monitora de la
  Defensoría Universitaria, organización de 3 Semanas de la Computación, voluntaria de la Cruz Roja
  desde 2023, finalista del Data Fest BCP 2026 como líder de equipo: `src/content/equipo/natalie-lazo.md`.
- Descripción **provisional** de Jhair: `src/content/equipo/jhair-torres.md`.
- No hay fotos, logo, testimonios, cifras ni fecha de elección. No se inventan.

## Product Principles

1. **Un minuto basta.** Lo esencial (quiénes, qué proponen, por qué votar) se entiende sin
   scrollear mucho ni abrir nada.
2. **Concreto antes que épico.** Cada propuesta se explica por lo que cambia en la Escuela, no
   con adjetivos.
3. **Nada inventado.** Si un dato no existe, se marca como pendiente; la credibilidad frente a
   estudiantes de computación es el activo principal.
4. **Primero el celular.** Cada decisión se valida a 360 px y en una vista previa de WhatsApp.

## Accessibility & Inclusion

- Contraste WCAG AA, foco visible, áreas táctiles de al menos 44 px.
- HTML semántico; respeta `prefers-reduced-motion`.
- Sin scroll horizontal a 360 px.
