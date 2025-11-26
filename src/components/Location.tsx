import { MapPin, Navigation } from "lucide-react";
import { Button } from "./ui/button";

const Location = () => {
  // EDITAR: Coordenadas del lugar del evento (latitud, longitud)
  const latitude = -34.6037;
  const longitude = -58.3816;
  
  // EDITAR: Dirección completa del evento
  const address = "Av. del Libertador 1234, CABA, Buenos Aires, Argentina";
  
  // EDITAR: Nombre del lugar del evento
  const venueName = "Salón Los Jardines";

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
          */}
          <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl mb-8 bg-muted">
            <iframe
              src={embedMapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación del evento"
              className="absolute inset-0"
            />
            
            {/* Overlay placeholder si no hay API key */}
            <div className="absolute inset-0 flex items-center justify-center bg-muted/90 backdrop-blur-sm">
              <div className="text-center p-8">
                <MapPin className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                <p className="text-muted-foreground mb-4">
                  Reemplaza este contenedor con tu mapa de Google Maps
                </p>
                <p className="text-sm text-muted-foreground">
                  Ver instrucciones en el código (componente Location.tsx)
                </p>
              </div>
            </div>
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
