import { CheckCircle2, ExternalLink, Heart } from "lucide-react";
import { Button } from "./ui/button";
import ribbonDecor from "@/assets/cinta-dorada-sobre-tablero-madera.png"; 

const RSVP = () => {
  const googleFormUrl = "https://docs.google.com/forms/..."; // Tu URL real

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative">
        
        {/* --- FONDO DE CINTAS (ENVOLTORIO EXTERIOR) --- */}
        {/* Se posiciona detrás de todo. Al ser más grande que la tarjeta, se verá por los bordes. */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] md:w-[130%] md:h-[160%] z-0 pointer-events-none">
           <img 
              src={ribbonDecor} 
              alt="Decoración de cintas envolventes" 
              className="w-full h-full object-cover opacity-80"
              style={{
                // Máscara radial suave para que las cintas se desvanezcan hacia los extremos de la pantalla
                maskImage: 'radial-gradient(circle, black 30%, transparent 80%)',
                WebkitMaskImage: 'radial-gradient(circle, black 30%, transparent 80%)'
              }}
           />
        </div>

        {/* --- TARJETA DE CONFIRMACIÓN (CONTENIDO) --- */}
        {/* Esta tarjeta tiene fondo sólido (bg-card) para tapar las cintas que quedan justo detrás del texto */}
        <div className="relative z-10">
            <div className="paper-texture bg-card p-10 md:p-16 rounded-sm shadow-2xl border border-[hsl(var(--gold-light))] max-w-2xl mx-auto relative">
              
              {/* Marco interno dorado */}
              <div className="gold-border-inset opacity-60"></div>
              
              <div className="relative z-20 space-y-8">
                {/* Título */}
                <h2 className="font-serif text-3xl md:text-5xl text-[hsl(var(--gold-dark))] uppercase tracking-widest font-semibold">
                  Confirmación de asistencia
                </h2>
                
                <p className="font-serif text-lg md:text-xl text-muted-foreground italic">
                  "Esperamos contar con su presencia para compartir este día inolvidable"
                </p>

                <div className="flex items-center justify-center gap-4 opacity-50">
                   <div className="h-[1px] w-12 bg-[hsl(var(--gold-dark))]" />
                   <Heart className="w-3 h-3 text-[hsl(var(--gold-dark))]" />
                   <div className="h-[1px] w-12 bg-[hsl(var(--gold-dark))]" />
                </div>

                <p className="font-serif text-sm uppercase tracking-widest text-muted-foreground">
                  Por favor confirmar antes del 1 de Mayo
                </p>

                {/* BOTÓN */}
                <div className="pt-2 flex justify-center">
                  <a 
                    href={googleFormUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block hover:scale-105 transition-transform duration-300"
                  >
                    <button className="wax-seal-btn w-24 h-24 rounded-full flex flex-col items-center justify-center p-2 shadow-lg group border border-white/20">
                      <span className="font-serif text-2xl md:text-3xl font-bold text-white drop-shadow-md">Sí</span>
                      <span className="text-[10px] font-serif uppercase tracking-widest mt-1 text-white/90">
                        Confirmar
                      </span>
                    </button>
                  </a>
                </div>
              </div>

            </div>
        </div>

      </div>
    </section>
  );
};

export default RSVP;