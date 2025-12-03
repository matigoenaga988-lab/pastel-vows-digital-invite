import { ChevronDown } from "lucide-react";
import heroImage from "../assets/hero-wedding.jpg";

const Hero = () => {
  // Usamos una imagen de stock de alta calidad de un arco de bodas para asegurar que se vea perfecto

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-start overflow-hidden bg-background">
      
      {/* 1. IMAGEN PRINCIPAL (Arco de Rosas) */}
      {/* Ocupa un 70% de la altura para impacto inmediato */}
      <div className="relative w-full h-[70vh] overflow-hidden shadow-lg">
        <div className="absolute inset-0 bg-black/10 z-10" /> {/* Oscurecimiento sutil */}
        <img 
          src={heroImage} 
          alt="Arco de rosas boda" 
          className="w-full h-full object-cover object-center animate-scale-in duration-[2000ms]"
        />
        
        {/* Degradado inferior para conectar suavemente con la tarjeta */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[hsl(var(--background))] to-transparent z-20" />
      </div>

      {/* 2. TARJETA DE TEXTO FLOTANTE */}
      {/* Se superpone a la imagen (margin-top negativo) */}
      <div className="relative z-30 -mt-32 px-4 w-full max-w-2xl animate-fade-in delay-300">
        <div className="bg-[hsl(var(--card))] shadow-2xl p-8 md:p-12 text-center rounded-sm card-border relative">
          
          {/* Adorno Floral Superior (CSS Ribbon) */}
          <div className="absolute -top-5 left-1/2 -translate-x-1/2">
             <div className="ribbon-gold shadow-md">
                ¡Nos Casamos!
             </div>
          </div>

          <div className="space-y-6 pt-6">
            <p className="font-serif text-muted-foreground uppercase tracking-[0.2em] text-sm md:text-base">
              Estás invitado a la boda de
            </p>

            <h1 className="font-dancing text-6xl md:text-8xl text-[hsl(var(--primary))] leading-tight drop-shadow-sm">
              Ana & Carlos
            </h1>

            <div className="flex items-center justify-center gap-4 py-2">
              <div className="h-[1px] w-12 bg-[hsl(var(--gold-medium))]" />
              <p className="font-serif text-xl md:text-2xl text-[hsl(var(--foreground))] italic">
                15 . 12 . 2025
              </p>
              <div className="h-[1px] w-12 bg-[hsl(var(--gold-medium))]" />
            </div>

            <p className="font-serif text-muted-foreground text-sm uppercase tracking-wider">
              Mar del Plata, Argentina
            </p>
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="mt-8 mb-8 animate-bounce opacity-50">
        <ChevronDown className="w-8 h-8 text-[hsl(var(--gold-dark))]" />
      </div>

    </section>
  );
};

export default Hero;