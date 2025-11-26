import { Flower2 } from "lucide-react";

const Story = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-3xl mx-auto text-center">
        <div className="animate-fade-in">
          <Flower2 className="w-12 h-12 mx-auto mb-6 text-accent" />
          
          {/* EDITAR: Título de la sección */}
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-8">
            Nuestra Historia
          </h2>
          
          {/* EDITAR: Texto de la historia o frase especial */}
          <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            <p className="italic font-serif text-foreground/80">
              "En el momento menos esperado, encontré en ti todo lo que siempre había buscado."
            </p>
            
            <p>
              Nuestros caminos se cruzaron en una tarde de otoño, y desde ese momento supimos que 
              estábamos destinados a compartir esta aventura llamada vida.
            </p>
            
            <p>
              Después de años de risas, sueños compartidos y amor incondicional, hemos decidido 
              dar el paso más importante de nuestras vidas, y queremos celebrarlo junto a las 
              personas que más queremos.
            </p>
            
            <p className="font-medium text-foreground pt-4">
              ¡Contamos con vos para hacer de este día un momento inolvidable!
            </p>
          </div>
          
          <div className="mt-8 flex justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: '0s' }} />
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" style={{ animationDelay: '0.2s' }} />
            <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" style={{ animationDelay: '0.4s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
