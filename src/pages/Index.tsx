import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Gallery from "@/components/Gallery";
import Countdown from "@/components/Countdown";
import Location from "@/components/Location";
import RSVP from "@/components/RSVP";
import SongRequest from "@/components/SongRequest";
import ThankYou from "@/components/ThankYou";
import MusicPlayer from "@/components/MusicPlayer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Portada con foto, nombres y fecha */}
      <Hero />
      
      {/* Historia o frase especial */}
      <Story />
      
      {/* Galería de imágenes */}
      <Gallery />
      
      {/* Cuenta regresiva */}
      <Countdown />
      
      {/* Ubicación del evento con mapa */}
      <Location />
      
      {/* Formulario de confirmación RSVP */}
      <RSVP />
      
      {/* Sugerencias de canciones */}
      <SongRequest />
      
      {/* Agradecimiento final */}
      <ThankYou />
      
      {/* Reproductor de música flotante */}
      <MusicPlayer />
    </main>
  );
};

export default Index;
