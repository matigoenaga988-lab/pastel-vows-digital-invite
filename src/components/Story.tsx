import { Flower2 } from "lucide-react";

const Story = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Card Container with Premium Look */}
        <div className="gold-foil-border animate-fade-in">
          <div className="relative bg-card paper-texture rounded-2xl px-8 md:px-16 py-16" 
               style={{ boxShadow: 'var(--shadow-card)' }}>
            
            {/* Inner Border */}
            <div className="absolute inset-6 border rounded-xl pointer-events-none opacity-20"
                 style={{ borderColor: 'hsl(var(--gold-medium))' }} />

            {/* Watercolor Flower Top */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2">
              <div className="relative w-16 h-16">
                <div className="absolute inset-0 rounded-full bg-gradient-radial from-[hsl(var(--floral-rose))] to-[hsl(var(--floral-pink))] opacity-40 blur-lg" />
                <div className="absolute inset-2 rounded-full bg-gradient-radial from-[hsl(var(--floral-pink))] to-transparent opacity-60 blur-md" />
                <Flower2 className="absolute inset-0 m-auto w-8 h-8 text-primary" />
              </div>
            </div>

            <div className="relative z-10 text-center pt-12">
              {/* EDITAR: Título de la sección */}
              <h2 className="font-dancing text-4xl md:text-6xl font-bold text-foreground mb-12"
                  style={{
                    background: 'var(--rose-gold)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>
                Nuestra Historia
              </h2>
              
              {/* Gold Ribbon Divider */}
              <div className="flex items-center justify-center gap-3 mb-12">
                <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-[hsl(var(--gold-medium))] to-[hsl(var(--gold-light))]" />
                <div className="w-2 h-2 rounded-full bg-gradient-radial from-[hsl(var(--gold-light))] to-[hsl(var(--gold-dark))]" />
                <div className="h-[2px] w-24 bg-gradient-to-l from-transparent via-[hsl(var(--gold-medium))] to-[hsl(var(--gold-light))]" />
              </div>
              
              {/* EDITAR: Texto de la historia o frase especial */}
              <div className="space-y-6 text-lg md:text-xl text-foreground/80 leading-relaxed">
                <p className="font-dancing text-3xl md:text-4xl text-foreground italic">
                  "En el momento menos esperado, encontré en ti todo lo que siempre había buscado."
                </p>
                
                <p className="font-serif">
                  Nuestros caminos se cruzaron en una tarde de otoño, y desde ese momento supimos que 
                  estábamos destinados a compartir esta aventura llamada vida.
                </p>
                
                <p className="font-serif">
                  Después de años de risas, sueños compartidos y amor incondicional, hemos decidido 
                  dar el paso más importante de nuestras vidas, y queremos celebrarlo junto a las 
                  personas que más queremos.
                </p>
                
                <p className="font-serif font-semibold text-foreground pt-4">
                  ¡Contamos con vos para hacer de este día un momento inolvidable!
                </p>
              </div>
              
              {/* Decorative Bottom */}
              <div className="mt-12 flex justify-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse opacity-60" />
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse opacity-60" style={{ animationDelay: '0.2s' }} />
                <div className="w-2 h-2 rounded-full bg-secondary animate-pulse opacity-60" style={{ animationDelay: '0.4s' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
