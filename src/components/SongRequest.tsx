import { Music } from "lucide-react";
import { Button } from "./ui/button";

const SongRequest = () => {
  const songRequestFormUrl = "https://docs.google.com/forms/..."; // Tu URL

  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="paper-texture bg-card rounded-xl p-8 md:p-12 shadow-md border-t-4 border-[hsl(var(--gold-medium))] text-center relative overflow-hidden">
          
          <div className="gold-border-inset opacity-40"></div>

          {/* Icono Musical Flotante */}
          <div className="absolute top-[-20px] right-[-20px] text-[hsl(var(--gold-light))] opacity-10 rotate-12">
            <Music size={150} />
          </div>

          <div className="relative z-10">
            <Music className="w-10 h-10 mx-auto mb-6 text-[hsl(var(--gold-dark))]" />
            
            <h2 className="font-dancing text-4xl md:text-5xl text-[hsl(var(--foreground))] mb-6">
              ¡Que no pare la música!
            </h2>
            
            <p className="font-serif text-lg text-muted-foreground mb-8 max-w-lg mx-auto">
              Ayúdanos a armar la playlist perfecta. ¿Qué canción te haría salir corriendo a la pista de baile?
            </p>

            <Button
              onClick={() => window.open(songRequestFormUrl, "_blank")}
              variant="outline"
              className="border-[hsl(var(--gold-medium))] text-[hsl(var(--gold-dark))] hover:bg-[hsl(var(--gold-light))] hover:text-white font-serif uppercase tracking-widest px-8 py-6 rounded-sm transition-all"
            >
              Sugerir Canción
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SongRequest;


