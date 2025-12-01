import { CheckCircle2, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const RSVP = () => {
  const googleFormUrl = "https://docs.google.com/forms/..."; // Tu URL real

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-3xl mx-auto text-center animate-fade-in">
        
        {/* Tarjeta pequeña estilo nota */}
        <div className="paper-texture bg-card p-10 rounded-lg shadow-lg border border-stone-200 relative max-w-lg mx-auto">
          
          <div className="gold-border-inset"></div>
          
          <h2 className="font-dancing text-5xl text-[hsl(var(--gold-dark))] mb-4">
            RSVP
          </h2>
          
          <p className="font-serif text-lg text-muted-foreground mb-8 italic">
            "Esperamos contar con su presencia para compartir este día inolvidable"
          </p>

          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-8">
            Por favor confirmar antes del 1 de Mayo
          </p>

          {/* EL BOTÓN DE LACRE (WAX SEAL) */}
          <div className="flex justify-center">
            <a 
              href={googleFormUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="wax-seal-btn w-20 h-20 md:w-24 md:h-24 rounded-full flex flex-col items-center justify-center p-2 group">
                <span className="font-maguntia text-2xl md:text-3xl opacity-90">Sí</span>
                <span className="text-[10px] md:text-xs font-serif uppercase tracking-widest mt-1 opacity-80">
                  Confirmar
                </span>
              </button>
            </a>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default RSVP;