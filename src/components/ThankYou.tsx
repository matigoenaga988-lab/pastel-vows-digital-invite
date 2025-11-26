import { Heart, Instagram, Phone, Mail } from "lucide-react";

const ThankYou = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-accent/10 to-primary/20">
      <div className="max-w-3xl mx-auto text-center">
        <div className="animate-fade-in">
          <div className="inline-block mb-6">
            <div className="relative">
              <Heart className="w-20 h-20 text-primary animate-pulse-soft" fill="currentColor" />
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full animate-ping opacity-75" />
            </div>
          </div>
          
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">
            ¡Gracias!
          </h2>
          
          <div className="space-y-4 text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed">
            <p className="font-serif text-foreground text-2xl italic">
              "El amor es la fuerza más grande del universo, y celebrarlo con ustedes 
              lo hace aún más especial."
            </p>
            
            <p>
              Gracias por acompañarnos en este momento tan importante de nuestras vidas. 
              Su presencia es el mejor regalo que podríamos recibir.
            </p>
            
            <p className="font-medium text-foreground">
              ¡Nos vemos en la fiesta! 🎊
            </p>
          </div>

          {/* EDITAR: Información de contacto */}
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-border">
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
              ¿Consultas?
            </h3>
            
            <div className="space-y-4 text-muted-foreground">
              <div className="flex items-center justify-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span>+54 9 11 1234-5678</span>
              </div>
              
              <div className="flex items-center justify-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span>contacto@nuestra-boda.com</span>
              </div>
              
              <div className="flex items-center justify-center gap-3">
                <Instagram className="w-5 h-5 text-primary" />
                <span>@ana_y_carlos_boda</span>
              </div>
            </div>
          </div>

          <div className="mt-12 flex justify-center gap-3">
            <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <div className="h-2 w-2 rounded-full bg-accent animate-pulse" style={{ animationDelay: '0.2s' }} />
            <div className="h-2 w-2 rounded-full bg-secondary animate-pulse" style={{ animationDelay: '0.4s' }} />
            <div className="h-2 w-2 rounded-full bg-mint animate-pulse" style={{ animationDelay: '0.6s' }} />
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            Con amor, Ana & Carlos 💕
          </p>
        </div>
      </div>
    </section>
  );
};

export default ThankYou;
