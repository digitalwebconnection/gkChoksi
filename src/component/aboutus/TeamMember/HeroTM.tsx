import i1 from "../../../assets/team/WhatsApp Image 2026-04-16 at 2.39.13 PM.jpeg";

const AboutHero = () => {
  return (
    <section className="relative h-[70vh] overflow-hidden">

      {/* FIXED BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${i1})` }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col justify-center items-center text-center px-6 text-white">

        {/* HEADER */}
        <div className="mb-4">
          <div className="flex items-center justify-center gap-3 mb-3">

            <span className="text-white drop-shadow-[0_2px_0px_rgba(0,0,0,0.8)]   text-3xl md:text-4xl lg:text-6xl font-bold font-serif">
              About Our  <span className="text-[#C2A96A] drop-shadow-[0_2px_5px_rgba(0,0,0,20.8)]"> Team </span>
            </span>
          </div>

          {/* <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-3xl">
            Built on Expertise.  
            <br /> Driven by Integrity.
          </h1> */}
        </div>

      </div>
    </section>
  );
};

export default AboutHero;