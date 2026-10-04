"use client";

export default function FloatingDecorations() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Vercel / Linear Style Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern radial-fade-mask opacity-60" />

      {/* Mesh Gradient Ambient Lighting (Meshgradient.in / CSS Hero inspired) */}
      <div className="absolute inset-0 mesh-gradient-ambient opacity-80 transition-opacity duration-700" />

      {/* Floating geometric 3D-inspired chrome shapes (from demostracion.png aesthetic) */}
      {/* Circle top left */}
      <div className="absolute top-[8%] left-[6%] animate-float-1 opacity-70">
        <div className="h-16 w-16 rounded-full border border-white/20 floating-shape-ring backdrop-blur-md" />
      </div>

      {/* Rounded diamond top right */}
      <div className="absolute top-[14%] right-[10%] animate-float-2 opacity-60">
        <div className="h-12 w-12 rotate-45 rounded-2xl border border-white/20 floating-shape-ring backdrop-blur-md" />
      </div>

      {/* Geometric ring center right */}
      <div className="absolute top-[45%] right-[4%] animate-float-3 opacity-40">
        <div className="h-28 w-28 rounded-full border border-dashed border-white/15 floating-shape-ring" />
      </div>

      {/* Triangle mid left */}
      <div className="absolute top-[55%] left-[3%] animate-float-2 opacity-50">
        <div className="w-0 h-0 -rotate-45 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[20px] floating-shape-triangle" />
      </div>

      {/* Futuristic Pill Capsule bottom left */}
      <div className="absolute bottom-[20%] left-[8%] animate-float-1 opacity-40">
        <div className="h-8 w-24 rounded-full border border-white/15 floating-shape-ring" />
      </div>

      {/* Rounded diamond bottom right */}
      <div className="absolute bottom-[14%] right-[8%] animate-float-2 opacity-60">
        <div className="h-14 w-14 rotate-45 rounded-2xl border border-white/20 floating-shape-ring backdrop-blur-md" />
      </div>

      {/* Large subtle ambient glow sphere */}
      <div className="absolute -top-[20%] left-[30%] h-[500px] w-[500px] rounded-full blur-[120px] opacity-20 pointer-events-none"
        style={{ backgroundColor: "var(--neon-accent)" }}
      />
    </div>
  );
}

