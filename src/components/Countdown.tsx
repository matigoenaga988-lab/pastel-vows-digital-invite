import { useEffect, useState } from "react";

const Countdown = () => {
  const weddingDate = new Date("2025-12-15T18:00:00");
  
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
    <div className="relative group">
      {/* Sombra suave */}
      <div className="absolute inset-0 bg-[hsl(var(--gold-dark))] opacity-5 translate-y-1 translate-x-1 rounded-lg" />
      
      {/* Tarjeta */}
      <div className="relative paper-texture border border-[hsl(var(--gold-light))] bg-card rounded-lg p-4 md:p-6 flex flex-col items-center justify-center shadow-sm min-h-[100px] md:min-h-[120px]">
        {/* Adorno de esquina */}
        <div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-[hsl(var(--gold-medium))]" />
        <div className="absolute top-1 right-1 w-2 h-2 border-t border-r border-[hsl(var(--gold-medium))]" />
        
        <span className="font-maguntia text-4xl md:text-5xl text-[hsl(var(--foreground))] mb-1">
          {value.toString().padStart(2, "0")}
        </span>
        <span className="font-serif text-xs md:text-sm uppercase tracking-[0.2em] text-[hsl(var(--gold-dark))]">
          {label}
        </span>
      </div>
    </div>
  );

  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        
        <h2 className="font-serif text-xl md:text-2xl text-muted-foreground uppercase tracking-widest mb-10">
          Solo faltan
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-3xl mx-auto">
          <TimeBox value={timeLeft.days} label="Días" />
          <TimeBox value={timeLeft.hours} label="Hs" />
          <TimeBox value={timeLeft.minutes} label="Min" />
          <TimeBox value={timeLeft.seconds} label="Seg" />
        </div>

        <div className="mt-16">
          <p className="font-dancing text-3xl md:text-4xl text-[hsl(var(--primary))]">
            Para celebrar nuestro amor
          </p>
        </div>
      </div>
    </section>
  );
};

export default Countdown;