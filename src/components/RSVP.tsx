import { CheckCircle2, ExternalLink, Heart } from "lucide-react";
import { Button } from "./ui/button";

const RSVP = () => {
  // Tu URL
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLScZLz2EKKo6Ods7P0TH3YBhGMR-5O6yPkdAo1icaCpzLZDJCw/viewform";

  return (
    <section className="py-24 px-4 bg-secondary/30 relative overflow-hidden"> 
      {/* Elementos decorativos de fondo sutiles */}
      <div className="absolute top-10 left-10 w-32 h-32 border-2 border-primary/10 rounded-full animate-float" />
      <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-accent/10 rounded-full animate-pulse-soft" />
      <div className="absolute top-1/2 left-5 w-16 h-16 border-2 border-mint/10 rounded-full" />
      
      {/* Tarjeta principal con efecto de invitación */}
      <div className="relative max-w-2xl mx-auto bg-background p-8 md:p-12 rounded-xl shadow-2xl animate-scale-in border-4 border-primary/20">
        
        {/* Textura sutil de papel */}
        <div className="absolute inset-0 opacity-[0.03] rounded-xl pointer-events-none" 
             style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="100" height="100" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noise"%3E%3CfeTurbulence baseFrequency="0.9" /%3E%3C/filter%3E%3Crect width="100" height="100" filter="url(%23noise)" opacity="0.4"/%3E%3C/svg%3E")' }} 
        />
        
        {/* Marco decorativo doble */}
        <div className="absolute inset-4 border-2 border-primary/40 rounded-lg pointer-events-none" />
        <div className="absolute inset-6 border border-primary/20 rounded-lg pointer-events-none" />
        
        {/* Esquinas ornamentales mejoradas */}
        <div className="absolute top-2 left-2 w-8 h-8 pointer-events-none">
          <div className="absolute top-0 left-0 w-8 h-2 bg-primary/30 rounded-r-full" />
          <div className="absolute top-0 left-0 w-2 h-8 bg-primary/30 rounded-b-full" />
        </div>
        <div className="absolute top-2 right-2 w-8 h-8 pointer-events-none">
          <div className="absolute top-0 right-0 w-8 h-2 bg-primary/30 rounded-l-full" />
          <div className="absolute top-0 right-0 w-2 h-8 bg-primary/30 rounded-b-full" />
        </div>
        <div className="absolute bottom-2 left-2 w-8 h-8 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-8 h-2 bg-primary/30 rounded-r-full" />
          <div className="absolute bottom-0 left-0 w-2 h-8 bg-primary/30 rounded-t-full" />
        </div>
        <div className="absolute bottom-2 right-2 w-8 h-8 pointer-events-none">
          <div className="absolute bottom-0 right-0 w-8 h-2 bg-primary/30 rounded-l-full" />
          <div className="absolute bottom-0 right-0 w-2 h-8 bg-primary/30 rounded-t-full" />
        </div>

        {/* Ornamentos laterales - izquierda */}
        <div className="absolute left-0 top-1/4 -translate-x-1/2 flex flex-col gap-3">
          <Heart className="w-6 h-6 text-primary fill-primary/20 animate-pulse-soft" />
          <div className="w-3 h-3 rounded-full bg-accent/40" />
          <div className="w-2 h-2 rounded-full bg-mint/40" />
        </div>
        
        {/* Ornamentos laterales - derecha */}
        <div className="absolute right-0 top-1/4 translate-x-1/2 flex flex-col gap-3">
          <Heart className="w-6 h-6 text-accent fill-accent/20 animate-pulse-soft" style={{ animationDelay: '0.5s' }} />
          <div className="w-3 h-3 rounded-full bg-primary/40" />
          <div className="w-2 h-2 rounded-full bg-secondary/40" />
        </div>

        {/* Lazo decorativo superior */}
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex items-center justify-center pointer-events-none">
          <div className="relative">
            {/* Nudo central del lazo */}
            <div className="w-8 h-8 bg-primary rounded-full shadow-lg" />
            {/* Lado izquierdo del lazo */}
            <div className="absolute top-1/2 right-full mr-1 -translate-y-1/2 w-12 h-6 bg-primary rounded-full transform -rotate-45" />
            {/* Lado derecho del lazo */}
            <div className="absolute top-1/2 left-full ml-1 -translate-y-1/2 w-12 h-6 bg-primary rounded-full transform rotate-45" />
            {/* Cintas colgantes */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 flex gap-2">
              <div className="w-2 h-8 bg-primary/80 rounded-b-full transform -rotate-12" />
              <div className="w-2 h-8 bg-primary/80 rounded-b-full transform rotate-12" />
            </div>
          </div>
        </div>

        {/* Detalles florales en los costados superiores */}
        <div className="absolute top-8 left-8 opacity-20 pointer-events-none">
          <div className="relative w-12 h-12">
            <div className="absolute inset-0 bg-accent rounded-full" />
            <div className="absolute top-1 left-1 w-4 h-4 bg-primary rounded-full" />
            <div className="absolute top-1 right-1 w-4 h-4 bg-secondary rounded-full" />
            <div className="absolute bottom-1 left-1 w-4 h-4 bg-mint rounded-full" />
            <div className="absolute bottom-1 right-1 w-4 h-4 bg-accent rounded-full" />
          </div>
        </div>
        <div className="absolute top-8 right-8 opacity-20 pointer-events-none transform scale-x-[-1]">
          <div className="relative w-12 h-12">
            <div className="absolute inset-0 bg-accent rounded-full" />
            <div className="absolute top-1 left-1 w-4 h-4 bg-primary rounded-full" />
            <div className="absolute top-1 right-1 w-4 h-4 bg-secondary rounded-full" />
            <div className="absolute bottom-1 left-1 w-4 h-4 bg-mint rounded-full" />
            <div className="absolute bottom-1 right-1 w-4 h-4 bg-accent rounded-full" />
          </div>
        </div>

        {/* Contenido principal */}
        <div className="relative z-10 text-center pt-8">
          {/* Icono superior con animación */}
          <div className="relative inline-block mb-6">
            <CheckCircle2 className="w-12 h-12 text-primary animate-pulse-soft" />
            <Heart className="w-5 h-5 text-accent fill-accent/30 absolute -top-1 -right-1 animate-float" />
          </div>
          
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
            Confirmación de Asistencia
          </h2>
          
          {/* Divisor decorativo mejorado */}
          <div className="flex items-center justify-center gap-2 my-6">
            <div className="w-8 h-[2px] bg-gradient-to-r from-transparent to-primary rounded-full" />
            <Heart className="w-4 h-4 text-primary fill-primary/20" />
            <div className="w-16 h-[3px] bg-primary rounded-full" />
            <Heart className="w-4 h-4 text-primary fill-primary/20" />
            <div className="w-8 h-[2px] bg-gradient-to-l from-transparent to-primary rounded-full" />
          </div>
          
          <p className="text-lg text-muted-foreground mb-8">
            Por favor, confirmanos tu asistencia antes del 1 de Mayo.
          </p>
          
          <p className="font-medium text-foreground mb-8 italic">
            "Esperamos contar contigo en este día especial"
          </p>

          {/* Botón con decoración adicional */}
          <div className="mt-8 pb-4">
            <a 
              href={googleFormUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block hover:-translate-y-1 transition-transform duration-300"
            >
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-6 text-lg shadow-lg hover:shadow-xl rounded-full relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Confirmar Asistencia
                  <ExternalLink className="w-5 h-5" />
                </span>
                {/* Efecto de brillo en hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </Button>
            </a>
          </div>
        </div>

        {/* Detalles decorativos inferiores */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 opacity-30">
          <div className="w-2 h-2 rounded-full bg-primary" />
          <div className="w-2 h-2 rounded-full bg-accent" />
          <div className="w-2 h-2 rounded-full bg-secondary" />
          <div className="w-2 h-2 rounded-full bg-mint" />
          <div className="w-2 h-2 rounded-full bg-primary" />
        </div>
      </div>
    </section>
  );
};

export default RSVP;