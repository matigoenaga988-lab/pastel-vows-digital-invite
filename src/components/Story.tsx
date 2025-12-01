const Story = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="paper-texture bg-card rounded-xl p-8 md:p-12 shadow-md border-t-4 border-[hsl(var(--gold-medium))] text-center">
          
          <h2 className="font-dancing text-5xl text-[hsl(var(--primary))] mb-6">
            Nuestra Historia
          </h2>
          
          {/* Texto elegante */}
          <div className="font-serif text-lg md:text-xl leading-relaxed text-foreground/80 space-y-6 max-w-2xl mx-auto">
            <p>
              <span className="font-maguntia text-4xl float-left mr-2 mt-[-10px] text-[hsl(var(--gold-medium))]">T</span>
              odo comenzó una tarde de verano... (Aquí va tu historia romántica). 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
            </p>
            <p>
              Después de tantos momentos increíbles, hemos decidido dar el siguiente paso y celebrar nuestro amor con las personas que más queremos.
            </p>
          </div>

          <div className="gold-divider mt-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Story;