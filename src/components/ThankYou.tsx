import { Heart, Instagram, Phone, Mail } from "lucide-react";

const ThankYou = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Premium Card Container */}
        <div className="gold-foil-border animate-fade-in">
          <div className="relative bg-card paper-texture rounded-2xl px-8 md:px-16 py-16" 
               style={{ boxShadow: 'var(--shadow-card)' }}>
            
            {/* Inner Border */}
            <div className="absolute inset-6 border rounded-xl pointer-events-none opacity-20"
                 style={{ borderColor: 'hsl(var(--gold-medium))' }} />

            {/* Watercolor Hearts Top */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 flex gap-4">
              <div className="relative w-12 h-12">
                <div className="absolute inset-0 rounded-full bg-gradient-radial from-[hsl(var(--floral-rose))] to-[hsl(var(--floral-pink))] opacity-30 blur-lg" />
                <Heart className="absolute inset-0 m-auto w-6 h-6 text-primary fill-primary/40" />
              </div>
              <div className="relative w-12 h-12">
                <div className="absolute inset-0 rounded-full bg-gradient-radial from-[hsl(var(--floral-mauve))] to-transparent opacity-30 blur-lg" />
                <Heart className="absolute inset-0 m-auto w-6 h-6 text-accent fill-accent/40" />
              </div>
            </div>

            <div className="relative z-10 text-center pt-12">
              
              <h2 className="font-dancing text-5xl md:text-7xl font-bold text-foreground mb-8"
                  style={{
                    background: 'var(--rose-gold)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>
                ¡Gracias!
              </h2>
              
              {/* Gold Ribbon Divider */}
              <div className="flex items-center justify-center gap-3 mb-12">
                <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-[hsl(var(--gold-medium))] to-[hsl(var(--gold-light))]" />
                <Heart className="w-4 h-4 text-primary fill-primary/30" />
                <div className="h-[2px] w-24 bg-gradient-to-l from-transparent via-[hsl(var(--gold-medium))] to-[hsl(var(--gold-light))]" />
              </div>
              
              <div className="space-y-6 text-lg md:text-xl text-foreground/80 leading-relaxed mb-12">
                <p className="font-dancing text-3xl text-foreground italic">
                  "El amor es la fuerza más grande del universo, y celebrarlo con ustedes 
                  lo hace aún más especial."
                </p>
                
                <p className="font-serif">
                  Gracias por acompañarnos en este momento tan importante de nuestras vidas. 
                  Su presencia es el mejor regalo que podríamos recibir.
                </p>
                
                <p className="font-serif font-semibold text-foreground">
                  ¡Nos vemos en la fiesta! 🎊
                </p>
              </div>

              {/* EDITAR: Información de contacto */}
              <div className="relative mt-12 bg-background/40 backdrop-blur-sm rounded-xl p-8 border"
                   style={{ borderColor: 'hsl(var(--gold-medium) / 0.2)' }}>
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
                  ¿Consultas?
                </h3>
                
                <div className="space-y-4 text-foreground/80 font-serif">
                  <div className="flex items-center justify-center gap-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <span>+54 9 11 1234-5678</span>
                  </div>
                  
                  <div className="flex items-center justify-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <span>Matigoenaga988@gmail.com</span>
                  </div>
                  
                  <div className="flex items-center justify-center gap-3">
                    <Instagram className="w-5 h-5 text-primary" />
                    <span>@Matuchimid</span>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex justify-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary animate-pulse opacity-60" />
                <div className="h-2 w-2 rounded-full bg-accent animate-pulse opacity-60" style={{ animationDelay: '0.2s' }} />
                <div className="h-2 w-2 rounded-full bg-secondary animate-pulse opacity-60" style={{ animationDelay: '0.4s' }} />
                <div className="h-2 w-2 rounded-full bg-mint animate-pulse opacity-60" style={{ animationDelay: '0.6s' }} />
              </div>

              <p className="mt-8 text-base font-dancing text-foreground">
                Con amor, Ale & Carla 💕
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThankYou;
