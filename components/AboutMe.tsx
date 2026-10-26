import { portfolioData } from "@/data/portfolioData";
import { Terminal, Users, Code2 } from "lucide-react";

export default function AboutMe() {
  const { personal } = portfolioData;

  return (
    <section id="sobre-mi" className="py-20 md:py-28 relative z-10 border-t border-[#3b82f6]/20 bg-black">
      <div className="mx-auto max-w-7xl px-6 sm:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#3b82f6]/35 bg-[#3b82f6]/10 px-3.5 py-1 text-xs font-mono text-[#38bdf8] mb-3">
            <Code2 className="h-3.5 w-3.5" />
            Sobre Mí
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Conoce mi{" "}
            <span className="text-[#3b82f6]">perfil</span>{" "}
            <span className="text-[#38bdf8]">profesional</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300">
            Enfocado en construir software funcional, limpio y orientado a resolver necesidades reales.
          </p>
        </div>

        {/* 2-Column Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Story Card */}
          <div className="lg:col-span-7 rounded-2xl border border-[#3b82f6]/25 bg-[#05080f] p-6 sm:p-8 flex flex-col justify-between shadow-lg">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl border border-[#3b82f6]/35 bg-[#3b82f6]/10 text-[#38bdf8]">
                  <Terminal className="h-5 w-5" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Hola, soy {personal.fullName}
                </h3>
              </div>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  Vivo en Medellín, Colombia, y me apasiona el desarrollo de software por su capacidad de convertir ideas y lógica en herramientas útiles para las personas.
                </p>
                <p>
                  Me formé como <strong>Técnico Laboral por Competencias como Asistente en Desarrollo de Software</strong>. Mi enfoque va más allá de escribir líneas de código: busco que cada interfaz sea intuitiva, que los datos estén bien estructurados y que la arquitectura sea mantenible.
                </p>
                <p>
                  Complemento mi perfil técnico en <strong>Frontend, Backend, Bases de Datos e Inteligencia Artificial</strong> con habilidades en diseño visual, modelado 3D y edición multimedia, aportando una visión integral a cada proyecto.
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-xl border-l-4 border-l-[#3b82f6] bg-black p-4 text-sm sm:text-base text-slate-200 border border-[#3b82f6]/15">
              &ldquo;{personal.vision}&rdquo;
            </div>
          </div>

          {/* Quick Pillars */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            <div className="rounded-2xl border border-[#3b82f6]/25 bg-[#05080f] p-6">
              <div className="flex items-center gap-3 mb-2 text-[#38bdf8]">
                <Terminal className="h-5 w-5" />
                <h4 className="text-base font-bold text-white">Ingeniería & Desarrollo</h4>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Desarrollo aplicaciones web responsivas, conecto bases de datos relacionales (MySQL / MariaDB) y construyo herramientas en Python integradas con inteligencia artificial.
              </p>
            </div>

            <div className="rounded-2xl border border-[#3b82f6]/25 bg-[#05080f] p-6">
              <div className="flex items-center gap-3 mb-2 text-[#38bdf8]">
                <Users className="h-5 w-5" />
                <h4 className="text-base font-bold text-white">Comunicación & Trabajo en Equipo</h4>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Facilidad para comunicar ideas técnicas de forma clara y directa, colaborar con metodologías ágiles (Scrum) y adaptarme rápidamente a nuevos retos.
              </p>
            </div>

            <div className="rounded-2xl border border-[#3b82f6]/35 bg-[#3b82f6]/10 p-4 text-center">
              <div className="text-xs uppercase font-mono tracking-wider text-[#38bdf8] mb-1 font-bold">
                📍 Ubicación Actual
              </div>
              <div className="text-sm font-bold text-white">
                {personal.location}
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                Disponible para trabajar en proyectos presenciales o remotos
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
