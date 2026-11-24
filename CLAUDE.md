# Merge sin conflictos — Página de propuestas

Página web temporal de campaña de la lista **Merge sin conflictos**, candidata a la presidencia del
Centro de Estudiantes de la **Escuela Profesional de Ciencia de la Computación (EPCC), UNSA**.

Objetivo: que cualquier estudiante entienda en menos de un minuto qué propone la lista, y pueda
profundizar en cada propuesta si quiere.

Público: estudiantes de la EPCC, de primer a quinto año. La mayoría entrará **desde el celular**,
desde un enlace compartido en WhatsApp o Instagram.

---

## Reglas para Claude Code

- Todo el texto visible va en **español** (Perú). Tono cercano, claro y sin frases de mitin.
- **No inventes contenido**: propuestas, nombres, cargos, logros, cifras, redes o correos. Si falta
  un dato, usa un marcador visible `PENDIENTE: …` y agrégalo a la lista de "Datos pendientes".
- El contenido de las propuestas vive **solo** en `src/content/propuestas/*.md`. Ningún texto de
  propuesta va escrito a mano en los componentes.
- Sin backend, sin base de datos, sin panel de administración y sin buzón de sugerencias.
  Es un sitio **estático**.
- Mobile-first. Debe verse impecable a 360 px de ancho, sin scroll horizontal.
- Accesibilidad: HTML semántico, contraste AA, foco visible, áreas táctiles de 44 px como mínimo,
  y respeta `prefers-reduced-motion`.
- Construye **por fases** (ver abajo) y muéstrame el resultado de cada fase antes de seguir.

---

## Stack

- **Astro** (última versión estable), con **content collections** para las propuestas
  (`glob` loader y esquema con `zod` en `src/content.config.ts`).
- **Tailwind CSS** (versión actual, integrado con Vite).
- JavaScript mínimo: solo para el filtro por eje y el buscador de la página de propuestas.
- Despliegue: **GitHub Pages**, con GitHub Actions (`.github/workflows/deploy.yml`). Los enlaces internos
  usan `ruta()` de `src/lib/rutas.ts` para respetar la carpeta del repositorio.

## Skill de frontend: Impeccable

Usamos [Impeccable](https://github.com/pbakaus/impeccable) para la calidad del diseño.

1. Instalar (una opción):
   - En Claude Code: `/plugin marketplace add pbakaus/impeccable`, luego `/plugin` e instalar Impeccable.
   - O desde la raíz del proyecto: `npx impeccable install` (aceptar el hook de diseño y recargar Claude Code).
2. Ejecutar `/impeccable init` para crear `PRODUCT.md`. Usa la información de este archivo:
   público, objetivo, tono y colores.
3. Flujo sugerido:
   - Antes de construir: `/impeccable shape` para la estructura de la página de inicio.
   - Durante el diseño: `/impeccable typeset`, `/impeccable layout` y `/impeccable colorize`
     (respetando la paleta de abajo).
   - Revisión: `/impeccable critique` y `/impeccable audit`.
   - Antes de publicar: `/impeccable harden` (textos largos, desbordes, móvil) y `/impeccable polish`.

---

## Identidad visual

### Colores (obligatorios)

| Token | Hex | Uso |
|---|---|---|
| `verde` | `#78c203` | Color de marca y acento: fondos de bloques, botones, chips activos, detalles gráficos |
| `azul` | `#034da1` | Color principal: textos destacados, enlaces, fondos de secciones, navegación |
| `blanco` | `#ffffff` | Fondo base |
| `negro` | `#0b0f14` | Texto principal |

Se pueden derivar tonos (más claros u oscuros) de estos colores para fondos suaves, bordes y estados
hover, pero no agregues nuevos tonos de color.

**Contraste (importante):**
- El verde `#78c203` sobre blanco **no** tiene contraste suficiente para texto. Úsalo como fondo
  con **texto negro**, o para elementos gráficos, nunca para texto sobre blanco.
- El azul `#034da1` sí sirve para texto sobre blanco, y el texto blanco sobre azul también funciona.

### Tema

La página **siempre** se ve con tema oscuro (no sigue la preferencia del sistema). Los tokens de
`src/styles/global.css` ya son los oscuros; la imagen para compartir (`og-image`) es aparte.

### Concepto

El nombre viene de git: cada **eje** de propuestas es una rama que hace *merge* a `main` (la Escuela),
sin conflictos. Úsalo como idea visual (ramas, commits, merge), de forma sutil y legible, sin
convertir la página en una terminal. La tipografía se define con `/impeccable typeset`: un titular
con carácter y un texto muy legible. Evita fuentes genéricas.

---

## Mapa del sitio

Una página principal (`/`) con secciones y anclas, más una página por propuesta.

1. **Navegación**: Propuestas, Nosotros, Cómo votar y Contacto. Por debajo de 480 px no cabe Contacto y se
   oculta («Cómo votar» lleva al cierre). Pastillas sólidas, sin efecto de vidrio.
2. **Inicio (hero)**: nombre de la lista, "Natalie Lazo, candidata a presidenta" y
   "Jhair Torres, candidato a vicepresidente", una frase sobre qué se busca y un botón
   "Ver propuestas". Incluye la idea visual de ramas y merge.
3. **Propuestas**: agrupadas por eje (orden de `ejes.ts`, y dentro de cada eje por `orden`; ver
   `src/lib/orden.ts`, que también usan anterior/siguiente), con:
   - chips de filtro por eje ("Todas" y los ejes), en una fila que se desliza en móvil;
   - un buscador que ignore tildes y mayúsculas;
   - un subtítulo por eje (con su nodo sobre la rama) y, en cada tarjeta, título, resumen y "Ver propuesta";
   - un estado vacío amable cuando la búsqueda no encuentra nada.
4. **Quiénes somos**: la fórmula de dos personas, desde `src/content/equipo/`.
   - **Natalie Lazo (Presidenta)** va primero; ambos tienen el mismo tamaño de avatar y de texto: nombre, apodo "Nat", cargo, ciclo,
     su presentación, sus logros como lista (cuerpo del Markdown) y su motivación para postular.
   - **Jhair Torres (Vicepresidente)** va a continuación, con el mismo formato: presentación, lista y motivación.
   - Usa foto si existe (`foto`). Si no, muestra un avatar con las iniciales en los colores de la marca.
5. **Compromisos**: compromisos de gestión y cómo participar (`Compromisos.astro`).
6. **Marca así**: cómo marcar en la cédula (número 3 y logo).
7. **Contacto**: correo nlazop@unsa.edu.pe. Cierre con un llamado a votar.
8. **Footer**: nombre de la lista, EPCC y UNSA.

**Detalle de propuesta** (`/propuestas/[slug]`): eje, título, resumen (qué), «Por qué lo proponemos»
(cuerpo del Markdown), «Cómo lo vamos a lograr» (`pasos`) y `plazo`. Incluye enlaces a la propuesta
anterior y la siguiente, y un botón para volver a todas.

**404** (`src/pages/404.astro`): página para enlaces rotos, con enlaces a las propuestas y al inicio.

Agrega metadatos para compartir (Open Graph: título, descripción e imagen) en todas las páginas,
porque el enlace se va a compartir por WhatsApp.

---

## Contenido

### Ejes

| id | Nombre | Color del punto |
|---|---|---|
| `academico` | Académico | azul |
| `oportunidades` | Oportunidades y talento | verde |
| `integracion` | Integración y bienestar | azul claro (derivado) |
| `participacion` | Participación y comunicación | verde oscuro (derivado) |

### Esquema de una propuesta (`src/content/propuestas/*.md`)

```yaml
---
titulo: string            # obligatorio
eje: academico | oportunidades | integracion | participacion   # obligatorio
resumen: string           # obligatorio, máximo 140 caracteres (valídalo en el esquema)
orden: number             # obligatorio, define el orden en la lista
plazo: string             # opcional, con los semestres de la gestión, por ejemplo "2027-A"
pasos: string[]           # opcional, cómo se va a lograr
---
Por qué la proponemos: el problema o la necesidad que atiende (Markdown).
No repetir el resumen: el resumen dice qué; el cuerpo, por qué.
```

El nombre del archivo es el `slug` de la URL.

### Esquema de un integrante (`src/content/equipo/*.md`)

```yaml
---
nombre: string            # nombre completo
nombre_corto: string      # cómo se muestra en titulares, por ejemplo "Natalie Lazo"
apodo: string             # opcional, por ejemplo "Nat"
cargo: Presidenta | Vicepresidente
ciclo: string             # opcional, por ejemplo "Tercer año"
orden: number
foto: string              # opcional, ruta relativa al .md, p. ej. ../../assets/equipo/natalie-lazo.jpg
provisional: boolean      # opcional; true muestra "PENDIENTE: descripción definitiva"
---
Presentación en Markdown (párrafos y lista de logros).
```

La lista tiene solo dos cargos, Presidenta y Vicepresidente. No agregues más integrantes.

### Estructura de carpetas

```
merge-sin-conflictos/
├── CLAUDE.md
├── PRODUCT.md                    # lo crea /impeccable init
├── astro.config.mjs
├── public/
│   └── og-image.png              # imagen para compartir (1200×630)
└── src/
    ├── content.config.ts         # colecciones propuestas y equipo
    ├── content/
    │   ├── propuestas/           # 14 propuestas ya incluidas
    │   └── equipo/               # natalie-lazo.md y jhair-torres.md
    ├── assets/
    ├── components/
    │   ├── Nav.astro
    │   ├── Hero.astro
    │   ├── ListaPropuestas.astro  # filtro y buscador
    │   ├── TarjetaPropuesta.astro
    │   ├── QuienesSomos.astro
    │   ├── Contacto.astro
    │   └── Footer.astro
    ├── data/
    │   └── ejes.ts               # id, nombre y color de cada eje
    ├── layouts/
    │   └── Base.astro            # <head>, metadatos, fuentes
    ├── pages/
    │   ├── index.astro
    │   └── propuestas/[slug].astro
    └── styles/
        └── global.css            # tokens de color y Tailwind
```

---

## Fases de construcción

1. **Base**: crear el proyecto Astro y Tailwind, las colecciones con validación y `ejes.ts`.
   Comprueba que las 14 propuestas cargan sin errores.
2. **Impeccable**: instalar, ejecutar `/impeccable init` y `/impeccable shape` para el inicio.
3. **Estructura**: crear las páginas y los componentes con el contenido real, todavía con un estilo simple.
4. **Diseño**: aplicar la identidad visual (colores, tipografía, idea de ramas y merge).
5. **Interacción**: filtro por eje y buscador, enlaces entre propuestas y estados vacíos.
6. **Revisión**: `/impeccable critique`, `/impeccable audit` y `/impeccable harden`.
   Probar a 360, 768 y 1280 px.
7. **Publicación**: metadatos Open Graph, `og-image`, `npm run build` sin errores
   y despliegue en GitHub Pages.

## Decisiones de diseño (auditoría de noviembre de 2026)

- Fondo plano; el único bloque de color es el cierre azul. Sin degradados decorativos ni `backdrop-blur`.
- La lluvia de bits se mantiene, con un botón para pausarla (WCAG 2.2.2). No aparece si el sistema pide
  reducir movimiento.
- Los nombres del inicio son enlaces a cada perfil (`#perfil-<id>`).

## Datos pendientes (no inventar)

- [x] Descripción definitiva de Jhair
- [x] Año de Jhair (tercer año)
- [x] Foto de Natalie (`src/assets/equipo/natalie-lazo.png`)
- [x] Foto de Jhair (`src/assets/equipo/jhair-torres.jpg`)
- [x] Plazos y pasos de cada propuesta (borrador redactado; pendiente de validación)
- [x] Visión y compromisos (borrador redactado; pendiente de validación)
- [x] Ambos están en tercer año
- [x] La cédula muestra el número 3 y el logo
- [x] Gestión: de 2027-A a 2028-A. El Centro no maneja fondos; lo que depende de la Dirección se
  redacta como gestión, no como promesa
- [x] Contacto: solo correo, nlazop@unsa.edu.pe (sin redes sociales)
- [x] Logo oficial (`src/assets/campana/logo.png`)
- [x] Imagen para compartir (`public/og-image.png`, se regenera con `node scripts/og-image/generar.mjs`)
- [x] Eslogan oficial: «Unimos ideas, construimos cambios.» (en el cierre y el footer)
- [ ] Fecha de la elección (va a cambiar; por ahora se muestra «Fecha por confirmar» en Contacto)
- [ ] Fecha del debate (será virtual; por ahora «Fecha por confirmar» en Contacto)
- [x] Repositorio en GitHub: Natslpx/merge-sin-conflictos, con Pages activado (https://natslpx.github.io/merge-sin-conflictos/)
