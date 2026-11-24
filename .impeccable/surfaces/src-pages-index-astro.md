---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: ["src/pages/propuestas/[slug].astro"]
---

# Inicio y detalle de propuesta

## Alcance y modo

Página principal (`/`) con secciones ancladas y detalle de propuesta (`/propuestas/[slug]`). Modo: **Persuade**. Construcción code-led (sin generación de imágenes); el boceto elegido es `.impeccable/decision/grafo.html`.

## Audiencia, tarea y prueba

- Estudiante de la EPCC en el celular, llega por WhatsApp o Instagram, con poco tiempo.
- Acción principal: «Ver propuestas». Secundaria: compartir por WhatsApp (enlace `wa.me`, la página o una propuesta).
- Prueba: las 10 propuestas reales como cambios concretos. Sin cifras, testimonios ni fechas inventadas.
- Modo oscuro automático (`prefers-color-scheme`).

## Recorrido

Nav → inicio (merge) → propuestas (chips por eje, buscador sin tildes/mayúsculas, lista de commits, estado vacío) → quiénes somos (Natalie primero y con más espacio, luego Jhair; avatar de iniciales sin foto) → contacto y cierre (PENDIENTE redes, correo y fecha; compartir) → footer (Merge sin conflictos · EPCC · UNSA).

Detalle: la rama del eje sigue a la izquierda; eje, título, resumen, cuerpo; `pasos` y `plazo` solo si existen; anterior y siguiente como commits vecinos; volver a todas; compartir esa propuesta.

## Direction contract

THESIS: La página es el historial de git de la campaña: cuatro ramas de eje bajan por la izquierda de toda la página y cada propuesta es un commit en su rama; todo hace merge en un nodo arriba, `main`, la Escuela. Rechaza el formato de campaña de titular más grilla de tarjetas iguales.

OWN-WORLD: Fondo blanco (negro profundo en modo oscuro), texto negro. Ramas gruesas de trazo redondeado con curvas suaves: azul (académico), verde (oportunidades), azul claro derivado (integración), verde oscuro derivado (participación); `main` en negro. Nodos de commit como anillos con relleno de fondo; nodo de merge sólido grande. Botón principal en píldora verde con texto negro. Etiquetas pequeñas en mayúsculas espaciadas en azul. Tipografía sans limpia con carácter; nada de monoespaciada como estética, nada de terminal.

STORY: El visitante entiende que es la lista Merge sin conflictos con Natalie Lazo y Jhair Torres, ve que cada eje es una rama con propuestas concretas que confluyen en la Escuela, filtra o busca la que le importa, abre su detalle, conoce a la fórmula y comparte el enlace o se va con un motivo para votar.

FIRST VIEWPORT: Nodo de merge sólido arriba a la izquierda dentro de una columna de grafo (≈56 px en móvil, más ancha en escritorio). A su derecha: etiqueta «main · Centro de Estudiantes EPCC», el nombre de la lista como titular grande en dos o tres líneas, la fórmula Natalie Lazo / Jhair Torres y la píldora verde «Ver propuestas» dentro del primer viewport de 360×740. Del nodo nacen las cuatro ramas, que continúan sin corte como columna izquierda de la lista de propuestas. Interacción distintiva: elegir un eje resalta su rama y apaga las demás.

FORM: Grafo de commits; posición 1 de la lista propia ordenada (elegida como IMPECCABLE’S PICK en la tercera mano). seed:f50f1427b5348bb5

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Decisiones abiertas

- Tipografía: se define con `/impeccable typeset` en la fase 4.
- Imagen Open Graph, logo, fotos, redes, correo, fecha de elección, URL del sitio: PENDIENTE (no inventar).
- Fases del proyecto (CLAUDE.md): la fase 3 construye estructura con estilo simple; la dirección se aplica completa en la fase 4.
