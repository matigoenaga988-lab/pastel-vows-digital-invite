import { CheckCircle2 } from "lucide-react";

const RSVP = () => {
  // EDITAR: URL de tu Google Form para confirmación de asistencia
  // Para obtener la URL:
  // 1. Crea un Google Form en https://forms.google.com
  // 2. Haz clic en "Enviar" > ícono de "<>"
  // 3. Copia la URL del src del iframe
  const googleFormUrl = "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true";

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <CheckCircle2 className="w-12 h-12 mx-auto mb-6 text-primary" />
          
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Confirmación de Asistencia
          </h2>
          
          <p className="text-lg text-muted-foreground mb-2">
            Por favor, confirmanos tu asistencia antes del 1 de Mayo
          </p>
          
          <p className="text-foreground font-medium">
            ¡Tu presencia es muy importante para nosotros!
          </p>
        </div>

        <div className="animate-scale-in">
          <div className="bg-card rounded-2xl shadow-2xl overflow-hidden border border-border">
            {/* EDITAR: Reemplazar con tu URL de Google Form */}
            <iframe
              src={googleFormUrl}
              width="100%"
              height="800"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Formulario de confirmación RSVP"
              className="w-full"
            >
              Cargando formulario...
            </iframe>
            
            {/* Mensaje de fallback si el form no carga */}
            <div className="p-8 text-center bg-muted/50">
              <p className="text-muted-foreground text-sm">
                Si no ves el formulario, puedes{" "}
                <a
                  href={googleFormUrl.replace("?embedded=true", "")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  abrirlo en una nueva pestaña
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Si tenés alguna duda, no dudes en contactarnos
          </p>
        </div>
      </div>
    </section>
  );
};

export default RSVP;
