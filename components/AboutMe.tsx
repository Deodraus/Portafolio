import { portfolioData } from "@/data/portfolioData";
import { Sparkles, Terminal, Video } from "lucide-react";

export default function AboutMe() {
  const { personal } = portfolioData;

  return (
    <section id="sobre-mi" className="py-20 md:py-28 relative z-10 border-t border-neon-subtle">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-neon-subtle bg-neon-subtle px-3.5 py-1 text-xs font-mono text-neon-accent mb-3">
            <Sparkles className="h-3.5 w-3.5" />
            Sobre Mí
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Un poco más sobre <span className="text-neon-glow">quién soy</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300">
            Me gusta conectar la programación con la creatividad y hablar de forma clara y directa.
          </p>
        </div>

        {/* 2-Column Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Main Story Card */}
          <div className="lg:col-span-7 rounded-3xl border border-neon-subtle bg-[#0c1015]/80 p-6 sm:p-8 backdrop-blur-md shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl border border-neon-subtle bg-neon-subtle text-neon-accent">
                  <Terminal className="h-5 w-5" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Hola, soy Jerónimo Deossa Abad
                </h3>
              </div>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  Vivo en Medellín y me apasiona la tecnología desde que descubrí que podía crear cosas útiles solo con una computadora e internet.
                </p>
                <p>
                  Me gradué como <strong>Técnico Laboral en Asistente de Desarrollo de Software</strong>. Mi meta no es solo escribir código, sino asegurarme de que lo que construyo le sirva de verdad a las personas y sea agradable a la vista.
                </p>
                <p>
                  En internet también me conocen como <strong>Deodraus</strong>. Allí hago streams, juego con mi comunidad, hablo de cosas que vivimos los jóvenes y comparto mis dibujos estilo anime y avatares 3D.
                </p>
              </div>
            </div>

            <div
              className="mt-6 rounded-2xl border-l-4 bg-[#080b0e] p-4 text-sm sm:text-base text-slate-200"
              style={{ borderLeftColor: "var(--neon-accent)" }}
            >
              "{personal.vision}"
            </div>
          </div>

          {/* Quick Pillars */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            <div className="rounded-3xl border border-neon-subtle bg-[#0c1015]/80 p-6 backdrop-blur-md">
              <div className="flex items-center gap-3 mb-2 text-neon-accent">
                <Terminal className="h-5 w-5" />
                <h4 className="text-base font-bold text-white">Como Programador</h4>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Creo páginas web fáciles de navegar, conecto bases de datos y desarrollo aplicaciones en Python usando inteligencia artificial. Lo importante es que funcione bien y rápido.
              </p>
            </div>

            <div className="rounded-3xl border border-neon-subtle bg-[#0c1015]/80 p-6 backdrop-blur-md">
              <div className="flex items-center gap-3 mb-2 text-neon-accent">
                <Video className="h-5 w-5" />
                <h4 className="text-base font-bold text-white">Como Creador (Deodraus)</h4>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Sé cómo hablar con la gente, escuchar y comunicar ideas. La creación de contenido y los streams me enseñaron a expresarme sin pena y a conectar con cualquier persona.
              </p>
            </div>

            <div className="rounded-2xl border border-neon-subtle bg-neon-subtle p-4 text-center">
              <div className="text-xs uppercase font-mono tracking-wider text-neon-accent mb-1 font-bold">
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
