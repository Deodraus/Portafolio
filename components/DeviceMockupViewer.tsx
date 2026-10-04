"use client";

import { useState } from "react";
import Image from "next/image";
import { portfolioData, Project, ProjectScreenshot } from "@/data/portfolioData";
import {
  Laptop,
  Globe,
  Smartphone,
  Maximize2,
  X,
  Sun,
  Moon,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Layers,
  Palette,
  ShieldCheck,
  LayoutGrid,
  MonitorOff,
  Monitor
} from "lucide-react";

interface DeviceMockupViewerProps {
  currentPersona?: "dev" | "creator";
}

export default function DeviceMockupViewer({ currentPersona = "dev" }: DeviceMockupViewerProps) {
  const [selectedProjectId, setSelectedProjectId] = useState<string>("vitline");
  const [selectedScreenshotIndex, setSelectedScreenshotIndex] = useState<number>(0);
  const [deviceMode, setDeviceMode] = useState<"laptop" | "browser" | "figma" | "mobile">("laptop");
  const [browserTheme, setBrowserTheme] = useState<"dark" | "light">("dark");
  const [showFigmaGrid, setShowFigmaGrid] = useState<boolean>(false);
  const [bgAtmosphere, setBgAtmosphere] = useState<"obsidian" | "blue" | "pink" | "emerald">("obsidian");
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const selectedProject =
    portfolioData.projects.find((p) => p.id === selectedProjectId) || portfolioData.projects[0];

  // If current project does not support mobile, prevent mobile view
  const isMobileSupported = selectedProject.hasMobileSupport;

  // Active display image depending on deviceMode
  const activeScreenshot: ProjectScreenshot =
    deviceMode === "mobile" && selectedProject.mobileScreenshot
      ? selectedProject.mobileScreenshot
      : selectedProject.screenshots[selectedScreenshotIndex] ||
        selectedProject.screenshots[0] || {
          url: "/img/demostracion.png",
          title: selectedProject.title,
          caption: selectedProject.tagline,
          badge: "Vista General"
        };

  const handleSelectProject = (projectId: string) => {
    const targetProject = portfolioData.projects.find((p) => p.id === projectId);
    setSelectedProjectId(projectId);
    setSelectedScreenshotIndex(0);

    // If target project doesn't have mobile support (e.g. miasistente / calculadora)
    // and user is on mobile mode, automatically switch back to laptop
    if (targetProject && !targetProject.hasMobileSupport && deviceMode === "mobile") {
      setDeviceMode("laptop");
    }
  };

  const handleNextScreenshot = () => {
    if (selectedProject.screenshots.length > 1) {
      setSelectedScreenshotIndex((prev) => (prev + 1) % selectedProject.screenshots.length);
    }
  };

  const handlePrevScreenshot = () => {
    if (selectedProject.screenshots.length > 1) {
      setSelectedScreenshotIndex(
        (prev) => (prev - 1 + selectedProject.screenshots.length) % selectedProject.screenshots.length
      );
    }
  };

  // Atmosphere glow color styles
  const getAtmosphereGlow = () => {
    switch (bgAtmosphere) {
      case "blue":
        return "radial-gradient(ellipse 65% 55% at 50% 45%, rgba(0, 210, 255, 0.22) 0%, transparent 70%)";
      case "pink":
        return "radial-gradient(ellipse 65% 55% at 50% 45%, rgba(255, 42, 133, 0.24) 0%, transparent 70%)";
      case "emerald":
        return "radial-gradient(ellipse 65% 55% at 50% 45%, rgba(16, 185, 129, 0.2) 0%, transparent 70%)";
      default:
        return "radial-gradient(ellipse 65% 55% at 50% 45%, rgba(255, 255, 255, 0.08) 0%, transparent 70%)";
    }
  };

  // URL simulated for browser omnibox
  const getProjectUrl = (id: string) => {
    switch (id) {
      case "vitline":
        return "https://vitline.co/reservas/vuelos";
      case "proyectmdia":
        return "https://proyectomdia.edu.co/portal";
      case "miasistente":
        return "localhost:app/miasistente-gemini-desktop";
      case "quipux":
        return "https://github.com/Deodraus/semillero-quipux";
      default:
        return "https://jeronimodeossa.dev";
    }
  };

  return (
    <div className="w-full">
      {/* Top Controls Bar inspired by demostracion.png */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-8 bg-[#0a0e14]/90 p-4 sm:p-5 rounded-3xl border border-white/10 backdrop-blur-xl shadow-2xl">
        {/* Device Mode Switcher */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          <span className="text-xs font-mono text-slate-400 mr-1 hidden sm:inline-block">
            Formato de Maqueta:
          </span>

          <button
            onClick={() => setDeviceMode("laptop")}
            className={`badge-pill-demo cursor-pointer ${deviceMode === "laptop" ? "active" : ""}`}
            title="Maqueta de MacBook Pro en pantalla completa"
          >
            <Laptop className="h-3.5 w-3.5" />
            <span>Portátil MacBook (PC)</span>
          </button>

          <button
            onClick={() => setDeviceMode("browser")}
            className={`badge-pill-demo cursor-pointer ${deviceMode === "browser" ? "active" : ""}`}
            title="Ventana de Navegador Web con Modo Claro / Oscuro"
          >
            <Globe className="h-3.5 w-3.5" />
            <span>Ventana Navegador (PC)</span>
          </button>

          <button
            onClick={() => setDeviceMode("figma")}
            className={`badge-pill-demo cursor-pointer ${deviceMode === "figma" ? "active" : ""}`}
            title="Lienzo adaptable estilo Figma con cuadrícula"
          >
            <LayoutGrid className="h-3.5 w-3.5" />
            <span>Figma Adaptable</span>
          </button>

          {/* Conditional Mobile Button: Hidden or disabled when project is Desktop-only */}
          {isMobileSupported ? (
            <button
              onClick={() => setDeviceMode("mobile")}
              className={`badge-pill-demo cursor-pointer ${deviceMode === "mobile" ? "active" : ""}`}
              title="Ver diseño en teléfono celular móvil"
            >
              <Smartphone className="h-3.5 w-3.5 text-cyan-400" />
              <span>Celular / Móvil</span>
            </button>
          ) : (
            <div
              className="badge-pill-demo opacity-60 bg-amber-500/10 border-amber-500/30 text-amber-300 text-[11px]"
              title="La Calculadora de Funciones y MiAsistente fueron programados exclusivamente para PC (Python/Desktop)"
            >
              <Monitor className="h-3.5 w-3.5 text-amber-400" />
              <span>Solo PC / Escritorio</span>
            </div>
          )}
        </div>

        {/* Changeable Background Color Picker (Fiel a demostracion.png) */}
        <div className="flex items-center gap-3">
          <span className="badge-pill-demo text-[10px] py-1">
            <Palette className="h-3 w-3" />
            <span className="hidden sm:inline">Luz de Fondo:</span>
          </span>
          <div className="flex items-center gap-1.5 p-1 rounded-full bg-black/60 border border-white/15">
            <button
              onClick={() => setBgAtmosphere("obsidian")}
              title="Aura Obsidiana Neutra"
              className={`h-5 w-5 rounded-full bg-slate-700 transition-all cursor-pointer ${
                bgAtmosphere === "obsidian" ? "ring-2 ring-white scale-110" : "opacity-60 hover:opacity-100"
              }`}
            />
            <button
              onClick={() => setBgAtmosphere("blue")}
              title="Aura Azul Cyber (Modo Desarrollador)"
              className={`h-5 w-5 rounded-full bg-[#00d2ff] transition-all cursor-pointer ${
                bgAtmosphere === "blue" ? "ring-2 ring-white scale-110 shadow-[0_0_10px_#00d2ff]" : "opacity-60 hover:opacity-100"
              }`}
            />
            <button
              onClick={() => setBgAtmosphere("pink")}
              title="Aura Rosa Sakura (Modo Creador)"
              className={`h-5 w-5 rounded-full bg-[#ff2a85] transition-all cursor-pointer ${
                bgAtmosphere === "pink" ? "ring-2 ring-white scale-110 shadow-[0_0_10px_#ff2a85]" : "opacity-60 hover:opacity-100"
              }`}
            />
            <button
              onClick={() => setBgAtmosphere("emerald")}
              title="Aura Verde Neón (Figma Community)"
              className={`h-5 w-5 rounded-full bg-[#10b981] transition-all cursor-pointer ${
                bgAtmosphere === "emerald" ? "ring-2 ring-white scale-110 shadow-[0_0_10px_#10b981]" : "opacity-60 hover:opacity-100"
              }`}
            />
          </div>

          {/* Browser light/dark mode switch when browser mode is active */}
          {deviceMode === "browser" && (
            <button
              onClick={() => setBrowserTheme(browserTheme === "dark" ? "light" : "dark")}
              className="badge-pill-demo cursor-pointer"
              title="Alternar modo claro / modo oscuro del navegador"
            >
              {browserTheme === "dark" ? (
                <>
                  <Sun className="h-3.5 w-3.5 text-amber-300" />
                  <span className="hidden sm:inline">Tema Claro</span>
                </>
              ) : (
                <>
                  <Moon className="h-3.5 w-3.5 text-cyan-300" />
                  <span className="hidden sm:inline">Tema Oscuro</span>
                </>
              )}
            </button>
          )}

          {/* Figma grid toggle */}
          {deviceMode === "figma" && (
            <button
              onClick={() => setShowFigmaGrid(!showFigmaGrid)}
              className={`badge-pill-demo cursor-pointer ${showFigmaGrid ? "active" : ""}`}
              title="Mostrar u ocultar cuadrícula de diseño"
            >
              <LayoutGrid className="h-3.5 w-3.5" />
              <span>{showFigmaGrid ? "Ocultar Guías" : "Cuadrícula 8px"}</span>
            </button>
          )}
        </div>
      </div>

      {/* Project Selector Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8">
        {portfolioData.projects.map((proj) => {
          const isSelected = selectedProjectId === proj.id;
          return (
            <button
              key={proj.id}
              onClick={() => handleSelectProject(proj.id)}
              className={`rounded-full px-4 sm:px-5 py-2 text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                isSelected
                  ? "bg-white text-black shadow-[0_0_25px_rgba(255,255,255,0.4)] scale-105"
                  : "bg-[#0d1218]/90 border border-white/15 text-slate-300 hover:text-white hover:border-white/30"
              }`}
            >
              <span
                className={`h-2 w-2 rounded-full ${
                  isSelected ? "bg-[#00d2ff] animate-ping" : "bg-slate-500"
                }`}
              />
              <span>{proj.title}</span>
              {proj.hasMobileSupport ? (
                <span className="text-[10px] opacity-75 font-mono bg-cyan-950/60 text-cyan-300 border border-cyan-800/50 px-2 py-0.5 rounded-full">
                  PC & Celular
                </span>
              ) : (
                <span className="text-[10px] opacity-75 font-mono bg-amber-950/60 text-amber-300 border border-amber-800/50 px-2 py-0.5 rounded-full">
                  Solo PC
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Main Studio Arena with Ambient Lighting Aura */}
      <div className="relative rounded-3xl border border-white/10 bg-[#06080c] p-4 sm:p-8 md:p-12 overflow-hidden shadow-2xl">
        {/* Dynamic Studio Lighting Backdrop */}
        <div
          className="absolute inset-0 transition-all duration-700 pointer-events-none"
          style={{ background: getAtmosphereGlow() }}
        />

        {/* Subtle Vercel dot matrix pattern */}
        <div className="absolute inset-0 bg-dots-pattern opacity-30 pointer-events-none" />

        {/* Pill Badges floating at corners (Direct reference to demostracion.png) */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="badge-pill-demo">
              <span>2560 x 2040</span>
            </span>
            <span className="badge-pill-demo">
              <span>CHANGEABLE BG COLOR</span>
            </span>
            {deviceMode === "mobile" ? (
              <span className="badge-pill-demo text-cyan-300 border-cyan-500/40">
                <Smartphone className="h-3 w-3" />
                <span>VISTA CELULAR</span>
              </span>
            ) : (
              <span className="badge-pill-demo">
                <Laptop className="h-3 w-3" />
                <span>VISTA PC / ESCRITORIO</span>
              </span>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {!selectedProject.hasMobileSupport && (
              <span className="badge-pill-demo text-amber-300 border-amber-500/40">
                <Monitor className="h-3 w-3" />
                <span>EXCLUSIVO PC</span>
              </span>
            )}
            <span className="badge-pill-demo">
              <Layers className="h-3 w-3" />
              <span>LAYERED</span>
            </span>
            <button
              onClick={() => setModalOpen(true)}
              className="badge-pill-demo cursor-pointer hover:scale-105"
              title="Expandir captura en pantalla completa"
            >
              <Maximize2 className="h-3 w-3" />
              <span>Inspeccionar</span>
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 1. MAQUETA DE PORTÁTIL (MACBOOK MOCKUP)                                    */}
        {/* ========================================================================= */}
        {deviceMode === "laptop" && (
          <div className="relative z-10 mx-auto max-w-4xl py-4 sm:py-6 animate-fadeIn">
            {/* Screen Lid */}
            <div className="relative mx-auto rounded-[24px] sm:rounded-[32px] p-2.5 sm:p-3.5 bg-gradient-to-b from-[#2a3038] via-[#1a1e24] to-[#0c0e12] border border-white/20 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_30px_rgba(255,255,255,0.05)]">
              {/* Outer screen bezel */}
              <div className="relative rounded-[16px] sm:rounded-[22px] overflow-hidden bg-black border border-black/80 aspect-[16/10] shadow-inner group">
                {/* MacBook Camera Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 z-30 h-4 sm:h-5 w-24 sm:w-32 bg-[#0c0e12] rounded-b-xl flex items-center justify-center border-b border-x border-white/10 shadow-md">
                  <div className="h-2 w-2 rounded-full bg-[#18202b] border border-white/20 flex items-center justify-center">
                    <div className="h-0.5 w-0.5 rounded-full bg-cyan-400" />
                  </div>
                </div>

                {/* Screenshot inside laptop display */}
                <div className="relative w-full h-full bg-[#080b0f] overflow-hidden">
                  <Image
                    src={activeScreenshot.url}
                    alt={activeScreenshot.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 960px"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                  />

                  {/* Anti-reflective glass sheen overlay */}
                  <div className="absolute inset-0 screen-sheen pointer-events-none" />

                  {/* Multi-screenshot carousel arrows on hover if multiple images exist */}
                  {selectedProject.screenshots.length > 1 && (
                    <>
                      <button
                        onClick={handlePrevScreenshot}
                        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 h-9 w-9 rounded-full bg-black/70 border border-white/20 text-white flex items-center justify-center hover:bg-black hover:scale-110 transition-all opacity-0 group-hover:opacity-100 cursor-pointer"
                        title="Captura anterior en PC"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>
                      <button
                        onClick={handleNextScreenshot}
                        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 h-9 w-9 rounded-full bg-black/70 border border-white/20 text-white flex items-center justify-center hover:bg-black hover:scale-110 transition-all opacity-0 group-hover:opacity-100 cursor-pointer"
                        title="Captura siguiente en PC"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </>
                  )}

                  {/* Corner Badge Tag */}
                  <div className="absolute bottom-3 left-3 z-20">
                    <span className="rounded-full bg-black/80 border border-white/20 px-3 py-1 text-[11px] font-mono text-white backdrop-blur-md">
                      {activeScreenshot.badge || "PC"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Laptop Aluminum Chin & Opening Lip */}
            <div className="relative mx-auto -mt-1 sm:-mt-1.5 w-[92%] sm:w-[90%] h-3.5 sm:h-5 bg-gradient-to-b from-[#2e353f] via-[#21262d] to-[#12161c] rounded-b-md border-t border-white/20 shadow-md">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-1.5 sm:h-2 w-14 sm:w-20 bg-[#0d1014] rounded-b-md border-b border-white/10" />
            </div>

            {/* Laptop Base / Keyboard Chassis Underbody with realistic perspective depth */}
            <div className="relative mx-auto w-full h-3 sm:h-4 bg-gradient-to-b from-[#181c22] via-[#0d1014] to-[#050608] rounded-b-[24px] sm:rounded-b-[32px] border-b border-white/10 shadow-[0_20px_35px_rgba(0,0,0,0.95)]">
              {/* Bottom rubber feet indicators */}
              <div className="absolute bottom-0.5 left-10 h-1 w-8 rounded-full bg-black/80" />
              <div className="absolute bottom-0.5 right-10 h-1 w-8 rounded-full bg-black/80" />
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 2. MAQUETA DE VENTANA DE NAVEGADOR (MODO CLARO / MODO OSCURO)             */}
        {/* ========================================================================= */}
        {deviceMode === "browser" && (
          <div className="relative z-10 mx-auto max-w-4xl py-2 animate-fadeIn">
            <div
              className={`rounded-2xl sm:rounded-3xl border overflow-hidden shadow-2xl transition-colors duration-500 ${
                browserTheme === "dark"
                  ? "bg-[#0b0e14] border-white/15 text-white shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
                  : "bg-[#f8fafc] border-slate-300 text-slate-900 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
              }`}
            >
              {/* Browser Header Bar */}
              <div
                className={`px-4 sm:px-6 py-3 border-b flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                  browserTheme === "dark"
                    ? "bg-[#111620] border-white/10"
                    : "bg-[#e2e8f0] border-slate-300"
                }`}
              >
                {/* Traffic lights & tabs */}
                <div className="flex items-center gap-4">
                  {/* Traffic Light Buttons */}
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-[#ff5f56] border border-black/20" />
                    <span className="h-3 w-3 rounded-full bg-[#ffbd2e] border border-black/20" />
                    <span className="h-3 w-3 rounded-full bg-[#27c93f] border border-black/20" />
                  </div>

                  {/* Active tab */}
                  <div
                    className={`flex items-center gap-2 px-3 py-1 rounded-t-lg text-xs font-mono font-medium border-t border-x ${
                      browserTheme === "dark"
                        ? "bg-[#0b0e14] border-white/10 text-slate-200"
                        : "bg-[#f8fafc] border-slate-300 text-slate-800"
                    }`}
                  >
                    <span className="h-2 w-2 rounded-full bg-cyan-400" />
                    <span className="truncate max-w-[150px] sm:max-w-[200px]">
                      {activeScreenshot.title}
                    </span>
                  </div>
                </div>

                {/* Omnibox URL Bar */}
                <div
                  className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono flex-1 max-w-md border ${
                    browserTheme === "dark"
                      ? "bg-[#080b0f] border-white/10 text-slate-300"
                      : "bg-white border-slate-300 text-slate-700 shadow-sm"
                  }`}
                >
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                  <span className="truncate flex-1 text-[11px]">
                    {getProjectUrl(selectedProject.id)}
                  </span>
                  <span className="text-[10px] text-slate-400 uppercase">PC LOCAL / WEB</span>
                </div>

                {/* Theme indicator pill */}
                <div className="hidden sm:flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                  <span>Navegador: {browserTheme === "dark" ? "🌙 Oscuro" : "☀️ Claro"}</span>
                </div>
              </div>

              {/* Browser Content Frame */}
              <div className="relative aspect-[16/10] w-full bg-black overflow-hidden group">
                <Image
                  src={activeScreenshot.url}
                  alt={activeScreenshot.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 960px"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                />

                {/* Multi-screenshot carousel buttons */}
                {selectedProject.screenshots.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevScreenshot}
                      className="absolute left-3 top-1/2 -translate-y-1/2 z-20 h-9 w-9 rounded-full bg-black/70 border border-white/20 text-white flex items-center justify-center hover:bg-black transition-all cursor-pointer"
                      title="Captura anterior en PC"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={handleNextScreenshot}
                      className="absolute right-3 top-1/2 -translate-y-1/2 z-20 h-9 w-9 rounded-full bg-black/70 border border-white/20 text-white flex items-center justify-center hover:bg-black transition-all cursor-pointer"
                      title="Captura siguiente en PC"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 3. MAQUETA ADAPTABLE PARA FIGMA                                           */}
        {/* ========================================================================= */}
        {deviceMode === "figma" && (
          <div className="relative z-10 mx-auto max-w-4xl py-2 animate-fadeIn">
            {/* Figma Frame Container */}
            <div className="rounded-2xl border-2 border-[#00d2ff]/80 bg-[#1e1e1e] p-3 sm:p-4 shadow-2xl relative">
              {/* Figma Canvas Label at Top Left */}
              <div className="flex items-center justify-between mb-2 px-1">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded bg-[#00d2ff] text-black px-2 py-0.5 text-[11px] font-mono font-bold">
                    # Frame - 1440 x 900 (PC)
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">
                    Auto-layout • Clip content: On
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-mono text-slate-400">
                  <span className="border border-white/20 px-1.5 py-0.5 rounded">100%</span>
                  <span className="border border-white/20 px-1.5 py-0.5 rounded hidden sm:inline">
                    W: 1440 H: 900
                  </span>
                </div>
              </div>

              {/* Inner screen with optional 8px grid overlay */}
              <div className="relative rounded-xl overflow-hidden aspect-[16/10] bg-black border border-white/10 group">
                <Image
                  src={activeScreenshot.url}
                  alt={activeScreenshot.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 960px"
                  className="object-cover object-top"
                />

                {/* Optional Figma 8px Layout Grid Overlay */}
                {showFigmaGrid && (
                  <div
                    className="absolute inset-0 pointer-events-none z-20 opacity-30"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, rgba(239, 68, 68, 0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(239, 68, 68, 0.4) 1px, transparent 1px)",
                      backgroundSize: "8px 8px"
                    }}
                  />
                )}

                {/* Carousel arrows */}
                {selectedProject.screenshots.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevScreenshot}
                      className="absolute left-3 top-1/2 -translate-y-1/2 z-30 h-8 w-8 rounded-full bg-black/70 border border-white/20 text-white flex items-center justify-center hover:bg-black transition-all cursor-pointer"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                      onClick={handleNextScreenshot}
                      className="absolute right-3 top-1/2 -translate-y-1/2 z-30 h-8 w-8 rounded-full bg-black/70 border border-white/20 text-white flex items-center justify-center hover:bg-black transition-all cursor-pointer"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </>
                )}
              </div>

              {/* Figma Corner Handles */}
              <div className="absolute -top-1.5 -left-1.5 h-3 w-3 bg-white border border-[#00d2ff] rounded-xs" />
              <div className="absolute -top-1.5 -right-1.5 h-3 w-3 bg-white border border-[#00d2ff] rounded-xs" />
              <div className="absolute -bottom-1.5 -left-1.5 h-3 w-3 bg-white border border-[#00d2ff] rounded-xs" />
              <div className="absolute -bottom-1.5 -right-1.5 h-3 w-3 bg-white border border-[#00d2ff] rounded-xs" />
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 4. DISPOSITIVO MÓVIL (COMPACT SMARTPHONE VIEWPORT - SOLO SI TIENE SOPORTE)*/}
        {/* ========================================================================= */}
        {deviceMode === "mobile" && isMobileSupported && (
          <div className="relative z-10 mx-auto max-w-xs py-4 animate-fadeIn">
            <div className="relative rounded-[46px] p-3.5 bg-gradient-to-b from-[#2a3038] via-[#1a1e24] to-[#0c0e12] border-2 border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.95)]">
              {/* Phone Dynamic Island */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 z-30 h-5 w-24 bg-black rounded-full border border-white/10 flex items-center justify-end px-3">
                <div className="h-2 w-2 rounded-full bg-[#1e293b] border border-white/20" />
              </div>

              {/* Screen displaying real mobile/phone screenshot */}
              <div className="relative rounded-[34px] overflow-hidden bg-black aspect-[9/19] border border-black shadow-inner">
                <Image
                  src={activeScreenshot.url}
                  alt={activeScreenshot.title}
                  fill
                  sizes="320px"
                  className="object-cover object-top"
                />

                {/* Home Indicator Bar */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-30 h-1 w-28 bg-white/70 rounded-full" />
              </div>
            </div>
          </div>
        )}

        {/* Screenshot Sub-Selector Bar (For PC multi-view projects like VitLine or MiAsistente/Calculadora) */}
        {deviceMode !== "mobile" && selectedProject.screenshots.length > 1 && (
          <div className="relative z-10 mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-center gap-3">
            <span className="text-xs font-mono text-slate-400">Vistas en PC de {selectedProject.title}:</span>
            {selectedProject.screenshots.map((sc, idx) => (
              <button
                key={sc.url}
                onClick={() => setSelectedScreenshotIndex(idx)}
                className={`rounded-xl px-3.5 py-1.5 text-xs font-mono font-medium transition-all cursor-pointer ${
                  selectedScreenshotIndex === idx
                    ? "bg-[#00d2ff] text-black font-bold shadow-[0_0_15px_rgba(0,210,255,0.6)]"
                    : "bg-[#0d1218] border border-white/10 text-slate-300 hover:text-white"
                }`}
              >
                {sc.title}
              </button>
            ))}
          </div>
        )}

        {/* Current Screenshot Caption & Details */}
        <div className="relative z-10 mt-4 text-center">
          <h4 className="text-sm sm:text-base font-bold text-white flex items-center justify-center gap-2">
            <span>{activeScreenshot.title}</span>
            {deviceMode === "mobile" && (
              <span className="text-[10px] bg-cyan-900/60 text-cyan-300 border border-cyan-700/50 px-2 py-0.5 rounded-full font-mono">
                📱 Celular
              </span>
            )}
            {!selectedProject.hasMobileSupport && (
              <span className="text-[10px] bg-amber-900/60 text-amber-300 border border-amber-700/50 px-2 py-0.5 rounded-full font-mono">
                🖥️ Aplicación de Escritorio
              </span>
            )}
          </h4>
          <p className="text-xs text-slate-400 mt-1 max-w-xl mx-auto">
            {activeScreenshot.caption}
          </p>
        </div>
      </div>

      {/* Fullscreen Inspector Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-8 backdrop-blur-2xl animate-fadeIn">
          <div className="relative max-w-6xl w-full bg-[#0c1015] border border-white/20 rounded-3xl p-4 sm:p-6 shadow-2xl flex flex-col max-h-[90vh]">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div>
                <h3 className="text-lg font-bold text-white">{activeScreenshot.title}</h3>
                <p className="text-xs text-slate-400">{selectedProject.title} • Captura en Alta Resolución</p>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="p-2 rounded-full bg-white/10 text-slate-200 hover:text-white hover:bg-white/20 transition-all cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="relative flex-1 min-h-[400px] my-4 rounded-2xl overflow-hidden bg-black border border-white/10">
              <Image
                src={activeScreenshot.url}
                alt={activeScreenshot.title}
                fill
                className="object-contain"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>

            <div className="flex items-center justify-between pt-2 text-xs font-mono text-slate-400">
              <span>{activeScreenshot.caption}</span>
              <button
                onClick={() => setModalOpen(false)}
                className="badge-pill-demo cursor-pointer"
              >
                Cerrar vista
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
