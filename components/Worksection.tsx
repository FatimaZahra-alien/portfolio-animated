"use client";
import { useEffect, useRef } from "react";

const projects = [
  {
    num: "01",
    title: "masdor",
    category: "Labours online portal",
    desc: "Mazdoor bridges the gap between Pakistan's daily-wage workers and the people who need them. Built with a bilingual UI, icon-based skill picker, and one-tap WhatsApp contact — because finding work shouldn't require a smartphone degree.",
    stack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Vercel"],
    dot: "rgba(147,197,253,0.9)",
  },
  {
    num: "02",
    title: "Kaleem & Sons",
    category: "E-commerce",
    desc: "Full-stack e-commerce platform with Supabase backend, Google OAuth, cart persistence, admin panel with role-based access, and live product management. Deployed on Vercel.",
    stack: ["Next.js", "Supabase", "NextAuth", "TypeScript"],
    dot: "rgba(110,231,183,0.9)",
  },
  {
    num: "03",
    title: "Sportswear Storefront",
    category: "Fashion E-commerce",
    desc: "High-energy sportswear landing page concept with 3D design elements and React Three Fiber. Cinematic scroll experience targeting athletes and fitness creators.",
    stack: ["React", "Three.js", "Tailwind CSS", "Spline"],
    dot: "rgba(253,186,116,0.9)",
  },
];

export default function WorkSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = "1";
                (el as HTMLElement).style.transform = "translateY(0)";
              }, i * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative py-24 px-6 overflow-hidden"
      style={{ background: "hsl(202, 100%, 4%)" }}
    >
      {/* top divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-white/20 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p
            className="reveal text-xs tracking-[0.25em] text-white/40 uppercase mb-4"
            style={{ opacity: 0, transform: "translateY(24px)", transition: "all 0.7s ease" }}
          >
            Selected work
          </p>
          <h2
            className="reveal text-4xl md:text-5xl font-normal"
            style={{
              fontFamily: "'Instrument Serif', serif",
              color: "white",
              opacity: 0,
              transform: "translateY(24px)",
              transition: "all 0.7s ease",
            }}
          >
            Projects I'm
            <em className="not-italic text-white/50"> proud of.</em>
          </h2>
        </div>

        {/* horizontal scrollable row */}
        <div
          className="flex flex-row gap-4 overflow-x-auto pb-4"
          style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
        >
          {projects.map((p, gi) => (
            <div
              key={p.num}
              className="reveal group cursor-default rounded-2xl flex-shrink-0"
              style={{
                width: "clamp(280px, 32%, 380px)",
                scrollSnapAlign: "start",
                opacity: 0,
                transform: "translateY(32px)",
                transition: `opacity 0.7s ease ${gi * 0.15}s, transform 0.7s ease ${gi * 0.15}s, box-shadow 0.35s ease, background 0.35s ease`,
                background: "rgba(255,255,255,0.07)",
                border: "0.5px solid rgba(255,255,255,0.14)",
                boxShadow:
                  "inset 0 1px 0 rgba(255,255,255,0.12), 0 4px 6px rgba(0,0,0,0.12), 0 16px 40px rgba(0,0,0,0.22)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.11)";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "inset 0 1px 0 rgba(255,255,255,0.18), 0 8px 16px rgba(0,0,0,0.18), 0 28px 56px rgba(0,0,0,0.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.07)";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "inset 0 1px 0 rgba(255,255,255,0.12), 0 4px 6px rgba(0,0,0,0.12), 0 16px 40px rgba(0,0,0,0.22)";
              }}
            >
              {/* inner layout: vertical flex */}
              <div className="flex flex-col gap-4 px-6 py-6 h-full">

                {/* top row: number + category */}
                <div className="flex items-start justify-between">
                  <span
                    className="text-5xl font-normal leading-none"
                    style={{
                      fontFamily: "'Instrument Serif', serif",
                      color: "rgba(255,255,255,0.1)",
                    }}
                  >
                    {p.num}
                  </span>
                  <span
                    className="text-[10px] tracking-wider uppercase rounded-full px-3 py-1 mt-1"
                    style={{
                      color: "rgba(255,255,255,0.4)",
                      background: "rgba(255,255,255,0.06)",
                      border: "0.5px solid rgba(255,255,255,0.12)",
                    }}
                  >
                    {p.category}
                  </span>
                </div>

                {/* title */}
                <h3
                  className="text-2xl font-normal"
                  style={{
                    fontFamily: "'Instrument Serif', serif",
                    color: "rgba(255,255,255,0.95)",
                  }}
                >
                  {p.title}
                </h3>

                {/* horizontal divider */}
                <div style={{ height: "0.5px", background: "rgba(255,255,255,0.1)" }} />

                {/* desc */}
                <p
                  className="text-sm leading-relaxed flex-1"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  {p.desc}
                </p>

                {/* stack tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {p.stack.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] tracking-wider uppercase rounded-full px-3 py-1"
                      style={{
                        color: "rgba(255,255,255,0.4)",
                        background: "rgba(255,255,255,0.05)",
                        border: "0.5px solid rgba(255,255,255,0.1)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* accent dot */}
              <span
                style={{
                  position: "absolute",
                  top: 20,
                  right: 20,
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: p.dot,
                  boxShadow: `0 0 8px ${p.dot}`,
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* bottom black gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none z-10"
        style={{ background: "linear-gradient(to top, #000000, transparent)" }}
      />
    </section>
  );
}