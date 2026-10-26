import { portfolioData } from "@/data/portfolioData";
import { GraduationCap, Award, CheckCircle2, BookOpen, Layers } from "lucide-react";

export default function ExperienceEducation() {
  const { education } = portfolioData;

  const competencies = [
    { name: "Frontend II", desc: "Creación de interfaces web interactivas, responsivas y de alto rendimiento." },
    { name: "Backend II", desc: "Programación de la lógica del servidor, arquitectura MVC y manejo de datos." },
    { name: "Bases de Datos", desc: "Modelado y consulta de información estructurada en MariaDB y MySQL." },
    { name: "Metodologías Ágiles", desc: "Trabajo colaborativo en equipo con Scrum, tareas organizadas y entregas puntuales." },
    { name: "Lógica de Programación", desc: "Resolución estructurada de algoritmos, retos matemáticos y problemas de código." },
    { name: "Nuevas Tecnologías", desc: "Integración de inteligencia artificial (Gemini API) y herramientas modernas." }
  ];

  return (
    <section id="educacion" className="py-20 md:py-28 relative z-10 border-t border-[#3b82f6]/20 bg-black">
      <div className="mx-auto max-w-7xl px-6 sm:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#3b82f6]/35 bg-[#3b82f6]/10 px-3.5 py-1 text-xs font-mono text-[#38bdf8] mb-3">
            <GraduationCap className="h-3.5 w-3.5" />
            Educación & Experiencia
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Mi formación{" "}
            <span className="text-[#3b82f6]">técnica</span>{" "}
            <span className="text-[#38bdf8]">& práctica</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300">
            Aprender construyendo: proyectos reales, código funcional y trabajo en equipo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Degree Card */}
          <div className="lg:col-span-7 rounded-2xl border border-[#3b82f6]/25 bg-[#05080f] p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between shadow-lg">
            <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
              <Award className="h-44 w-44 text-[#3b82f6]" />
            </div>

            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <span className="rounded-full bg-[#3b82f6]/10 border border-[#3b82f6]/35 px-3 py-1 text-xs font-mono font-semibold text-[#38bdf8]">
                  Título Técnico Oficial
                </span>
                <span className="text-xs font-mono text-slate-400">Medellín, Colombia</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 leading-tight">
                {education[0].degree}
              </h3>

              <div className="text-sm font-semibold text-[#3b82f6] mb-4">
                {education[0].institution}
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                {education[0].description}
              </p>

              <div className="space-y-2.5 pt-4 border-t border-[#3b82f6]/20">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                  Logros y competencias aplicadas:
                </div>
                {education[0].achievements.map((ach) => (
                  <div key={ach} className="flex items-center gap-2.5 text-sm text-slate-200">
                    <CheckCircle2 className="h-4 w-4 text-[#38bdf8] shrink-0" />
                    <span>{ach}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 rounded-xl bg-black border border-[#3b82f6]/25 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#3b82f6]/10 text-[#38bdf8]">
                  <BookOpen className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">100% Enfoque Práctico</div>
                  <div className="text-[11px] text-slate-400">Formación orientada al desarrollo de soluciones reales</div>
                </div>
              </div>
            </div>
          </div>

          {/* Competency Modules Grid */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-3">
            <div className="rounded-2xl border border-[#3b82f6]/25 bg-[#05080f] p-6 shadow-lg h-full">
              <div className="flex items-center gap-2 mb-4 text-sm font-bold text-white uppercase tracking-wider">
                <Layers className="h-4 w-4 text-[#38bdf8]" />
                Módulos y Competencias Aprobadas
              </div>
              <div className="grid grid-cols-1 gap-2.5">
                {competencies.map((comp) => (
                  <div
                    key={comp.name}
                    className="rounded-xl border border-[#3b82f6]/20 bg-black p-3 hover:border-[#38bdf8] transition-all"
                  >
                    <div className="text-sm font-bold text-[#38bdf8]">
                      {comp.name}
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5 leading-snug">
                      {comp.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
