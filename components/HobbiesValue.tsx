import { portfolioData, HobbyItem } from "@/data/portfolioData";
import {
  Music,
  Palette,
  Code2,
  Video,
  Radio,
  Gamepad2,
  Film,
  GraduationCap,
  Sparkles
} from "lucide-react";

export default function HobbiesValue() {
  const { hobbies } = portfolioData;

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "Music":
        return <Music className="h-5 w-5 text-neon-accent" />;
      case "Palette":
        return <Palette className="h-5 w-5 text-neon-accent" />;
      case "Code2":
        return <Code2 className="h-5 w-5 text-neon-accent" />;
      case "Video":
        return <Video className="h-5 w-5 text-neon-accent" />;
      case "Radio":
        return <Radio className="h-5 w-5 text-neon-accent" />;
      case "Gamepad2":
        return <Gamepad2 className="h-5 w-5 text-neon-accent" />;
      case "Film":
        return <Film className="h-5 w-5 text-neon-accent" />;
      case "GraduationCap":
        return <GraduationCap className="h-5 w-5 text-neon-accent" />;
      default:
        return <Sparkles className="h-5 w-5 text-neon-accent" />;
    }
  };

  return (
    <section id="hobbies" className="py-20 md:py-28 relative z-10 border-t border-neon-subtle">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-neon-subtle bg-neon-subtle px-3.5 py-1 text-xs font-mono text-neon-accent mb-3">
            <Sparkles className="h-3.5 w-3.5" />
            Mis Pasiones
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Lo que hago cuando no estoy <span className="text-neon-glow">programando</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300">
            Cada hobby me enseña algo que después aplico cuando me siento a escribir código.
          </p>
        </div>

        {/* Hobbies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hobbies.map((hobby: HobbyItem) => (
            <div
              key={hobby.id}
              className="flex flex-col justify-between rounded-3xl border border-neon-subtle bg-[#0c1015]/80 p-6 backdrop-blur-md transition-all duration-300 hover:border-neon-hover hover:-translate-y-1 shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#080b0e] border border-neon-subtle">
                    {renderIcon(hobby.iconName)}
                  </div>
                  <span className="rounded-full bg-[#080b0e] border border-neon-subtle px-2.5 py-0.5 text-[10px] font-mono text-slate-400">
                    {hobby.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">
                  {hobby.title}
                </h3>

                <div className="rounded-2xl border border-neon-subtle bg-[#080b0e] p-3 mt-3">
                  <div className="text-[11px] font-bold text-neon-accent mb-1">
                    ¿Cómo me ayuda en el trabajo?
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {hobby.contribution}
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-neon-subtle flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Hobby #{hobby.id}</span>
                <span className="text-neon-accent">Aporte real</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
