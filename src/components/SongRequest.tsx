import { Music } from "lucide-react";
import { Button } from "./ui/button";

const SongRequest = () => {
  // EDITAR: URL de tu Google Form para sugerencias de canciones
  // Para obtener la URL:
  // 1. Crea un Google Form en https://forms.google.com
  // 2. Haz clic en "Enviar" > obtén el link
  const songRequestFormUrl = "https://docs.google.com/forms/d/e/YOUR_SONG_FORM_ID/viewform";

  const handleOpenForm = () => {
    window.open(songRequestFormUrl, "_blank");
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-secondary/20 to-accent/10">
      <div className="max-w-3xl mx-auto text-center">
        <div className="animate-fade-in">
          <div className="inline-block p-4 bg-primary/10 rounded-full mb-6 animate-float">
            <Music className="w-12 h-12 text-primary" />
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Sugerí tu Canción
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            ¿Qué canción no puede faltar en nuestra fiesta? Ayudanos a crear la mejor 
            playlist para celebrar este día inolvidable. ¡Queremos que todos bailen!
          </p>

          <div className="animate-scale-in">
            <Button
              onClick={handleOpenForm}
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all text-foreground font-medium shadow-lg hover:shadow-xl hover:scale-105"
            >
              <Music className="mr-2 h-5 w-5" />
              Recomendar Canción
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border">
              <div className="text-3xl mb-2">🎵</div>
              <p className="text-sm text-muted-foreground">
                Canciones románticas para el baile
              </p>
            </div>
            
            <div className="p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border">
              <div className="text-3xl mb-2">🎉</div>
              <p className="text-sm text-muted-foreground">
                Temas para animar la pista
              </p>
            </div>
            
            <div className="p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border">
              <div className="text-3xl mb-2">💫</div>
              <p className="text-sm text-muted-foreground">
                Clásicos que todos conocen
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SongRequest;
