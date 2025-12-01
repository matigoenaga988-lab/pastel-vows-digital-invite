import { MapPin, Navigation } from "lucide-react";
import { Button } from "./ui/button";

const Location = () => {
  // EDITAR: Coordenadas del lugar del evento (latitud, longitud)
  const latitude = -38.04203853666166; 
  const longitude = -57.54035183718755;
  
  // EDITAR: Dirección completa del evento
  const address = "Club Náutico Mar del Plata, Buenos Aires, Argentina";
  
  // EDITAR: Nombre del lugar del evento
  const venueName = "Club Náutico Mar del Plata";

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
  const embedMapUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${latitude},${longitude}&zoom=15`;

  const handleNavigate = () => {
    window.open(googleMapsUrl, "_blank");
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-mint/20 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <MapPin className="w-12 h-12 mx-auto mb-6 text-mint" />
          
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Ubicación
          </h2>
          
          <p className="text-lg text-muted-foreground mb-2">
            Te esperamos en
          </p>
          
          <h3 className="text-2xl font-serif font-semibold text-primary mb-2">
            {venueName}
          </h3>
          
          <p className="text-muted-foreground">
            {address}
          </p>
        </div>

        <div className="animate-scale-in">

          {/* EDITAR: Reemplazar el iframe con tu propio embed de Google Maps */}
          {/* Para obtener el código de embed:
              1. Ve a Google Maps (https://maps.google.com)
              2. Busca tu ubicación
              3. Haz clic en "Compartir" > "Insertar un mapa"
              4. Copia el código iframe y reemplázalo aquí
          */
          }
          
          <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl mb-8 bg-muted">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12568.825874685215!2d-57.55835484458007!3d-38.0422752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584ddc3230929ff%3A0xc4e0191400f4cec1!2sClub%20N%C3%A1utico%20Mar%20del%20Plata!5e0!3m2!1ses-419!2sar!4v1764202297747!5m2!1ses-419!2sar"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación del evento"
              className="absolute inset-0"
              
            />
          </div>

          <div className="text-center">
            <Button
              onClick={handleNavigate}
              size="lg"
              className="bg-gradient-to-r from-mint to-accent hover:opacity-90 transition-opacity text-foreground font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              <Navigation className="mr-2 h-5 w-5" />
              ¿Cómo llegar?
            </Button>
            
            <p className="text-sm text-muted-foreground mt-4">
              Se abrirá Google Maps con las indicaciones
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
