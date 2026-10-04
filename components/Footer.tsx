import { portfolioData } from "@/data/portfolioData";
import { ArrowUp, Heart } from "lucide-react";

export default function Footer() {
  const { personal } = portfolioData;

  return (
    <footer className="relative z-10 border-t border-neon-subtle bg-[#080b0e] py-12 text-slate-400">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 text-white font-bold text-lg">
              <span className="text-neon-glow font-extrabold text-xl">Portfolio</span>
              <span className="text-xs font-mono text-slate-400">• {personal.fullName}</span>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Desarrollador de Software & Creador de Contenido ({personal.artisticName}) • {personal.location}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-slate-300">
            <a href="#inicio" className="hover:text-neon-accent transition-colors">Inicio</a>
            <a href="#sobre-mi" className="hover:text-neon-accent transition-colors">Sobre Mí</a>
            <a href="#proyectos" className="hover:text-neon-accent transition-colors">Proyectos</a>
            <a href="#habilidades" className="hover:text-neon-accent transition-colors">Habilidades</a>
            <a href="#hobbies" className="hover:text-neon-accent transition-colors">Hobbies</a>
            <a href="#contacto" className="hover:text-neon-accent transition-colors">Contacto</a>
          </div>

          <div>
            <a
              href="#inicio"
              className="inline-flex items-center gap-1.5 rounded-full border border-neon-subtle bg-[#0c1015] px-4 py-2 text-xs font-semibold text-slate-200 hover:text-neon-accent hover:border-neon-hover transition-all"
            >
              <span>Subir al inicio</span>
              <ArrowUp className="h-3.5 w-3.5 text-neon-accent" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-neon-subtle flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center">
          <div className="flex items-center gap-1">
            <span>Hecho con ganas de aportar y aprender siempre</span>
            <Heart className="h-3.5 w-3.5 text-neon-accent inline fill-current" />
          </div>

          <div className="font-mono text-[11px] text-slate-400">
            Next.js 16 • Tailwind CSS • Vercel / Netlify Ready
          </div>
        </div>
      </div>
    </footer>
  );
}
