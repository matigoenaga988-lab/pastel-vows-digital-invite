import { Heart } from "lucide-react";

const Hero = () => {
  // EDITAR: Iniciales de los novios para el monograma
  const initials = "A & C";
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4">
      
      {/* Premium Card Container */}
      <div className="relative max-w-4xl w-full">
        
        {/* Gold Foil Outer Border */}
        <div className="gold-foil-border animate-fade-in">
          
          {/* Creamy Cardstock Paper */}
          <div className="relative bg-card paper-texture rounded-2xl overflow-hidden" 
               style={{ boxShadow: 'var(--shadow-card)' }}>
            
            {/* Inner Gold Border */}
            <div className="absolute inset-4 border-2 rounded-xl pointer-events-none"
                 style={{ 
                   borderImage: 'var(--gold-foil) 1',
                   borderImageSlice: 1
                 }} />
            
            {/* Floral Corner - Top Left */}
            <div className="floral-corner top-6 left-6">
              <div className="absolute w-16 h-16 rounded-full bg-gradient-radial from-[hsl(var(--floral-rose))] to-transparent blur-md opacity-60" />
              <div className="absolute w-12 h-12 rounded-full bg-gradient-radial from-[hsl(var(--floral-pink))] to-transparent blur-sm opacity-40 top-8 left-8" />
              <div className="absolute w-20 h-1 bg-gradient-to-r from-[hsl(var(--floral-green))] to-transparent blur-sm opacity-50 top-10 -left-2 rotate-45" />
              <div className="absolute w-16 h-1 bg-gradient-to-r from-[hsl(var(--floral-green))] to-transparent blur-sm opacity-50 top-12 left-4 rotate-12" />
            </div>
            
            {/* Floral Corner - Top Right */}
            <div className="floral-corner top-6 right-6 scale-x-[-1]">
              <div className="absolute w-16 h-16 rounded-full bg-gradient-radial from-[hsl(var(--floral-rose))] to-transparent blur-md opacity-60" />
              <div className="absolute w-12 h-12 rounded-full bg-gradient-radial from-[hsl(var(--floral-pink))] to-transparent blur-sm opacity-40 top-8 left-8" />
              <div className="absolute w-20 h-1 bg-gradient-to-r from-[hsl(var(--floral-green))] to-transparent blur-sm opacity-50 top-10 -left-2 rotate-45" />
            </div>
            
            {/* Floral Corner - Bottom Right */}
            <div className="floral-corner bottom-6 right-6 rotate-180">
              <div className="absolute w-16 h-16 rounded-full bg-gradient-radial from-[hsl(var(--floral-rose))] to-transparent blur-md opacity-60" />
              <div className="absolute w-12 h-12 rounded-full bg-gradient-radial from-[hsl(var(--floral-pink))] to-transparent blur-sm opacity-40 top-8 left-8" />
              <div className="absolute w-20 h-1 bg-gradient-to-r from-[hsl(var(--floral-green))] to-transparent blur-sm opacity-50 top-10 -left-2 rotate-45" />
            </div>
            
            {/* Floral Corner - Bottom Left */}
            <div className="floral-corner bottom-6 left-6 rotate-180 scale-x-[-1]">
              <div className="absolute w-16 h-16 rounded-full bg-gradient-radial from-[hsl(var(--floral-rose))] to-transparent blur-md opacity-60" />
              <div className="absolute w-12 h-12 rounded-full bg-gradient-radial from-[hsl(var(--floral-pink))] to-transparent blur-sm opacity-40 top-8 left-8" />
            </div>

            {/* Main Content */}
            <div className="relative z-10 px-8 md:px-16 py-20 text-center animate-fade-in-up">
              
              {/* Floral Wreath with Monogram */}
              <div className="relative inline-block mb-8">
                {/* Wreath Circle */}
                <div className="relative w-32 h-32 mx-auto">
                  {/* Outer circle with eucalyptus */}
                  <div className="absolute inset-0 rounded-full border-2 opacity-30"
                       style={{ borderColor: 'hsl(var(--floral-green))' }} />
                  
                  {/* Floral elements around circle */}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-radial from-[hsl(var(--floral-rose))] to-[hsl(var(--floral-pink))] opacity-60 blur-sm" />
                  <div className="absolute top-4 right-2 w-5 h-5 rounded-full bg-gradient-radial from-[hsl(var(--floral-pink))] to-transparent opacity-50 blur-sm" />
                  <div className="absolute top-4 left-2 w-5 h-5 rounded-full bg-gradient-radial from-[hsl(var(--floral-pink))] to-transparent opacity-50 blur-sm" />
                  <div className="absolute bottom-4 left-6 w-4 h-4 rounded-full bg-gradient-radial from-[hsl(var(--floral-mauve))] to-transparent opacity-50 blur-sm" />
                  <div className="absolute bottom-4 right-6 w-4 h-4 rounded-full bg-gradient-radial from-[hsl(var(--floral-mauve))] to-transparent opacity-50 blur-sm" />
                  
                  {/* Monogram Initials */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-maguntia text-4xl font-bold text-foreground"
                          style={{ 
                            background: 'var(--gold-foil)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                          }}>
                      {initials}
                    </span>
                  </div>
                </div>
              </div>

              {/* Romantic Header */}
              <div className="mb-8">
                <p className="font-serif text-lg md:text-xl text-muted-foreground tracking-widest uppercase mb-4">
                  Nos casamos
                </p>
                
                {/* EDITAR: Nombres de los novios */}
                <h1 className="font-dancing text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-2"
                    style={{
                      background: 'var(--rose-gold)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      filter: 'drop-shadow(0 2px 4px hsl(var(--primary) / 0.3))'
                    }}>
                  Ale & Carla
                </h1>
              </div>

              {/* Gold Ribbon Divider */}
              <div className="flex items-center justify-center gap-3 my-8">
                <div className="h-px w-20 bg-gradient-to-r from-transparent via-[hsl(var(--gold-medium))] to-transparent" />
                <Heart className="w-5 h-5 text-primary animate-pulse-soft" />
                <div className="h-px w-20 bg-gradient-to-r from-transparent via-[hsl(var(--gold-medium))] to-transparent" />
              </div>

              {/* EDITAR: Fecha del casamiento */}
              <p className="text-2xl md:text-3xl font-dancing text-foreground mb-3">
                15 de Diciembre, 2025
              </p>
              
              {/* EDITAR: Lugar del evento */}
              <p className="text-lg md:text-xl text-muted-foreground font-serif">
                Club Náutico Mar del Plata
              </p>
              
              <p className="text-base text-muted-foreground font-serif">
                Buenos Aires, Argentina
              </p>

              {/* Decorative Bottom Element */}
              <div className="mt-12 flex justify-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary opacity-60 animate-pulse" />
                <div className="w-2 h-2 rounded-full bg-accent opacity-60 animate-pulse" style={{ animationDelay: '0.2s' }} />
                <div className="w-2 h-2 rounded-full bg-secondary opacity-60 animate-pulse" style={{ animationDelay: '0.4s' }} />
                <div className="w-2 h-2 rounded-full bg-mint opacity-60 animate-pulse" style={{ animationDelay: '0.6s' }} />
              </div>

              {/* Invitation Text */}
              <div className="mt-12 max-w-md mx-auto">
                <p className="text-base md:text-lg text-foreground font-serif italic leading-relaxed">
                  "Tenemos el honor de invitarte a celebrar con nosotros el comienzo de nuestra vida juntos"
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 rounded-full flex items-start justify-center p-2"
             style={{ borderColor: 'hsl(var(--gold-medium))' }}>
          <div className="w-1.5 h-1.5 rounded-full animate-pulse"
               style={{ backgroundColor: 'hsl(var(--gold-medium))' }} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
