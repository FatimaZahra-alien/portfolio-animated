"use client";

export default function HeroSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-[hsl(201,100%,7%)]">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
          type="video/mp4"
        />
      </video>

      {/* Subtle bottom fade to blend into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[hsl(201,100%,7%)] z-10" />

      {/* Content */}
      <div className="relative z-20">
        {/* Navigation */}
        <nav className="flex flex-row justify-between items-center px-8 py-6 max-w-7xl mx-auto">
          <span
            className="text-3xl tracking-tight text-white cursor-pointer"
            style={{ fontFamily: "'Instrument Serif', serif" }}
            onClick={() => scrollTo("home")}
          >
            Next with FZ<sup className="text-xs">®</sup>
          </span>

          <div className="hidden md:flex items-center gap-8">
            {[
              { label: "Home", id: "home" },
              { label: "About", id: "about" },
              { label: "Services", id: "services" },
              { label: "Work", id: "work" },
              { label: "Contact", id: "contact" },
            ].map((link, i) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`text-sm transition-colors ${
                  i === 0 ? "text-white" : "text-white/45 hover:text-white"
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contact")}
              className="liquid-glass rounded-full px-6 py-2.5 text-sm text-white hover:scale-[1.03] transition-transform"
            >
              Hire me
            </button>
          </div>
        </nav>

        {/* Hero */}
        <div className="flex flex-col items-center text-center px-6 pt-28 pb-40">
          <p className="animate-fade-rise text-xs tracking-[0.25em] text-white/40 uppercase mb-8">
            Freelance Web Developer
          </p>
          <h1
            className="animate-fade-rise text-5xl sm:text-7xl md:text-8xl font-normal leading-[0.95] max-w-5xl mb-8"
            style={{
              fontFamily: "'Instrument Serif', serif",
              letterSpacing: "-2.46px",
              color: "white",
            }}
          >
            Where{" "}
            <em className="not-italic text-white/50">ideas</em> become
            <em className="not-italic text-white/50"> experiences.</em>
          </h1>

          <p className="animate-fade-rise-delay text-white/50 text-base sm:text-lg max-w-xl leading-relaxed mb-12">
            I build fast, beautiful web products for ambitious clients. Next.js,
            TypeScript, and a sharp eye for detail — from concept to deployment.
          </p>

          <div className="animate-fade-rise-delay-2 flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => scrollTo("work")}
              className="liquid-glass rounded-full px-14 py-5 text-base text-white hover:scale-[1.03] transition-transform cursor-pointer"
            >
              See my work
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="rounded-full px-10 py-5 text-base text-white/60 hover:text-white transition-colors cursor-pointer"
            >
              Get in touch →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}