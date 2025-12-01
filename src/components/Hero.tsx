import { Heart } from "lucide-react";
import heroImage from "@/assets/hero-wedding.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 animate-fade-in-up">
        <Heart className="w-16 h-16 mx-auto mb-8 text-primary animate-pulse-soft" />
        
        {/* EDITAR: Nombres de los novios */}
        <h1 className="font-serif text-6xl md:text-8xl font-bold text-foreground mb-4">
          Ale & carla
        </h1>
        
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-16 bg-primary" />
          <Heart className="w-6 h-6 text-primary" />
          <div className="h-px w-16 bg-primary" />
        </div>
        
        {/* EDITAR: Fecha del casamiento */}
        <p className="text-2xl md:text-3xl text-foreground mb-2 font-serif">
          15 de Diciembre, 2025
        </p>
        
        {/* EDITAR: Lugar del evento */}
        <p className="text-xl md:text-2xl text-muted-foreground font-light">
          Club Nautico Mar del Plata, Buenos Aires, Argentina
        </p>
        
        <div className="mt-12 animate-float">
          <div className="inline-block bg-card/80 backdrop-blur-sm px-8 py-4 rounded-full shadow-lg">
            <p className="text-foreground font-medium">
              ¡Nos casamos y queremos que seas parte!
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
