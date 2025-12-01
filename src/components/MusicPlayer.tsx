import { useState, useRef, useEffect } from "react";
import { Music, Volume2, VolumeX } from "lucide-react";
import { Button } from "./ui/button";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // ---------------------------------------------------------
  // PASO IMPORTANTE:
  // 1. Pon tu archivo .mp3 dentro de la carpeta 'public' de tu proyecto.
  // 2. Escribe aquí el nombre exacto (ej: "/mi-musica.mp3")
  // ---------------------------------------------------------
  const musicUrl = "/cancion.mp3"; 

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3; // Volumen inicial bajo
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((error) => {
          console.error("Error al reproducir. Verifica que el nombre del archivo en 'public' coincida con musicUrl.", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src={musicUrl} type="audio/mpeg" />
        Tu navegador no soporta audio.
      </audio>

      {/* Botón flotante (Igual que antes) */}
      <div className="fixed bottom-8 right-8 z-50 animate-fade-in">
        <Button
          onClick={togglePlay}
          size="lg"
          className="rounded-full w-16 h-16 bg-gradient-to-br from-primary to-accent shadow-2xl hover:shadow-3xl transition-all hover:scale-110 group"
        >
          {isPlaying ? (
            <Volume2 className="h-6 w-6 text-foreground group-hover:scale-110 transition-transform" />
          ) : (
            <VolumeX className="h-6 w-6 text-foreground group-hover:scale-110 transition-transform" />
          )}
        </Button>
        
        {isPlaying && (
          <div className="absolute inset-0 rounded-full animate-ping bg-primary/30 pointer-events-none" />
        )}
        
        {isPlaying && (
          <div className="absolute -top-2 -right-2 animate-bounce">
            <Music className="w-5 h-5 text-accent" />
          </div>
        )}
      </div>

      {!isPlaying && (
        <div className="fixed bottom-28 right-8 z-40 animate-fade-in">
          <div className="bg-card/90 backdrop-blur-sm text-foreground px-4 py-2 rounded-lg shadow-lg text-sm whitespace-nowrap border border-border">
            ¡Dale play! 🎵
          </div>
        </div>
      )}
    </>
  );
};

export default MusicPlayer;