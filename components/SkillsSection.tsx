"use client";

import { useState } from "react";
import Image from "next/image";
import { portfolioData, TechSkill } from "@/data/portfolioData";
import {
  Code,
  Database,
  Cpu,
  Palette,
  CheckCircle2,
  Sparkles,
  Terminal,
  Layers,
  Wrench
} from "lucide-react";

export default function SkillsSection() {
  const { technicalSkills, softSkills, techIcons } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");

  const categories = [
    "Todos",
    "Lenguajes",
    "Frontend",
    "Backend & DB",
    "Herramientas"
  ];

  const filteredTech =
    selectedCategory === "Todos"
      ? techIcons
      : techIcons.filter((t) => t.category === selectedCategory);

  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Code className="h-5 w-5 text-neon-accent" />;
      case 1:
        return <Database className="h-5 w-5 text-neon-accent" />;
      case 2:
        return <Cpu className="h-5 w-5 text-neon-accent" />;
      case 3:
        return <Palette className="h-5 w-5 text-neon-accent" />;
      default:
        return <Sparkles className="h-5 w-5 text-neon-accent" />;
    }
  };

  return (
    <section id="habilidades" className="py-20 md:py-28 relative z-10 border-t border-neon-subtle">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        
        {/* Header matching demostracion.png aesthetic */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-neon-subtle bg-neon-subtle px-3.5 py-1 text-xs font-mono text-neon-accent mb-3">
            <Terminal className="h-3.5 w-3.5" />
            Stack Tecnológico & Habilidades
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Lenguajes & <span className="text-neon-glow">Tecnologías</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300">
            Los 16 lenguajes y herramientas oficiales que empleo en mis proyectos de software y plataformas digitales.
          </p>

          {/* Badges from demostracion.png */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <span className="badge-pill-demo">
              <span>16 HERRAMIENTAS</span>
            </span>
            <span className="badge-pill-demo">
              <span>SVGL OFICIALES</span>
            </span>
            <span className="badge-pill-demo hidden sm:inline-flex">
              <span>FRONTEND & BACKEND</span>
            </span>
            <span className="badge-pill-demo">
              <span>PROYECTOS REALES</span>
            </span>
          </div>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold transition-all ${
                    isSelected
                      ? "btn-neon-pill"
                      : "bg-[#0c1015] border border-neon-subtle text-slate-300 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* 16 Tech Logos Interactive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6 mb-20">
          {filteredTech.map((tech: TechSkill) => (
            <div
              key={tech.id}
              className="group relative rounded-2xl sm:rounded-3xl border border-white/10 bg-[#0c1015]/85 p-4 sm:p-5 flex flex-col justify-between hover:border-neon-hover hover:scale-[1.02] transition-all duration-300 backdrop-blur-md shadow-lg overflow-hidden"
            >
              {/* Subtle hover gradient background */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
                style={{ backgroundColor: "var(--neon-accent)" }}
              />

              <div>
                <div className="flex items-center justify-between mb-3.5">
                  {/* SVG Logo Container */}
                  <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-[#080b0f] border border-white/10 p-2.5 flex items-center justify-center group-hover:border-neon-subtle group-hover:shadow-[0_0_15px_var(--neon-glow-soft)] transition-all">
                    <div className="relative h-full w-full">
                      <Image
                        src={tech.icon}
                        alt={`${tech.name} logo`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* Level / Category Pill */}
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] font-mono text-neon-accent bg-neon-subtle px-2 py-0.5 rounded-full border border-neon-subtle font-medium">
                      {tech.level}
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono mt-1">
                      {tech.category}
                    </span>
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-neon-glow transition-colors">
                  {tech.name}
                </h3>

                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  {tech.desc}
                </p>
              </div>

              {/* Bottom detail bar */}
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Verificado</span>
                <span className="text-neon-accent font-bold group-hover:translate-x-0.5 transition-transform">
                  ● Activo
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Competencies 4-Card Grid (Especialidades técnicas) */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Especialidades Técnicas & Ruta Formativa
            </h3>
            <p className="text-sm text-slate-400 mt-1">
              Formación integral en desarrollo de software por competencias y producción creativa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalSkills.map((cat, idx) => (
              <div
                key={cat.title}
                className="rounded-3xl border border-neon-subtle bg-[#0c1015]/80 p-6 flex flex-col justify-between hover:border-neon-hover transition-all duration-300 shadow-lg"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-xl bg-[#080b0e] border border-neon-subtle">
                      {getCategoryIcon(idx)}
                    </div>
                    <h4 className="text-base font-bold text-white">{cat.title}</h4>
                  </div>
                  <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                    {cat.description}
                  </p>

                  <div className="space-y-2">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="rounded-xl bg-[#080b0e] border border-neon-subtle p-2.5"
                      >
                        <div className="text-xs font-bold text-slate-200">
                          {skill.name}
                        </div>
                        {skill.note && (
                          <div className="text-[11px] text-neon-accent font-mono mt-0.5">
                            {skill.note}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills Section */}
        <div>
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-neon-subtle bg-neon-subtle px-3 py-1 text-xs font-mono text-neon-accent mb-2">
              <Sparkles className="h-3.5 w-3.5" />
              Cualidades Humanas
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Habilidades Blandas & De Trabajo
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              La parte humana que hace que trabajar juntos sea fácil, transparente y productivo.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {softSkills.map((soft) => (
              <div
                key={soft.name}
                className="rounded-2xl border border-neon-subtle bg-[#0c1015]/60 p-4 hover:border-neon-hover transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-neon-accent mt-0.5 shrink-0" />
                  <div>
                    <h5 className="text-sm font-bold text-white">
                      {soft.name}
                    </h5>
                    <p className="text-xs text-slate-400 mt-1 leading-snug">
                      {soft.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
