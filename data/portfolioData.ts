export interface ProjectScreenshot {
  url: string;
  title: string;
  caption: string;
  badge?: string;
  isMobile?: boolean;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: "Full Stack" | "IA & Desktop" | "Web Institucional" | "Investigación & Semillero";
  description: string;
  problemSolved: string;
  keyFeatures: string[];
  techStack: string[];
  screenshots: ProjectScreenshot[];
  hasMobileSupport: boolean;
  mobileScreenshot?: ProjectScreenshot;
  githubUrl?: string;
  liveUrl?: string;
  stats?: { label: string; value: string }[];
  highlight: string;
  pills?: string[];
}

export interface TechSkill {
  id: string;
  name: string;
  icon: string;
  category: "Lenguajes" | "Frontend" | "Backend & DB" | "Herramientas";
  desc: string;
  level: "Avanzado" | "Intermedio" | "En Dominio";
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; level?: string; iconName?: string; note?: string }[];
}

export interface HobbyItem {
  id: number;
  title: string;
  contribution: string;
  category: "Música & Arte" | "Tecnología" | "Audiovisual" | "Estrategia";
  iconName: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  description: string;
  achievements: string[];
}

export interface SoftSkill {
  name: string;
  desc: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface PortfolioData {
  personal: {
    fullName: string;
    firstName: string;
    artisticName: string;
    roles: {
      dev: string;
      creator: string;
      combined: string;
    };
    location: string;
    phone: string;
    phoneUrl: string;
    email: string;
    avatarReal: string;
    avatarArtistic: string;
    summaryDev: string;
    summaryCreator: string;
    vision: string;
    socials: {
      dev: SocialLink[];
      creator: SocialLink[];
    };
  };
  education: EducationItem[];
  projects: Project[];
  techIcons: TechSkill[];
  technicalSkills: SkillCategory[];
  softSkills: SoftSkill[];
  hobbies: HobbyItem[];
}

export const portfolioData: PortfolioData = {
  personal: {
    fullName: "Jerónimo Deossa Abad",
    firstName: "Jerónimo",
    artisticName: "Deodraus",
    roles: {
      dev: "Desarrollador de Software",
      creator: "Creador de Contenido & Streamer",
      combined: "Desarrollador de Software & Creador de Contenido"
    },
    location: "Medellín, Antioquia, Colombia",
    phone: "+57 300 205 5624",
    phoneUrl: "https://wa.me/573002055624",
    email: "jeronimodeossaabad@gmail.com",
    avatarReal: "/img/photojeronimo.jpeg",
    avatarArtistic: "/img/photodeodraus.jpeg",
    summaryDev:
      "Soy desarrollador de software y creador de contenido de Medellín. Me enfoco en crear páginas web limpias, modernas y fáciles de usar, conectar bases de datos y resolver problemas con código funcional. También edito fotos y videos, modelo avatares 3D y me gusta aprender constantemente para trabajar en equipo.",
    summaryCreator:
      "Bajo mi identidad como Deodraus, hago streams de videojuegos, reflexiono sobre situaciones que vivimos los jóvenes en el día a día y creo contenido digital con una comunidad cercana. Me encanta combinar la creatividad del dibujo anime y el modelado 3D con la buena vibra.",
    vision:
      "Creo que la tecnología es genial, pero es mucho mejor cuando se combina con creatividad, buena energía y una comunicación honesta y transparente.",
    socials: {
      dev: [
        {
          platform: "GitHub",
          url: "https://github.com/Deodraus",
          icon: "github"
        },
        {
          platform: "WhatsApp",
          url: "https://wa.me/573002055624",
          icon: "whatsapp"
        },
        {
          platform: "X (Twitter)",
          url: "https://x.com/deodraus",
          icon: "x"
        },
        {
          platform: "Instagram",
          url: "https://instagram.com/deodraus?igsh=MWV2czJub3JwNDVtdg==",
          icon: "instagram"
        },
        {
          platform: "Twitch",
          url: "https://twitch.tv/deodraus",
          icon: "twitch"
        }
      ],
      creator: [
        {
          platform: "Twitch",
          url: "https://twitch.tv/deodraus",
          icon: "twitch"
        },
        {
          platform: "Kick",
          url: "https://kick.com/deodraus",
          icon: "kick"
        },
        {
          platform: "TikTok",
          url: "https://tiktok.com/@deodraus?_r=1&_t=ZS-9AGVI9rYYcv",
          icon: "tiktok"
        },
        {
          platform: "Instagram",
          url: "https://instagram.com/deodraus?igsh=MWV2czJub3JwNDVtdg==",
          icon: "instagram"
        },
        {
          platform: "X",
          url: "https://x.com/deodraus",
          icon: "x"
        },
        {
          platform: "WhatsApp",
          url: "https://wa.me/573002055624",
          icon: "whatsapp"
        }
      ]
    }
  },

  education: [
    {
      degree: "Técnico Laboral por Competencias como Asistente en Desarrollo de Software",
      institution: "Formación Técnica Profesional",
      location: "Medellín, Colombia",
      description:
        "Formación orientada a la práctica real: desarrollo Frontend II, Backend II, modelado y gestión de bases de datos, metodologías ágiles de trabajo en equipo y algoritmos para resolver retos de programación.",
      achievements: [
        "Desarrollo de proyectos funcionales integrales de inicio a fin",
        "Conexión de sistemas Frontend y Backend con bases de datos",
        "Participación en semilleros de formación empresarial (Quipux)"
      ]
    }
  ],

  projects: [
    {
      id: "vitline",
      title: "VitLine - Sistema de Aerolínea",
      tagline: "Plataforma web para buscar vuelos, reservar pasajes con VitCard y descargar tiquetes con código QR",
      category: "Full Stack",
      description:
        "Sistema web diseñado para gestionar una aerolínea integral: búsqueda de vuelos interactiva, registro de pasajeros, pasarela de pago virtual propia (VitCard) con validación de saldo y emisión instantánea de pases de abordar y carnets con códigos QR dinámicos.",
      problemSolved:
        "Facilita la compra y validación de boletos aéreos de forma 100% digital, eliminando filas y permitiendo verificación instantánea mediante lectores de código QR.",
      keyFeatures: [
        "Reserva interactiva de vuelos y datos de pasajeros",
        "Generador de tiquetes y carnets con código QR escaneable",
        "Monedero digital interno (VitCard) con recargas y validación de fondos",
        "Historial y descarga de facturas en línea"
      ],
      techStack: ["PHP", "MariaDB / MySQL", "JavaScript", "HTML5", "CSS3", "Códigos QR"],
      hasMobileSupport: true,
      screenshots: [
        {
          url: "/img/vitline1.png",
          title: "Búsqueda y Reserva de Vuelos (PC)",
          caption: "Vista principal del sistema para selección de rutas, fechas y categorías de viaje.",
          badge: "PC • Módulo Principal"
        },
        {
          url: "/img/vitline2.png",
          title: "Monedero VitCard & Pagos (PC)",
          caption: "Pasarela interna con tarjeta virtual VitCard, consulta de saldo y transacciones.",
          badge: "PC • Fintech Virtual"
        },
        {
          url: "/img/vitline3.png",
          title: "Pase de Abordar con QR Dinámico (PC)",
          caption: "Boleto digital generado al instante con código QR escaneable y datos del vuelo.",
          badge: "PC • Validación QR"
        }
      ],
      mobileScreenshot: {
        url: "/img/vitlinePhone.jpeg",
        title: "VitLine en Celular (Móvil)",
        caption: "Interfaz adaptada a pantallas táctiles para consulta de pasajes y pases de abordar.",
        badge: "Versión Móvil",
        isMobile: true
      },
      pills: ["2560x2040 Retina", "PC & Celular", "PHP + MariaDB", "QR Dinámico"],
      stats: [
        { label: "Módulos", value: "Completo" },
        { label: "Seguridad", value: "Roles & Auth" },
        { label: "Validación", value: "QR Dinámico" }
      ],
      highlight: "Arquitectura modular pensada para que cualquier persona pueda comprar su vuelo sin confusiones."
    },
    {
      id: "proyectmdia",
      title: "ProyectMDIA - Portal de Media Técnica",
      tagline: "Sitio web para dar a conocer el programa de software y motivar a estudiantes de Medellín",
      category: "Web Institucional",
      description:
        "Plataforma web creada para visibilizar la Media Técnica en Desarrollo de Software de Medellín, explicando con claridad la ruta formativa de los estudiantes y mostrando el impacto positivo de la tecnología en la juventud.",
      problemSolved:
        "Facilita que los jóvenes entiendan cómo iniciar en la programación y se motiven a formarse en el mundo tecnológico.",
      keyFeatures: [
        "Diseño que se adapta perfectamente a celulares y computadores",
        "Información clara sobre la ruta de aprendizaje de desarrollo",
        "Muestra de proyectos y testimonios estudiantiles",
        "Navegación intuitiva y carga ultra rápida"
      ],
      techStack: ["HTML5", "CSS3", "JavaScript", "Diseño Responsivo"],
      hasMobileSupport: true,
      screenshots: [
        {
          url: "/img/proyectMDIA.png",
          title: "Portal Web ProyectMDIA en PC",
          caption: "Página de inicio con diseño adaptable, secciones informativas y componentes limpios.",
          badge: "PC • Web Institucional"
        }
      ],
      mobileScreenshot: {
        url: "/img/proyectMDIAPhone.jpeg",
        title: "Portal ProyectMDIA en Celular",
        caption: "Navegación móvil optimizada para estudiantes desde cualquier smartphone.",
        badge: "Versión Móvil",
        isMobile: true
      },
      pills: ["Adaptable a Figma", "PC & Celular", "Responsive Design", "Educación Tech"],
      stats: [
        { label: "Impacto", value: "Estudiantes" },
        { label: "Formato", value: "Móvil & PC" }
      ],
      highlight: "Lenguaje cercano y diseño visual pensado para inspirar vocaciones tecnológicas."
    },
    {
      id: "miasistente",
      title: "MiAsistente & Calculadora de Funciones",
      tagline: "Mascota virtual animada en el escritorio, asistente con IA de Google y calculadora gráfica",
      category: "IA & Desktop",
      description:
        "Aplicación de escritorio en Python que reúne un asistente inteligente conectado a Google Gemini API, una mascota virtual interactiva con sprites animados y una calculadora para resolver y graficar funciones matemáticas. Desarrollada exclusivamente para computadores de escritorio.",
      problemSolved:
        "Une la utilidad de la inteligencia artificial con una presencia visual divertida y una herramienta de cálculo gráfico para estudiantes y programadores en su estación de trabajo.",
      keyFeatures: [
        "Respuestas y asistencia inteligente con la API de Google Gemini",
        "Mascota virtual con animaciones en tiempo real en la pantalla",
        "Calculadora matemática que dibuja y grafica funciones algebraicas",
        "Automatizaciones para ejecutar comandos en el computador"
      ],
      techStack: ["Python", "Google Gemini API", "Tkinter", "Matplotlib", "Animación Sprites"],
      hasMobileSupport: false,
      screenshots: [
        {
          url: "/img/MiAsistente.png",
          title: "MiAsistente: IA Gemini & Mascota Virtual (PC)",
          caption: "Aplicación de escritorio con asistente conversacional inteligente y mascota interactiva.",
          badge: "PC • Exclusivo Escritorio"
        },
        {
          url: "/img/CalculadoraFunciones.png",
          title: "Calculadora Gráfica de Funciones (PC)",
          caption: "Herramienta de cálculo algebraico y graficación en tiempo real en la computadora.",
          badge: "PC • Exclusivo Escritorio"
        }
      ],
      pills: ["Exclusivo Escritorio / PC", "No disponible en móvil", "Python 3.x", "Tkinter & Matplotlib"],
      stats: [
        { label: "IA", value: "Gemini Pro" },
        { label: "Formato", value: "Solo PC / Desktop" },
        { label: "Cálculos", value: "Gráficas en Vivo" }
      ],
      highlight: "Unión de inteligencia artificial con arte digital y rigor matemático en el escritorio de la computadora."
    },
    {
      id: "quipux",
      title: "Semillero Tecnológico Quipux",
      tagline: "Formación práctica en ingeniería de software, Scrum y flujos de trabajo con GitHub",
      category: "Investigación & Semillero",
      description:
        "Participé en retos del Semillero Quipux resolviendo problemas de software, aplicando metodologías ágiles de trabajo en equipo y manejando control de versiones colaborativo con GitHub.",
      problemSolved:
        "Aprender los estándares y formas de trabajo en equipo que se usan en las empresas reales de tecnología.",
      keyFeatures: [
        "Flujo colaborativo con ramas y control de cambios en GitHub",
        "Organización y estimación de tareas con Scrum",
        "Buenas prácticas de código limpio y ordenado",
        "Resolución práctica de retos de lógica de programación"
      ],
      techStack: ["Git", "GitHub", "Trabajo en Equipo", "Scrum", "Lógica"],
      hasMobileSupport: true,
      screenshots: [
        {
          url: "/img/quipux.png",
          title: "Semillero Quipux en PC (GitHub)",
          caption: "Flujo de trabajo colaborativo, ramas y control de código en pantalla de PC.",
          badge: "PC • Control de Versiones"
        }
      ],
      mobileScreenshot: {
        url: "/img/quipuxPhone.jpeg",
        title: "Semillero Quipux en Celular (GitHub)",
        caption: "Revisión móvil de repositorios, commits y avances del equipo en GitHub.",
        badge: "Versión Móvil",
        isMobile: true
      },
      pills: ["PC & Celular", "Git & GitHub", "Metodologías Ágiles", "Scrum"],
      stats: [
        { label: "Modalidad", value: "Semillero" },
        { label: "Control", value: "GitHub" }
      ],
      highlight: "Inmersión práctica en metodologías y buenas prácticas de la industria real."
    }
  ],

  techIcons: [
    {
      id: "php",
      name: "PHP",
      icon: "/tech/php.svg",
      category: "Backend & DB",
      desc: "Desarrollo del backend completo de VitLine, arquitectura MVC, sesiones y lógica de negocio.",
      level: "Avanzado"
    },
    {
      id: "html",
      name: "HTML5",
      icon: "/tech/html5.svg",
      category: "Frontend",
      desc: "Estructura semántica, accesibilidad web, SEO y maquetación de interfaces modernas.",
      level: "Avanzado"
    },
    {
      id: "css",
      name: "CSS3",
      icon: "/tech/css.svg",
      category: "Frontend",
      desc: "Diseño visual, Flexbox, CSS Grid, gradientes de malla, animaciones y compatibilidad.",
      level: "Avanzado"
    },
    {
      id: "javascript",
      name: "JavaScript",
      icon: "/tech/javascript.svg",
      category: "Frontend",
      desc: "Lógica asíncrona, manipulación del DOM, ES6+, peticiones fetch y dinamismo interactivo.",
      level: "Avanzado"
    },
    {
      id: "python",
      name: "Python",
      icon: "/tech/python.svg",
      category: "Lenguajes",
      desc: "Creación de MiAsistente, algoritmos de cálculo matemático e integración de IA con Gemini API.",
      level: "Avanzado"
    },
    {
      id: "mysql",
      name: "MySQL",
      icon: "/tech/mysql.svg",
      category: "Backend & DB",
      desc: "Diseño de bases de datos relacionales, MariaDB, consultas SQL optimizadas y llaves foráneas.",
      level: "Avanzado"
    },
    {
      id: "java",
      name: "Java",
      icon: "/tech/java.svg",
      category: "Lenguajes",
      desc: "Programación orientada a objetos, herencia, interfaces, colecciones y pensamiento algorítmico.",
      level: "Intermedio"
    },
    {
      id: "react",
      name: "React",
      icon: "/tech/react.svg",
      category: "Frontend",
      desc: "Arquitectura basada en componentes funcionales, hooks (useState, useEffect, useMemo) y reactividad.",
      level: "Avanzado"
    },
    {
      id: "nodejs",
      name: "Node.js",
      icon: "/tech/nodejs.svg",
      category: "Backend & DB",
      desc: "Ejecución de JavaScript en el backend, gestión de paquetes npm y desarrollo de APIs.",
      level: "Intermedio"
    },
    {
      id: "nextjs",
      name: "Next.js",
      icon: "/tech/nextjs.svg",
      category: "Frontend",
      desc: "Framework para React con App Router, Turbopack, renderizado del servidor y alto rendimiento.",
      level: "Avanzado"
    },
    {
      id: "angular",
      name: "Angular",
      icon: "/tech/angular.svg",
      category: "Frontend",
      desc: "Framework estructurado con TypeScript, servicios, inyección de dependencias y componentes.",
      level: "Intermedio"
    },
    {
      id: "git",
      name: "Git",
      icon: "/tech/git.svg",
      category: "Herramientas",
      desc: "Control de versiones local, ramas, commits semánticos, merge y resolución de conflictos.",
      level: "Avanzado"
    },
    {
      id: "github",
      name: "GitHub",
      icon: "/tech/github.svg",
      category: "Herramientas",
      desc: "Repositorios remotos, trabajo en equipo, pull requests y actividades en semillero Quipux.",
      level: "Avanzado"
    },
    {
      id: "tailwind",
      name: "Tailwind CSS",
      icon: "/tech/tailwind.svg",
      category: "Frontend",
      desc: "Estilos utility-first, diseño responsivo, personalización de paletas azul/rosa y modo oscuro.",
      level: "Avanzado"
    },
    {
      id: "typescript",
      name: "TypeScript",
      icon: "/tech/typescript.svg",
      category: "Lenguajes",
      desc: "Tipado estático seguro, interfaces robustas, detección temprana de errores y escalabilidad.",
      level: "Avanzado"
    },
    {
      id: "cpp",
      name: "C++",
      icon: "/tech/cpp.svg",
      category: "Lenguajes",
      desc: "Lógica computacional, estructuras de control, punteros y fundamentación de bajo nivel.",
      level: "Intermedio"
    }
  ],

  technicalSkills: [
    {
      title: "Desarrollo Frontend",
      description: "Páginas web rápidas, modernas y que se adaptan a cualquier dispositivo.",
      skills: [
        { name: "Frontend II", note: "Especialización técnica" },
        { name: "React & Next.js", note: "Componentes modernos" },
        { name: "HTML5 & CSS3", note: "Estructura y diseño" },
        { name: "Tailwind CSS", note: "Estilos limpios y ágiles" },
        { name: "JavaScript & TypeScript", note: "Lógica interactiva" }
      ]
    },
    {
      title: "Backend & Datos",
      description: "Lógica de servidor, conexiones de base de datos e inteligencia artificial.",
      skills: [
        { name: "Backend II", note: "Lógica del servidor" },
        { name: "PHP", note: "Sistemas web dinámicos" },
        { name: "Python", note: "Scripts, IA y utilidades" },
        { name: "Gestión de Bases de Datos", note: "MariaDB, MySQL y SQL" },
        { name: "APIs e IA", note: "Integración con Gemini API" }
      ]
    },
    {
      title: "Metodologías & Lógica",
      description: "Organización y buenas prácticas para crear software ordenado.",
      skills: [
        { name: "Metodologías Ágiles", note: "Scrum y trabajo en equipo" },
        { name: "Lógica de Programación", note: "Resolución de problemas" },
        { name: "Git y GitHub", note: "Control de versiones" },
        { name: "Nuevas Tecnologías", note: "Herramientas modernas" }
      ]
    },
    {
      title: "Creatividad & Multimedia",
      description: "Habilidades visuales que le dan identidad y personalidad a mis proyectos.",
      skills: [
        { name: "Avatares Vtubers 3D", note: "Modelado digital" },
        { name: "Dibujo Estilo Anime", note: "Personajes y proporciones" },
        { name: "Edición de Fotos y Video", note: "Producción audiovisual" },
        { name: "Streaming en Vivo", note: "Transmisiones y comunidad" }
      ]
    }
  ],

  softSkills: [
    { name: "Comunicación Asertiva", desc: "Explico ideas de forma clara, directa y empática a cualquier persona." },
    { name: "Creatividad", desc: "Aporto soluciones originales combinando tecnología y arte visual." },
    { name: "Transparencia", desc: "Hablo con honestidad sobre avances, tiempos y compromisos." },
    { name: "Criterio Realista", desc: "Me enfoco en entregar cosas que de verdad funcionen y sirvan." },
    { name: "Amabilidad y Empatía", desc: "Trato respetuoso y disposición constante para escuchar y colaborar." },
    { name: "Pensamiento Lógico", desc: "Divido problemas grandes en pasos ordenados para resolverlos." },
    { name: "Eficiencia", desc: "Aprovecho el tiempo al máximo priorizando lo más importante." },
    { name: "Trabajo en Equipo", desc: "Me integro con facilidad y apoyo a mis compañeros para cumplir metas." }
  ],

  hobbies: [
    {
      id: 1,
      title: "Tocar Guitarra",
      contribution: "Me enseña paciencia y disciplina. Sacar una canción nota por nota es igual a revisar código: requiere ritmo, calma y práctica constante.",
      category: "Música & Arte",
      iconName: "Music"
    },
    {
      id: 2,
      title: "Dibujar Estilo Anime",
      contribution: "Desarrolla mi ojo para el detalle visual, los colores, la estética y las proporciones, lo que enriquece el diseño de interfaces web.",
      category: "Música & Arte",
      iconName: "Palette"
    },
    {
      id: 3,
      title: "Crear Proyectos Personales",
      contribution: "Alimenta mi iniciativa y autonomía para no quedarme solo con la teoría, sino inventar herramientas que resuelvan necesidades reales.",
      category: "Tecnología",
      iconName: "Code2"
    },
    {
      id: 4,
      title: "Grabar y Editar Videos",
      contribution: "Me da agilidad para contar historias, resumir ideas y comunicar mensajes claros de forma atractiva en medios digitales.",
      category: "Audiovisual",
      iconName: "Video"
    },
    {
      id: 5,
      title: "Hacer Streams en Vivo",
      contribution: "Me entrena para comunicarme con espontaneidad y confianza frente al público, escuchar a la comunidad y resolver imprevistos en tiempo real.",
      category: "Audiovisual",
      iconName: "Radio"
    },
    {
      id: 6,
      title: "Jugar Videojuegos",
      contribution: "Ejercita el pensamiento estratégico, la adaptabilidad rápida a nuevas reglas y una comprensión natural de la interactividad y gamificación.",
      category: "Estrategia",
      iconName: "Gamepad2"
    },
    {
      id: 7,
      title: "Ver Series y Películas",
      contribution: "Nutre mi imaginación con nuevas perspectivas narrativas y visuales que inspiran proyectos digitales con impacto emocional.",
      category: "Estrategia",
      iconName: "Film"
    },
    {
      id: 8,
      title: "Estudiar Programación & Nuevas Habilidades",
      contribution: "Mantiene viva mi mentalidad de aprendizaje autodidacta y adaptación inmediata al cambio constante de la industria tecnológica.",
      category: "Tecnología",
      iconName: "GraduationCap"
    }
  ]
};
