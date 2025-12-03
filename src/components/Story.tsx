import { useEffect, useState } from "react";
// Verifica que la ruta sea correcta
import frameImage from "@/assets/Save the Date.png";

const Story = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    // Aumentamos padding vertical (py-40) para dar espacio a que las flores salgan sin cortarse
    <section className="relative py-40 px-4 overflow-hidden min-h-[800px] flex items-center justify-center bg-stone-50/30">
      
      {/* Contenedor central que agrupa todo */}
      <div className="relative w-full max-w-2xl">
        
        {/* ==============================================
            DECORACIÓN SUPERIOR (Capa 0 - Detrás)
            ============================================== */}
        <div 
          className={`absolute -top-[160px] left-1/2 -translate-x-1/2 w-[110%] h-[300px] z-0 pointer-events-none transition-all duration-1000 ease-out
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          {/* overflow-hidden en el padre + object-cover + object-top
              Esto fuerza a recortar y mostrar SOLO la parte de arriba de la imagen */}
          <div className="w-full h-full overflow-hidden">
             <img 
               src={frameImage} 
               alt="Decoración superior" 
               className="w-full h-full object-cover object-top mix-blend-multiply opacity-90"
             />
          </div>
        </div>

        {/* ==============================================
            TARJETA DE TEXTO (Capa 10 - Al frente)
            ============================================== */}
        <div className="relative z-10 bg-[hsl(var(--card))] rounded-xl p-8 md:p-14 shadow-xl border border-[hsl(var(--gold-light))] text-center">
          
          <h2 className="font-dancing text-5xl md:text-6xl text-[hsl(var(--primary))] mb-8 drop-shadow-sm">
            Nuestra Historia
          </h2>
          
          <div className="font-serif text-lg md:text-xl leading-relaxed text-foreground/80 space-y-6">
            <p>
              <span className="font-maguntia text-5xl float-left mr-3 mt-[-8px] text-[hsl(var(--gold-medium))] opacity-80">
                T
              </span>
              odo comenzó una tarde de verano... (Aquí va tu historia romántica). 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              Después de tantos momentos increíbles, viajes, risas y aprendizajes, hemos decidido dar el siguiente paso.
            </p>
          </div>

          <div className="flex items-center justify-center gap-3 mt-10 opacity-50">
             <div className="h-[1px] w-12 bg-[hsl(var(--gold-medium))]"></div>
             <div className="w-1.5 h-1.5 rotate-45 bg-[hsl(var(--gold-dark))]"></div>
             <div className="h-[1px] w-12 bg-[hsl(var(--gold-medium))]"></div>
          </div>
        </div>

        {/* ==============================================
            DECORACIÓN INFERIOR (Capa 0 - Detrás)
            ============================================== */}
        <div 
          className={`absolute -bottom-[160px] left-1/2 -translate-x-1/2 w-[110%] h-[300px] z-0 pointer-events-none transition-all duration-1000 ease-out delay-200
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-12'}`}
        >
          {/* object-bottom: Esto fuerza a mostrar SOLO la parte de abajo (flores y mariposa) */}
          <div className="w-full h-full overflow-hidden">
            <img 
              src={frameImage} 
              alt="Decoración inferior" 
              className="w-full h-full object-cover object-bottom mix-blend-multiply opacity-90"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Story;