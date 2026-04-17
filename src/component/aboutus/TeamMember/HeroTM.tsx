import i1 from "../../../assets/21.jpeg";

const AboutHero = () => {
  return (
    <section className="relative h-[50vh] overflow-hidden">
      
      {/* FIXED BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${i1})` }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/80" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col justify-center items-center text-center px-6 text-white">
        
        {/* HEADER */}
        <div className="mb-4">
          <div className="flex items-center justify-center gap-3 mb-3">
        
            <span className="text-[#36f1b6] uppercase tracking-widest text-lg font-bold">
              About Our Team
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-3xl">
            Built on Expertise.  
            <br /> Driven by Integrity.
          </h1>
        </div>

      </div>
    </section>
  );
};

export default AboutHero;