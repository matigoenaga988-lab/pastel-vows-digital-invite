import { MapPin, Navigation } from "lucide-react";
import { Button } from "./ui/button";

const Location = () => {
  const latitude = -38.04203853666166; 
  const longitude = -57.54035183718755;
  const address = "Av. de los Trabajadores 5000";
  const venueName = "Club Náutico Mar del Plata";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;

  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="paper-texture bg-card rounded-2xl shadow-[var(--shadow-card)] p-8 md:p-12 border border-[hsl(var(--gold-light))] relative overflow-hidden">
          
          {/* Manchas de acuarela decorativas */}
          <div className="watercolor-blob w-64 h-64 bg-[hsl(var(--mint))] opacity-20 -top-20 -right-20" />
          <div className="watercolor-blob w-40 h-40 bg-[hsl(var(--floral-pink))] opacity-20 -bottom-10 -left-10" />

          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            
            {/* Texto */}
            <div className="text-center md:text-left space-y-6">
              <div className="flex justify-center md:justify-start">
                <div className="p-3 bg-stone-100 rounded-full border border-[hsl(var(--gold-light))]">
                  <MapPin className="w-8 h-8 text-[hsl(var(--primary))]" />
                </div>
              </div>
              
              <h2 className="font-dancing text-5xl text-[hsl(var(--foreground))]">
                Ceremonia y Fiesta
              </h2>
              
              <div className="font-serif text-lg text-muted-foreground space-y-2">
                <h3 className="font-semibold text-2xl text-[hsl(var(--gold-dark))]">
                  {venueName}
                </h3>
                <p className="text-xl">{address}</p>
                <p>Mar del Plata, Buenos Aires</p>
              </div>

              <div className="pt-4">
                <Button
                  onClick={() => window.open(googleMapsUrl, "_blank")}
                  className="wax-seal-btn px-8 py-6 rounded-full text-white font-serif tracking-wider text-sm hover:scale-105 transition-transform"
                >
                  <Navigation className="mr-2 h-4 w-4" />
                  Ver en Mapa
                </Button>
              </div>
            </div>

            {/* Mapa Enmarcado */}
            <div className="relative">
              {/* Marco Dorado */}
              <div className="absolute -inset-2 border-2 border-[hsl(var(--gold-medium))] rounded-lg opacity-60 pointer-events-none" />
              
              <div className="relative rounded-lg overflow-hidden h-80 shadow-inner border border-stone-200 bg-stone-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12568.825874685215!2d-57.55835484458007!3d-38.0422752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584ddc3230929ff%3A0xc4e0191400f4cec1!2sClub%20N%C3%A1utico%20Mar%20del%20Plata!5e0!3m2!1ses-419!2sar!4v1764202297747!5m2!1ses-419!2sar"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'sepia(20%) contrast(0.9)' }} // Filtro sepia para que el mapa combine
                  allowFullScreen
                  loading="lazy"
                  title="Ubicación del evento"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;