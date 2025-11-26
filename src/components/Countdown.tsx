import { useEffect, useState } from "react";
import { Calendar } from "lucide-react";

const Countdown = () => {
  // EDITAR: Fecha del casamiento (formato: YYYY-MM-DD)
  const weddingDate = new Date("2025-06-15T18:00:00");
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const distance = weddingDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, []);

  const TimeBox = ({ value, label }: { value: number; label: string }) => (
    <div className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow animate-scale-in backdrop-blur-sm border border-border">
      <div className="text-4xl md:text-5xl font-bold text-primary mb-2 font-serif">
        {value.toString().padStart(2, "0")}
      </div>
      <div className="text-sm md:text-base text-muted-foreground uppercase tracking-wider">
        {label}
      </div>
    </div>
  );

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-accent/10 to-mint/20">
      <div className="max-w-5xl mx-auto text-center">
        <div className="animate-fade-in">
          <Calendar className="w-12 h-12 mx-auto mb-6 text-accent" />
          
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Faltan...
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12">
            Conteo regresivo para nuestro gran día
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <TimeBox value={timeLeft.days} label="Días" />
            <TimeBox value={timeLeft.hours} label="Horas" />
            <TimeBox value={timeLeft.minutes} label="Minutos" />
            <TimeBox value={timeLeft.seconds} label="Segundos" />
          </div>

          <div className="mt-12 inline-block">
            <div className="bg-gradient-to-r from-primary via-accent to-secondary p-1 rounded-full">
              <div className="bg-background px-8 py-3 rounded-full">
                <p className="text-foreground font-medium">
                  ¡Nos vemos pronto! 💕
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Countdown;
