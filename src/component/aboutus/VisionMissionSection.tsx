import heroBg from "../../assets/12.jpeg";

const AboutPage = () => {
  return (
    <div className="bg-slate-50 text-slate-900">
      {/* ===== HERO SECTION (unchanged) ===== */}
      <section
        className="relative overflow-hidden min-h-screen  border-b pt-16 border-slate-200"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Blurred accents */}
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <div className="absolute -left-24 top-0 h-64 w-64 rounded-full bg-sky-200/40 blur-3xl" />
          <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-emerald-200/30 blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-4 py-10 md:py-30  lg:flex-row lg:items-center ">
          {/* Left: Text */}
          <div className="max-w-6xl mx-auto text-center space-y-6">
            <p className="inline-flex items-center max-w-3xl mx-auto rounded-full bg-white/80 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-sky-700 shadow-sm ring-1 ring-sky-100">
              Chartered Accountants • Since 1970
            </p>

            <h1 className="text-3xl max-w-3xl mx-auto font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Building Trust. Delivering Excellence Since 1970.
            </h1>

            <p className="text-base leading-relaxed text-slate-100 sm:text-lg">
              <span className="font-semibold">G. K. Choksi &amp; Co. (GKC)</span>{" "}
              is a leading Chartered Accountancy firm driven by integrity,
              professionalism, and a commitment to help organizations make
              confident financial decisions.
            </p>

            <div className="flex flex-wrap justify-center items-center gap-3">
             
              <button className="inline-flex items-center justify-center rounded-full border border-slate-200/70 bg-white/90 px-5 py-2.5 text-sm font-medium text-slate-900 shadow-sm transition hover:bg-white">
                Explore Our Services
              </button>
            </div>

            <p className="text-sm font-medium text-slate-100/80">
              More than 200 professionals • 50+ years of excellence • Serving
              India &amp; global clients
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
