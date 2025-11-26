import { useState, useRef, useEffect } from "react";
import { Music, Volume2, VolumeX } from "lucide-react";
import { Button } from "./ui/button";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // EDITAR: URL de tu canción de fondo
  // Puedes usar una URL directa de un archivo MP3
  // Ejemplo: "https://example.com/musica-boda.mp3"
  // O subir el archivo a tu proyecto en /public/music.mp3
  const musicUrl = "/music/wedding-song.mp3";

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3; // Volumen al 30%
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((error) => {
          console.log("Error al reproducir:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      {/* Audio element */}
      <audio ref={audioRef} loop>
        <source src={musicUrl} type="audio/mpeg" />
        Tu navegador no soporta el elemento de audio.
      </audio>

      {/* Floating Music Button */}
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
        
        {/* Ripple effect when playing */}
        {isPlaying && (
          <div className="absolute inset-0 rounded-full animate-ping bg-primary/30 pointer-events-none" />
        )}
        
        {/* Music note animation */}
        {isPlaying && (
          <div className="absolute -top-2 -right-2 animate-bounce">
            <Music className="w-5 h-5 text-accent" />
          </div>
        )}
      </div>

      {/* Tooltip */}
      {!isPlaying && (
        <div className="fixed bottom-28 right-8 z-40 animate-fade-in">
          <div className="bg-card/90 backdrop-blur-sm text-foreground px-4 py-2 rounded-lg shadow-lg text-sm whitespace-nowrap border border-border">
            ¡Activá la música! 🎵
          </div>
        </div>
      )}
    </>
  );
};

export default MusicPlayer;
