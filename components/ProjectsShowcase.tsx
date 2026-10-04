"use client";

import { useState } from "react";
import Image from "next/image";
import { portfolioData, Project } from "@/data/portfolioData";
import DeviceMockupViewer from "@/components/DeviceMockupViewer";
import {
  FolderGit2,
  Plane,
  Bot,
  School,
  Cpu,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  MessageSquare,
  Sparkles,
  Laptop,
  Layers,
  ArrowUpRight
} from "lucide-react";

export default function ProjectsShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");
  const [expandedId, setExpandedId] = useState<string | null>("vitline");

  const categories = [
    "Todos",
    "Full Stack",
    "IA & Desktop",
    "Web Institucional",
    "Investigación & Semillero"
  ];

  const filteredProjects =
    selectedCategory === "Todos"
      ? portfolioData.projects
      : portfolioData.projects.filter((p) => p.category === selectedCategory);

  const getProjectIcon = (id: string) => {
    switch (id) {
      case "vitline":
        return <Plane className="h-6 w-6 text-neon-accent" />;
      case "miasistente":
        return <Bot className="h-6 w-6 text-neon-accent" />;
      case "proyectmdia":
        return <School className="h-6 w-6 text-neon-accent" />;
      case "quipux":
        return <Cpu className="h-6 w-6 text-neon-accent" />;
      default:
        return <FolderGit2 className="h-6 w-6 text-neon-accent" />;
    }
  };

  return (
    <section id="proyectos" className="py-20 md:py-28 relative z-10 border-t border-neon-subtle">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-neon-subtle bg-neon-subtle px-3.5 py-1 text-xs font-mono text-neon-accent mb-3">
            <FolderGit2 className="h-3.5 w-3.5" />
            Portafolio de Software & Proyectos
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Cosas que he <span className="text-neon-glow">construido</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300">
            Explora mis proyectos dentro del estudio de maquetas interactivas: MacBook Pro, Ventana de Navegador Web (modo claro/oscuro) y Lienzo Adaptable Figma.
          </p>

          {/* Aesthetic Badges matching demostracion.png */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <span className="badge-pill-demo">
              <span>MAQUETA DE PORTÁTIL</span>
            </span>
            <span className="badge-pill-demo">
              <span>VENTANA NAVEGADOR CLARO/OSCURO</span>
            </span>
            <span className="badge-pill-demo">
              <span>ADAPTABLE FIGMA</span>
            </span>
          </div>
        </div>

        {/* Featured Centerpiece: Interactive Device Mockup Viewer */}
        <div className="mb-20">
          <DeviceMockupViewer />
        </div>

        {/* Project Breakdown Cards Title & Filters */}
        <div className="text-center max-w-2xl mx-auto mb-10 pt-8 border-t border-white/10">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            Detalle Técnico de Cada Proyecto
          </h3>
          <p className="mt-2 text-sm text-slate-400">
            Filtra por arquitectura y conoce la solución que aporta cada desarrollo.
          </p>

          {/* Filter Pills */}
          <div className="mt-6 flex flex-wrap justify-center gap-2.5">
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project: Project) => {
            const isExpanded = expandedId === project.id;
            const primaryScreenshot = project.screenshots[0]?.url || "/img/demostracion.png";

            return (
              <div
                key={project.id}
                className="flex flex-col justify-between rounded-3xl border border-neon-subtle bg-[#0c1015]/85 p-6 sm:p-8 backdrop-blur-md transition-all duration-300 hover:border-neon-hover shadow-lg"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3.5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#080b0e] border border-neon-subtle shadow-md">
                        {getProjectIcon(project.id)}
                      </div>
                      <div>
                        <span className="inline-block rounded-full bg-neon-subtle px-2.5 py-0.5 text-[11px] font-mono font-medium text-neon-accent mb-1">
                          {project.category}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-white">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Tagline */}
                  <p className="text-sm font-medium text-neon-accent mb-3">
                    {project.tagline}
                  </p>

                  {/* Thumbnail Preview Banner */}
                  <div className="relative h-44 w-full rounded-2xl overflow-hidden border border-white/10 mb-4 bg-black group">
                    <Image
                      src={primaryScreenshot}
                      alt={project.title}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 500px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Pills over image */}
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between">
                      <span className="rounded-full bg-black/80 border border-white/20 px-2.5 py-0.5 text-[10px] font-mono text-slate-200 backdrop-blur-md">
                        {project.hasMobileSupport ? "🖥️ PC & 📱 Celular" : "🖥️ Solo PC / Escritorio"}
                      </span>
                      <a
                        href="#proyectos"
                        className="rounded-full bg-white/90 text-black px-2.5 py-0.5 text-[10px] font-bold flex items-center gap-1 hover:bg-white transition-transform hover:scale-105"
                      >
                        <span>Ver en maqueta</span>
                        <ArrowUpRight className="h-3 w-3" />
                      </a>
                    </div>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Problem Solved */}
                  <div className="rounded-2xl border border-neon-subtle bg-[#080b0e] p-3.5 mb-4">
                    <div className="text-xs font-bold text-neon-accent mb-1">
                      ¿Para qué sirve este proyecto?
                    </div>
                    <div className="text-xs text-slate-300 leading-relaxed">
                      {project.problemSolved}
                    </div>
                  </div>

                  {/* Highlights pills */}
                  {project.stats && (
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {project.stats.map((st) => (
                        <div
                          key={st.label}
                          className="rounded-xl bg-[#080b0e] border border-neon-subtle p-2 text-center"
                        >
                          <div className="text-xs font-bold text-neon-accent">{st.value}</div>
                          <div className="text-[10px] text-slate-400">{st.label}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Expanded Features */}
                  {isExpanded && (
                    <div className="space-y-3 pt-3 border-t border-neon-subtle animate-fadeIn">
                      <div className="text-xs font-mono text-slate-400">
                        Características clave implementadas:
                      </div>
                      <ul className="space-y-1.5">
                        {project.keyFeatures.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                            <CheckCircle className="h-3.5 w-3.5 text-neon-accent shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-neon-subtle">
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg bg-[#080b0e] border border-neon-subtle px-2.5 py-1 text-[11px] font-mono text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Toggle button & Contact inquiry */}
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => setExpandedId(isExpanded ? null : project.id)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-neon-accent hover:underline cursor-pointer"
                    >
                      <span>{isExpanded ? "Ocultar detalles" : "Ver módulos y funciones"}</span>
                      {isExpanded ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
                    </button>

                    <a
                      href="#contacto"
                      className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-neon-accent"
                    >
                      <MessageSquare className="h-3.5 w-3.5" />
                      <span>Pregúntame sobre él</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
