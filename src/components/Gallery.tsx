import { useState } from "react";
import { ChevronLeft, ChevronRight, Camera } from "lucide-react";
// Asegúrate de que la ruta sea correcta según donde guardaste la imagen subida
import decorationBranch from "@/assets/gallery4.png"; 
import gallery1 from "@/assets/gallery1.jpeg";
import gallery2 from "@/assets/gallery2.jpeg";
import gallery3 from "@/assets/gallery3.jpeg";

const Gallery = () => {
  const images = [gallery1, gallery2, gallery3];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        
        {/* Contenedor Principal */}
        <div className="relative animate-fade-in">
          
          {/* Encabezado */}
          <div className="text-center mb-16 relative z-10">
            <div className="inline-flex items-center justify-center p-3 border-2 border-[hsl(var(--gold-medium))] rounded-full mb-6 opacity-60 bg-[hsl(var(--card))]">
              <Camera className="w-6 h-6 text-[hsl(var(--gold-dark))]" />
            </div>
            
            <h2 className="font-dancing text-5xl md:text-6xl text-[hsl(var(--primary))] mb-4 drop-shadow-sm">
              Nuestros Momentos
            </h2>
            <p className="font-serif text-lg text-muted-foreground italic">
              "Recuerdos que construyen nuestra historia"
            </p>
          </div>

          {/* Área del Marco y Foto */}
          <div className="relative max-w-4xl mx-auto group">
            
            {/* --- DECORACIÓN BOTÁNICA 1: Esquina Superior Izquierda --- */}
            <div className="absolute -top-16 -left-12 md:-left-20 w-40 md:w-56 z-0 pointer-events-none opacity-90 transition-transform duration-1000 group-hover:-translate-y-2 group-hover:-translate-x-2">
               <img 
                 src={decorationBranch} 
                 alt="" 
                 className="w-full h-auto object-contain -rotate-12 mix-blend-multiply filter sepia-[0.2]" 
               />
            </div>

            {/* --- DECORACIÓN BOTÁNICA 2: Esquina Inferior Derecha (Rotada) --- */}
            <div className="absolute -bottom-16 -right-12 md:-right-20 w-40 md:w-56 z-0 pointer-events-none opacity-90 transition-transform duration-1000 group-hover:translate-y-2 group-hover:translate-x-2">
               <img 
                 src={decorationBranch} 
                 alt="" 
                 className="w-full h-auto object-contain rotate-[168deg] mix-blend-multiply filter sepia-[0.2]" 
               />
            </div>

            {/* Decoración de fondo (Papel apilado) */}
            <div className="absolute top-2 left-2 right-[-10px] bottom-[-10px] bg-[hsl(var(--card))] border border-[hsl(var(--gold-medium))] opacity-40 rounded-xl -rotate-1 z-0" />
            
            {/* Marco Dorado Externo (Contenedor Principal de la Foto) */}
            <div className="relative z-10 bg-[hsl(var(--card))] p-3 md:p-4 rounded-xl shadow-[var(--shadow-card)] border border-[hsl(var(--gold-light))]">
              
              {/* Marco Dorado Interno (Foil) */}
              <div className="relative rounded-lg overflow-hidden border-2" style={{ borderColor: 'hsl(var(--gold-medium))' }}>
                <div className="aspect-[4/3] md:aspect-[16/9] relative bg-stone-100">
                  
                  {/* Imagen con transición suave */}
                  <img
                    key={currentIndex} // Key fuerza la animación al cambiar de foto
                    src={images[currentIndex]}
                    alt={`Momento ${currentIndex + 1}`}
                    className="w-full h-full object-contain bg-stone-200/50 animate-fade-in"
                  />
                  
                  {/* Textura de ruido sobre la foto para efecto vintage */}
                  <div className="absolute inset-0 opacity-[0.08] pointer-events-none mix-blend-overlay"
                       style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }} 
                  />
                </div>
              </div>

              {/* Botones de Navegación (Estilo Joya) */}
              <button
                onClick={previousImage}
                className="absolute left-[-20px] md:left-[-30px] top-1/2 -translate-y-1/2 w-12 h-12 bg-[hsl(var(--card))] border border-[hsl(var(--gold-medium))] rounded-full shadow-lg flex items-center justify-center hover:scale-110 hover:bg-[hsl(var(--gold-light))] transition-all z-20 text-[hsl(var(--gold-dark))]"
                aria-label="Imagen anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-[-20px] md:right-[-30px] top-1/2 -translate-y-1/2 w-12 h-12 bg-[hsl(var(--card))] border border-[hsl(var(--gold-medium))] rounded-full shadow-lg flex items-center justify-center hover:scale-110 hover:bg-[hsl(var(--gold-light))] transition-all z-20 text-[hsl(var(--gold-dark))]"
                aria-label="Siguiente imagen"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Indicadores estilo puntos de tinta */}
            <div className="flex justify-center gap-3 mt-8 relative z-10">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`transition-all duration-500 rounded-full border border-[hsl(var(--gold-medium))] ${
                    index === currentIndex
                      ? "w-3 h-3 bg-[hsl(var(--gold-dark))]"
                      : "w-2 h-2 bg-transparent hover:bg-[hsl(var(--gold-light))]"
                  }`}
                  aria-label={`Ir a imagen ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;