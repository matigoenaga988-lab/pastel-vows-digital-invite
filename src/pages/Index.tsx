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
    <main className="min-h-screen bg-background relative overflow-hidden">
      
      {/* --- DECORACIÓN DE FONDO (Lazos estilo regalo) --- */}
      
      {/* Lazo Superior Izquierdo */}
      <div className="absolute top-0 left-0 w-32 h-32 md:w-48 md:h-48 z-0 pointer-events-none opacity-80">
        <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-md">
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--gold-medium))" />
              <stop offset="50%" stopColor="hsl(var(--gold-light))" />
              <stop offset="100%" stopColor="hsl(var(--gold-dark))" />
            </linearGradient>
          </defs>
          {/* Cinta vertical */}
          <path d="M20,0 L60,0 L60,100 C60,120 40,140 20,120 Z" fill="url(#goldGradient)" />
          {/* Cinta horizontal */}
          <path d="M0,20 L0,60 L100,60 C120,60 140,40 120,20 Z" fill="url(#goldGradient)" />
          {/* Nudo/Moño */}
          <circle cx="40" cy="40" r="15" fill="hsl(var(--gold-dark))" />
          <path d="M40,40 Q80,10 90,50 Q80,90 40,40" fill="none" stroke="hsl(var(--gold-medium))" strokeWidth="3" />
          <path d="M40,40 Q10,80 50,90 Q90,80 40,40" fill="none" stroke="hsl(var(--gold-medium))" strokeWidth="3" />
        </svg>
      </div>

      {/* Lazo Superior Derecho (Rotado) */}
      <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 z-0 pointer-events-none opacity-80 rotate-90">
        <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-md">
           <use href="#gold-ribbon-def" /> {/* Reutilizaríamos si estuviera definido, pero por simpleza repito el path o uso estructura similar */}
           <defs>
            <linearGradient id="goldGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--gold-medium))" />
              <stop offset="50%" stopColor="hsl(var(--gold-light))" />
              <stop offset="100%" stopColor="hsl(var(--gold-dark))" />
            </linearGradient>
          </defs>
          <path d="M20,0 L60,0 L60,100 C60,120 40,140 20,120 Z" fill="url(#goldGradient2)" />
          <path d="M0,20 L0,60 L100,60 C120,60 140,40 120,20 Z" fill="url(#goldGradient2)" />
          <circle cx="40" cy="40" r="15" fill="hsl(var(--gold-dark))" />
        </svg>
      </div>

      {/* Lazo decorativo central muy sutil en el fondo (como marca de agua) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] z-0 pointer-events-none opacity-[0.03]">
         <svg viewBox="0 0 100 100" className="w-full h-full">
            <pattern id="pattern-ribbon" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
               <path d="M10,0 L10,20 M0,10 L20,10" stroke="hsl(var(--gold-dark))" strokeWidth="0.5" />
               <circle cx="10" cy="10" r="2" fill="hsl(var(--gold-dark))" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#pattern-ribbon)" />
         </svg>
      </div>


      {/* Contenido Principal (con z-index relativo para estar encima del decorado) */}
      <div className="relative z-10">
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
      </div>
      
      {/* Reproductor de música flotante */}
      <MusicPlayer />
    </main>
  );
};

export default Index;