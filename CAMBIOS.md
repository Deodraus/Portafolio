# Registro de Cambios del Portafolio (CAMBIOS.md)

Este archivo contiene el historial cronológico e inmutable de todos los cambios, adiciones y decisiones tomadas en el desarrollo del portafolio personal de Jerónimo Deossa Abad (Deodraus).

---

## [2026-10-04] - Inicialización y Análisis del Proyecto

### 1. Creación del Archivo de Registro
- **Acción:** Creación de `CAMBIOS.md` para dar cumplimiento estricto al requerimiento del usuario de auditar y registrar cada cambio sin eliminar historial previo.

### 2. Análisis de Requisitos y Contenidos
- **Archivos Analizados:**
  - `DATOS.md`: Perfil profesional, biografía, educación técnica, habilidades técnicas y blandas, datos de contacto, hobbies, proyectos y fotos (`photojeronimo.jpeg`, `photodeodraus.jpeg`).
  - `ROL_IA.md`: Directrices de UX/UI, secciones solicitadas (Hero, Sobre mí, Educación y experiencia, Habilidades técnicas y blandas, Contacto, Hobbies orientados al valor profesional, Proyectos), directrices de no tomar decisiones sin consultar y preparar el proyecto para despliegue en Vercel/Netlify con su respectivo `README.md`.
  - Proyectos existentes explorados para contexto:
    - `VitLine`: Sistema web para aerolínea en PHP/MariaDB con pasarela de reservas, gestión de pasajeros, facturación y códigos QR.
    - `MiAsistente`: Asistente virtual en Python impulsado por Google Gemini API con ejecución de herramientas locales, mascota de escritorio con sprites interactivos y calculadora matemática/gráfica de funciones.
    - `proyectMDIA`: Plataforma web moderna de difusión para la Media Técnica en Desarrollo de Software de Medellín.

### 3. Diagnóstico del Entorno Local
- Se detectó que el sistema cuenta con Python 3.14.7 y Git 2.55.0, pero **Node.js / npm no están instalados**.
- **Propuesta de Arquitectura:** Utilizar **HTML5 Semántico + CSS3 Moderno (Glassmorphism, animaciones fluidas, diseño responsive mobile-first) + JavaScript Vanilla Modular**, lo que permite:
  - Ejecución inmediata sin necesidad de instalar Node.js ni compilar dependencias.
  - Compatibilidad total y despliegue directo en **Vercel** y **Netlify** (con archivos de configuración incluidos).
  - Máximo rendimiento (100 en Lighthouse), ligereza y experiencia interactiva avanzada.

### 4. Próximos Pasos Sujetos a Aprobación del Usuario
- Presentar el plan detallado y solicitar confirmación sobre la arquitectura técnica y preferencias de diseño (incluyendo conmutador de perfil dual Desarrollador / Deodraus y enlaces a redes).

---

## [2026-10-04] - Verificación de Entorno (Node.js 24 + Next.js 16) y Propuesta de Arquitectura

### 1. Verificación del Entorno de Ejecución
- **Acción:** Confirmación de disponibilidad de Node.js (`v24.21.0`) y npm (`12.2.0`).
- **Detección:** El proyecto cuenta con una base configurada con **Next.js 16.3.8**, **React 19.2.8**, **Tailwind CSS v4** y **TypeScript**.

### 2. Análisis Detallado de Proyectos Existentes
- **VitLine:** Plataforma web para aerolínea con arquitectura PHP y MariaDB, gestión de usuarios/administración, emisión de pasajes, pasarela de pagos simulada (VitCard) y generación de carnets/boletos con código QR.
- **MiAsistente:** Aplicación de escritorio en Python que integra IA conversacional mediante Gemini API, mascota virtual animada e interactiva con spritesheet de Miku, y una calculadora gráfica y simbólica de funciones.
- **proyectMDIA:** Portal web interactivo para la promoción de la Media Técnica en Desarrollo de Software de Medellín.
- **Semillero Quipux:** Experiencia formativa en metodologías ágiles, buenas prácticas de desarrollo y control de versiones con GitHub.

### 3. Plan de Diseño y Estructura Propuesta
- **Identidad Dual (Hero y navegación interactiva):** Conmutador o presentación armónica que resalte tanto la faceta de **Desarrollador de Software** (Jerónimo Deossa Abad) como la de **Creador de Contenido & Streamer** (Deodraus), integrando las imágenes `photojeronimo.jpeg` y `photodeodraus.jpeg`.
- **Estructura de Secciones según ROL_IA.md:**
  1. **Navbar:** Navegación fluida con enlaces a secciones, botón de contacto y alternancia de temas/perspectiva.
  2. **Hero:** Presentación de impacto, títulos dinámicos, propuesta de valor, badges técnicos y llamadas a la acción (CV / Contacto / Ver Proyectos).
  3. **Sobre Mí:** Historia, visión y cómo convergen el código, la creatividad y la comunicación.
  4. **Experiencia y Educación:** Formación como Técnico Laboral en Asistente en Desarrollo de Software, enfoque práctico y proyectos clave.
  5. **Proyectos Destacados (Showcase):** Fichas detalladas con métricas, tecnologías, descripción del problema resuelto y enlaces demostrativos (VitLine, MiAsistente, ProyectMDIA, Semillero Quipux).
  6. **Habilidades Técnicas y Blandas:** Visualización moderna por categorías (Frontend, Backend, Bases de Datos, Creación Digital/3D, Metodologías Ágiles, Habilidades Blandas).
  7. **Hobbies que Aportan al Perfil Profesional:** Enfoque en cómo la música, el arte, el streaming y la creación de contenido potencian la disciplina, UX y comunicación asertiva.
  8. **Contacto:** Formulario estético, enlaces directos a WhatsApp, correo, ubicación (Medellín, Colombia) y redes sociales.
  9. **Footer:** Derechos de autor, créditos y enlaces rápidos.
- **Optimizaciones Técnicas:**
  - Copia de imágenes de `img/` hacia `public/img/` para renderizado optimizado con `next/image`.
  - Preparación para despliegue directo en **Vercel** o **Netlify**.
  - Documentación técnica exhaustiva en `README.md`.

---

## [2026-10-04] - Configuración de Dependencias y Preparación de Recursos Visuales

### 1. Instalación de Iconografía
- **Acción:** Instalación de la librería `lucide-react` para soporte de iconos SVG optimizados y accesibles para React 19 / Next.js 16.

### 2. Organización de Imágenes Públicas
- **Acción:** Creación de la carpeta `public/img/` y copia de los archivos visuales originales:
  - `photojeronimo.jpeg`: Fotografía real y profesional de Jerónimo Deossa Abad.
  - `photodeodraus.jpeg`: Imagen del avatar/personaje artístico Deodraus.
- **Propósito:** Permitir su consumo directo a través del componente optimizado `<Image />` de Next.js sin alterar las carpetas de origen.

---

## [2026-10-04] - Creación del Módulo de Datos Centralizado (`data/portfolioData.ts`)

- **Acción:** Creación del archivo `data/portfolioData.ts` con tipado estricto en TypeScript.
- **Detalle de contenido incorporado:**
  - Información personal y profesional de **Jerónimo Deossa Abad** y **Deodraus**.
  - Enlaces de contacto verificados (WhatsApp directo, Correo, Ubicación Medellín, Colombia).
  - Información de educación técnica (`Técnico Laboral por Competencias como Asistente en Desarrollo de Software`).
  - Fichas técnicas completas de los 4 proyectos (`VitLine`, `MiAsistente & Calculadora`, `ProyectMDIA`, `Semillero Quipux`) con detalles de arquitectura, tecnologías y problemas resueltos.
  - Habilidades técnicas desglosadas por áreas (Frontend, Backend, Bases de datos, Metodologías ágiles, Creación digital 3D/anime/video).
  - Habilidades blandas con descripciones de valor profesional.
  - Relación explícita de los 8 hobbies y cómo cada uno aporta directamente a la excelencia profesional (disciplina, UX, comunicación asertiva, resolución de problemas).

---

## [2026-10-04] - Implementación Completa de Componentes, Optimización y Documentación

### 1. Construcción de Componentes Modulares
- **`components/Navbar.tsx`:** Barra superior flotante con efecto glassmorphism, responsive con menú colapsable para teléfonos móviles, navegación a secciones y conmutador reactivo entre el perfil de desarrollador (*Jerónimo*) y creador (*Deodraus*).
- **`components/Hero.tsx`:** Sección de presentación con ambientación gradiente dinámica, badges de estado y ubicación, presentación interactiva de fotografías (`photojeronimo.jpeg` y `photodeodraus.jpeg`), llamada a la acción y métricas.
- **`components/AboutMe.tsx`:** Integración de biografía, visión profesional y los tres pilares de valor: rigor técnico, comunicación asertiva y diseño creativo/multimedia.
- **`components/ExperienceEducation.tsx`:** Destacado del título de *Técnico Laboral por Competencias como Asistente en Desarrollo de Software* en Medellín y módulos aprobados de Frontend II, Backend II, Bases de Datos y Metodologías Ágiles.
- **`components/ProjectsShowcase.tsx`:** Catálogo con filtro dinámico por categorías (Full Stack, IA & Desktop, Web Institucional, Investigación) y fichas técnicas expandibles para:
  - `VitLine` (Aerolínea en PHP/MariaDB, pasarela VitCard, boletos y carnets con código QR).
  - `MiAsistente` (Suite de escritorio en Python con IA Gemini, mascota interactiva con spritesheets animados y calculadora matemática/gráfica).
  - `ProyectMDIA` (Portal de la Media Técnica en Desarrollo de Software de Medellín).
  - `Semillero Quipux` (Experiencia formativa en ingeniería, Scrum y GitHub).
- **`components/SkillsSection.tsx`:** Matriz de competencias técnicas divididas en Frontend, Backend & Datos, Metodologías/Lógica y Creación Digital (3D Vtuber, Dibujo Anime, Edición audiovisual), junto con competencias blandas detalladas.
- **`components/HobbiesValue.tsx`:** Tarjetas individuales para cada uno de los 8 hobbies (guitarra, dibujo anime, proyectos sociales, video, streaming, videojuegos, cine, estudio autodidacta), demostrando explícitamente su aporte a la disciplina, la empatía y la ingeniería de software.
- **`components/ContactSection.tsx`:** Enlace directo verificado a WhatsApp (`+57 300 539 5784`), botón con copiado inteligente de correo electrónico al portapapeles, ubicación e interactividad de mensajes.
- **`components/Footer.tsx`:** Pie de página con enlaces de retorno, créditos y especificación de tecnologías.

### 2. Integración Principal y Estilos Globales
- **`app/page.tsx`:** Orquestación central de todos los componentes con estado compartido de identidad dual.
- **`app/layout.tsx`:** Configuración de metadatos SEO completos en español, `metadataBase`, tipografías Geist y viewport adaptativo.
- **`app/globals.css`:** Paleta oscura slate-950, animaciones de entrada fluidas y scrollbar estilizado.

### 3. Validación y Pruebas de Compilación
- Ejecución de `npm run build`: Compilación estática exitosa con Next.js 16 (Turbopack) y TypeScript sin errores (`0 errors, 0 warnings`).

### 4. Actualización del README.md
- **`README.md`:** Redacción completa con la arquitectura elegida, justificación de decisiones técnicas, descripción detallada de cada componente e instructivo paso a paso para despliegue en **Vercel** y **Netlify**.

---

## [2026-10-04] - Rediseño Neón (Cyber/Mint Glow) y Humanización de Textos

### 1. Humanización y Simplificación de Textos (`data/portfolioData.ts`)
- **Acción:** Reescritura completa de los textos de presentación, proyectos, habilidades y hobbies utilizando un lenguaje cercano, humano, directo y sin tecnicismos complejos o jerga corporativa.
- **Tono adoptado:** Cercano, auténtico y humilde, destacando la pasión por programar cosas útiles, el arte digital (anime y 3D) y la comunicación honesta con la comunidad.
- **Explicación clara de proyectos:**
  - `VitLine`: Explicado como una plataforma para aerolíneas que permite buscar vuelos, reservar con billetera virtual propia y descargar tiquetes con código QR escaneable.
  - `MiAsistente`: Detallado como una aplicación de computador con una mascota interactiva animada en pantalla, asistente con IA de Google y calculadora gráfica de funciones.
  - `ProyectMDIA`: Presentado como la web institucional para motivar a jóvenes de Medellín a estudiar desarrollo de software.
  - `Semillero Quipux`: Explicado como un espacio práctico de trabajo en equipo usando Git y GitHub.

### 2. Adaptación Visual basada en la Imagen de Referencia
- **Fondo y Paleta de Color:**
  - Fondo oscuro profundo (`#080b0e`).
  - Color de acento verde/cian neón (`#00f5b8` / Cyber Mint Glow).
- **Figuras Geométricas Flotantes (`components/FloatingDecorations.tsx`):**
  - Incorporación de elementos decorativos en el fondo con animación suave flotante (círculos con borde cian, rombos redondeados inclinados y triángulos translúcidos), idénticos a la composición de la imagen aportada por el usuario.
- **Hero Section (`components/Hero.tsx`):**
  - Título con resplandor neón: `Hola, soy Jerónimo` (y alternativa Deodraus) con efecto `text-neon-glow`.
  - Subtítulo de rol en color cian vibrante.
  - Fila de botones sociales circulares con bordes brillantes: TikTok, YouTube, WhatsApp, Instagram y GitHub.
  - Botón principal en forma de píldora neón (`btn-neon-pill` "Contáctame") con resplandor exterior.
  - Avatar circular a la derecha con anillo y halo neón radiante (`avatar-neon-halo`), exactamente como en la referencia gráfica, con conmutador para ver tanto la foto real como el avatar artístico.
- **Navbar (`components/Navbar.tsx`):**
  - Logotipo brillante "Portfolio" con resplandor cian.
  - Enlaces simples con línea indicadora activa en verde neón.
- **Componentes Sociales Vectoriales (`components/SocialIcons.tsx`):**
  - Creación de componentes SVG nativos optimizados para cada red social sin dependencias externas.
- **Estilos Globales (`app/globals.css` y `app/layout.tsx`):**
  - Reglas CSS de resplandor `text-neon-glow`, `box-neon-glow`, `avatar-neon-halo`, `btn-neon-pill` y animaciones `animate-float-1`, `animate-float-2`, `animate-float-3`.
- **Compilación de Verificación:**
  - Ejecución de `npm run build` completada con éxito (`0 errors, 0 warnings`).

---

## [2026-10-04] - Actualización de Datos Reales y Sistema de Paletas Duales (Modo Real Azul / Modo Creador Rosa)

### 1. Actualización de Datos desde DATOS.md
- **Teléfono y WhatsApp:** Actualizado a `+57 300 205 5624` (con enlace `https://wa.me/573002055624`).
- **Redes Sociales Oficiales Integradas:**
  - **Twitch:** `https://twitch.tv/deodraus`
  - **Kick:** `https://kick.com/deodraus`
  - **TikTok:** `https://tiktok.com/@deodraus?_r=1&_t=ZS-9AGVI9rYYcv`
  - **Instagram:** `https://instagram.com/deodraus?igsh=MWV2czJub3JwNDVtdg==`
  - **X (Twitter):** `https://x.com/deodraus`
  - **GitHub:** `https://github.com/Deodraus`
- **Iconografía Vectorial:** Incorporación de iconos SVG limpios y optimizados para Twitch, Kick y X en `components/SocialIcons.tsx`.

### 2. Implementación de los 2 Modos de Color Dinámicos
- **Modo Real (Jerónimo / Desarrollador):**
  - Paleta de color: **Azul eléctrico / Cian profundo** (`#00d2ff`, `#38bdf8`, `#3b82f6`).
  - Resplandores, bordes, avatares, botones píldora, figuras flotantes y acentos se transforman en tonos azules luminosos.
  - Fotografía principal: Foto real de Jerónimo Deossa Abad.
- **Modo Creador (Deodraus / Artístico):**
  - Paleta de color: **Rosa neón / Fucsia / Sakura magenta** (`#ff2a85`, `#f43f5e`, `#ff5c9f`), perfectamente coordinada con los tonos del personaje artístico de la foto.
  - Todos los elementos del portafolio (títulos con glow, botones píldora, bordes, figuras geométricas flotantes y halos) cambian instantáneamente a rosa neón en toda la página.
  - Avatar principal: Ilustración artística de Deodraus.

### 3. Arquitectura de Estilos Reactiva
- Implementación de clases de tema `.theme-real` y `.theme-creator` en `app/globals.css` utilizando variables CSS fluidas (`--neon-accent`, `--neon-glow`, `--neon-border`, `--neon-bg-subtle`).
- Transición CSS suave (`transition: all 0.4s ease`) para que el cambio entre azul y rosa sea inmediato y visualmente agradable.

### 4. Verificación de Compilación
- Ejecución de `npm run build` finalizada con éxito (`0 errors, 0 warnings`, generación estática completada).
