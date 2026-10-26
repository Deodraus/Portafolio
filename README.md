# Portafolio Profesional - Jerónimo Deossa Abad

Portafolio web moderno de alto rendimiento para **Jerónimo Deossa Abad**, Desarrollador de Software en Medellín, Colombia.

---

## 🏛️ 1. Arquitectura Técnica y Decisiones Tomadas

### Framework y Tecnologías Principales
- **Framework:** [Next.js 16 (App Router)](https://nextjs.org/) con React 19 y compilador Turbopack.
- **Lenguaje:** TypeScript 5 con tipado estricto en datos y componentes.
- **Estilos:** Tailwind CSS v4 con arquitectura semántica en fondo negro puro (`#000000`), paleta de acentos azules (`#3b82f6` / `#38bdf8`) y diseño responsivo móvil-primero (*Mobile First*).
- **Iconografía:** `lucide-react` y vectores SVG nativos optimizados.
- **Gestión de Recursos:** Optimización de imágenes con `<Image />` de Next.js y renderizado dinámico en `<canvas>` para el retrato tipográfico en código (`/public/img/photojeronimo.jpeg`).

### Justificación de la Elección
1. **Rendimiento Excepcional (SSG / Static Generation):** Next.js pre-renderiza las páginas de forma estática en tiempo de compilación (`○ Static`), garantizando tiempos de carga casi instantáneos y una puntuación máxima en métricas Core Web Vitals y Lighthouse.
2. **Identidad Profesional Única:** Enfoque centrado 100% en la identidad real de **Jerónimo Deossa Abad** como Desarrollador de Software, resaltando su formación técnica, proyectos reales y competencias de ingeniería.
3. **Despliegue Nativo e Inmediato:** Totalmente compatible y optimizado para despliegue en un clic tanto en **Vercel** como en **Netlify**.

---

## 🧩 2. Descripción de Componentes Usados

La interfaz está estructurada modularmente en `components/`:

- **`Navbar.tsx`:** Barra de navegación minimalista sobre fondo negro con emblema monograma vectorial `JDA` a la izquierda y enlaces limpios a la derecha (`Inicio`, `Sobre Mí`, `Educación`, `Habilidades`, `Portafolio`, `Hobbies`, `Contacto`) con detección automática de sección activa.
- **`Hero.tsx`:** Sección principal basada en el diseño de referencia con paleta azul: saludo en dos líneas y dos tonos de azul (`Jerónimo` en `#3b82f6` y `Deossa Abad` en `#38bdf8`), subtítulo con efecto máquina de escribir y barra vertical `|`, cita descriptiva, botones rectangulares (`Contrátame` relleno y `MI CV` delineado), narrador de voz interactivo (`SpeechSynthesis`) e iconos sociales circulares delineados en la esquina inferior izquierda.
- **`CodePortrait.tsx`:** Retrato de Jerónimo (`photojeronimo.jpeg`) procesado en HTML5 `<canvas>` que emerge de la oscuridad formado por líneas de código en tonos blanco/azul hielo, con opción para alternar a la fotografía original.
- **`AboutMe.tsx`:** Narra la trayectoria, historia y visión profesional de Jerónimo como Desarrollador de Software en Medellín.
- **`ExperienceEducation.tsx`:** Detalla el título oficial de *Técnico Laboral por Competencias como Asistente en Desarrollo de Software* y los módulos de especialización (Frontend II, Backend II, Bases de Datos, Metodologías Ágiles).
- **`SkillsSection.tsx`:** Grid interactivo con los 16 lenguajes y tecnologías oficiales (SVGL), especialidades técnicas y habilidades blandas.
- **`ProjectsShowcase.tsx` y `DeviceMockupViewer.tsx`:** Estudio interactivo de maquetas (Portátil MacBook, Ventana de Navegador Claro/Oscuro, Lienzo Figma y Vista Móvil) junto con fichas técnicas de `VitLine`, `ProyectMDIA`, `MiAsistente & Calculadora` y `Semillero Quipux`.
- **`HobbiesValue.tsx`:** Muestra cómo cada uno de los 8 intereses personales aporta competencias clave al desarrollo de software.
- **`ContactSection.tsx`:** Acceso directo a WhatsApp, copia rápida de correo electrónico al portapapeles, ubicación en Medellín y formulario de mensaje directo.
- **`Footer.tsx`:** Cierre con enlaces rápidos, créditos y tecnologías empleadas.

---

## 🚀 3. Instrucciones de Despliegue

### Opción A: Despliegue en Vercel (Recomendado)
1. Sube este repositorio a tu cuenta de **GitHub**.
2. Ingresa a [Vercel](https://vercel.com/) e inicia sesión con GitHub.
3. Haz clic en **"Add New..."** ➔ **"Project"**.
4. Selecciona el repositorio `portafolio`.
5. Vercel detectará automáticamente la configuración de Next.js:
   - **Framework Preset:** `Next.js`
   - **Build Command:** `next build`
   - **Output Directory:** `.next`
6. Haz clic en **Deploy**.

### Opción B: Despliegue en Netlify
1. Ingresa a [Netlify](https://www.netlify.com/) y conecta tu cuenta de **GitHub**.
2. Selecciona **"Add new site"** ➔ **"Import an existing project"**.
3. Elige el repositorio del portafolio.
4. Netlify aplicará la configuración predeterminada:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
5. Haz clic en **Deploy Portafolio**.

---

## 💻 4. Ejecución en Entorno Local

Asegúrate de contar con Node.js instalado (v18 o superior).

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo en http://localhost:3000
npm run dev

# 3. Compilar para producción
npm run build

# 4. Iniciar servidor de producción local
npm start
```
