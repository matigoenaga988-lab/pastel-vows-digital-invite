import { CheckCircle2, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const RSVP = () => {
  // Tu URL
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLScZLz2EKKo6Ods7P0TH3YBhGMR-5O6yPkdAo1icaCpzLZDJCw/viewform";

  return (
    // CAMBIO 1: Fondo de la sección más oscuro (bg-stone-100 o secondary/30) para que la tarjeta blanca resalte
    <section className="py-24 px-4 bg-secondary/30"> 
      
      {/* CAMBIO 2: La tarjeta ahora tiene 'bg-background' (blanco usualmente) y una sombra muy fuerte (shadow-2xl) */}
      <div className="relative max-w-2xl mx-auto bg-background p-8 md:p-12 rounded-xl shadow-2xl animate-scale-in border border-border">
        
        {/* CAMBIO 3: Marco decorativo MÁS GRUESO y visible */}
        {/* border-2 (grosor) y border-primary (color solido, sin transparencia por ahora) */}
        <div className="absolute inset-3 border-2 border-primary rounded-lg pointer-events-none opacity-50" />
        
        {/* Esquinas decorativas extra para asegurar que se vea el estilo "Invitación" */}
        <div className="absolute top-3 left-3 w-4 h-4 border-t-4 border-l-4 border-primary pointer-events-none" />
        <div className="absolute top-3 right-3 w-4 h-4 border-t-4 border-r-4 border-primary pointer-events-none" />
        <div className="absolute bottom-3 left-3 w-4 h-4 border-b-4 border-l-4 border-primary pointer-events-none" />
        <div className="absolute bottom-3 right-3 w-4 h-4 border-b-4 border-r-4 border-primary pointer-events-none" />

        <div className="relative z-10 text-center pt-4">
          <CheckCircle2 className="w-12 h-12 mx-auto mb-6 text-primary" />
          
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
            Confirmación de Asistencia
          </h2>
          
          <div className="w-16 h-1 bg-primary mx-auto my-6 rounded-full"></div>
          
          <p className="text-lg text-muted-foreground mb-8">
            Por favor, confirmanos tu asistencia antes del 1 de Mayo.
          </p>
          
          <p className="font-medium text-foreground mb-8 italic">
            "Esperamos contar contigo en este día especial"
          </p>

          <div className="mt-8 pb-4">
            <a 
              href={googleFormUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block hover:-translate-y-1 transition-transform duration-300"
            >
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-6 text-lg shadow-lg hover:shadow-xl rounded-full"
              >
                Confirmar Asistencia
                <ExternalLink className="w-5 h-5 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RSVP;