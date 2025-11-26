import { useState } from "react";
import { ChevronLeft, ChevronRight, Camera } from "lucide-react";
import { Button } from "./ui/button";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const Gallery = () => {
  // EDITAR: Agregar o reemplazar las imágenes importadas arriba y en este array
  const images = [gallery1, gallery2, gallery3];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-secondary/20 to-accent/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <Camera className="w-12 h-12 mx-auto mb-6 text-primary" />
          
          {/* EDITAR: Título de la galería */}
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nuestros Momentos
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Algunos de los recuerdos que hemos creado juntos
          </p>
        </div>

        {/* Slider */}
        <div className="relative max-w-4xl mx-auto animate-scale-in">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={images[currentIndex]}
              alt={`Galería ${currentIndex + 1}`}
              className="w-full h-full object-cover transition-all duration-500"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent pointer-events-none" />
          </div>

          {/* Navigation Buttons */}
          <Button
            onClick={previousImage}
            variant="secondary"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full shadow-lg hover:scale-110 transition-transform bg-card/90 backdrop-blur-sm"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            onClick={nextImage}
            variant="secondary"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full shadow-lg hover:scale-110 transition-transform bg-card/90 backdrop-blur-sm"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-primary"
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
