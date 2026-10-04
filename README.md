# Portafolio Profesional - Jerónimo Deossa Abad (Deodraus)

Portafolio web moderno de alto rendimiento para **Jerónimo Deossa Abad** (*Deodraus*), Desarrollador de Software y Creador de Contenido en Medellín, Colombia.

---

## 🏛️ 1. Arquitectura Técnica y Decisiones Tomadas

### Framework y Tecnologías Principales
- **Framework:** [Next.js 16 (App Router)](https://nextjs.org/) con React 19 y compilador Turbopack.
- **Lenguaje:** TypeScript 5 con tipado estricto en datos y componentes.
- **Estilos:** Tailwind CSS v4 con arquitectura semántica, soporte dark-mode nativo y diseño responsivo móvil-primero (*Mobile First*).
- **Iconografía:** `lucide-react` para iconos vectoriales limpios y accesibles.
- **Gestión de Recursos:** Optimización de imágenes con el componente nativo `<Image />` de Next.js (`/public/img/photojeronimo.jpeg` y `/public/img/photodeodraus.jpeg`).

### Justificación de la Elección
1. **Rendimiento Excepcional (SSG / Static Generation):** Next.js pre-renderiza las páginas de forma estática en tiempo de compilación (`○ Static`), garantizando tiempos de carga casi instantáneos y una puntuación máxima en métricas Core Web Vitals y Lighthouse.
2. **Identidad Dual Reactiva:** La arquitectura con React 19 permite un manejo de estado fluido para alternar entre el perfil de **Ingeniería de Software** (Jerónimo) y el de **Creador de Contenido & Streamer** (Deodraus) sin recargas de página.
3. **Despliegue Nativo e Inmediato:** Totalmente compatible y optimizado para despliegue en un clic tanto en **Vercel** como en **Netlify**.

---

## 🧩 2. Descripción de Componentes Usados

La interfaz está estructurada modularmente en `components/`:

- **`Navbar.tsx`:** Barra de navegación superior fija (*sticky*) con efecto glassmorphism (`backdrop-blur`). Incluye enlaces suaves a cada sección, botón de menú móvil para teléfonos, conmutador de perspectiva Dev/Deodraus y botón directo a WhatsApp.
- **`Hero.tsx`:** Sección de presentación de alto impacto. Integra el switch interactivo de identidad dual donde se contrastan la fotografía real y el avatar artístico 3D, badges de disponibilidad y ubicación, y accesos directos a proyectos y contacto.
- **`AboutMe.tsx`:** Narra la trayectoria, historia y visión integral de Jerónimo, desglosando los 3 pilares profesionales: rigor técnico, comunicación empática y diseño visual/multimedia.
- **`ExperienceEducation.tsx`:** Detalla el título oficial de *Técnico Laboral por Competencias como Asistente en Desarrollo de Software*, destacando los módulos de especialización (Frontend II, Backend II, Bases de Datos, Metodologías Ágiles).
- **`ProjectsShowcase.tsx`:** Módulo interactivo con filtro por categorías y fichas expandibles para los 4 proyectos clave:
  - **VitLine:** Plataforma web completa de reservas de aerolínea con pasarela VitCard y códigos QR en PHP/MariaDB.
  - **MiAsistente:** Suite de escritorio en Python con IA Google Gemini, mascota interactiva con sprites animados y graficadora matemática.
  - **ProyectMDIA:** Portal web interactivo de difusión para la Media Técnica de Medellín.
  - **Semillero Quipux:** Experiencia formativa en metodologías ágiles, buenas prácticas y flujos GitHub.
- **`SkillsSection.tsx`:** Visualización de habilidades técnicas estructuradas en 4 categorías (Frontend, Backend & Datos, Procesos/Ágiles, Creación Digital 3D/Anime/Video) y panel de habilidades blandas aplicadas a equipos.
- **`HobbiesValue.tsx`:** Sección que conecta de manera argumentada y persuasiva cómo cada uno de los 8 hobbies aporta competencias esenciales a la ingeniería de software (disciplina, diseño UX, comunicación en vivo, adaptabilidad).
- **`ContactSection.tsx`:** Centro de interacción con acceso directo a WhatsApp, botón de copia rápida de correo al portapapeles con confirmación visual, ubicación en Medellín y formulario generador de mensajes.
- **`Footer.tsx`:** Cierre institucional con enlaces rápidos, créditos y stack tecnológico.

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
6. Haz clic en **Deploy**. El portafolio estará activo y con certificado SSL gratuito en menos de 2 minutos.

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
