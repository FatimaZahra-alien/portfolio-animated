"use client";
import { useEffect, useRef } from "react";

const projects = [
  {
    num: "01",
    title: "masdor",
    category: "Labours online portal",
    desc: "Mazdoor bridges the gap between Pakistan's daily-wage workers and the people who need them. Built with a bilingual UI, icon-based skill picker, and one-tap WhatsApp contact — because finding work shouldn't require a smartphone degree.",
    stack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Vercel"],
    accent: "from-blue-500/10 to-cyan-500/5",
  },
  {
    num: "02",
    title: "Kaleem & Sons",
    category: "E-commerce",
    desc: "Full-stack e-commerce platform with Supabase backend, Google OAuth, cart persistence, admin panel with role-based access, and live product management. Deployed on Vercel.",
    stack: ["Next.js", "Supabase", "NextAuth", "TypeScript"],
    accent: "from-emerald-500/10 to-teal-500/5",
  },
  {
    num: "03",
    title: "Sportswear Storefront",
    category: "Fashion E-commerce",
    desc: "High-energy sportswear landing page concept with 3D design elements and React Three Fiber. Cinematic scroll experience targeting athletes and fitness creators.",
    stack: ["React", "Three.js", "Tailwind CSS", "Spline"],
    accent: "from-orange-500/10 to-rose-500/5",
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
    <section id="work" ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-white/20 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p
            className="reveal text-xs tracking-[0.25em] text-white/40 uppercase mb-6"
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

        <div className="flex flex-col gap-6">
          {projects.map((p) => (
            <div
              key={p.num}
              className={`reveal glass-card rounded-2xl p-8 md:p-10 group cursor-default bg-gradient-to-br ${p.accent}`}
              style={{ opacity: 0, transform: "translateY(24px)", transition: "all 0.7s ease" }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-8">
                <span
                  className="text-5xl font-normal text-white/10 group-hover:text-white/20 transition-colors duration-500 shrink-0 leading-none"
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                >
                  {p.num}
                </span>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3
                      className="text-2xl font-normal text-white"
                      style={{ fontFamily: "'Instrument Serif', serif" }}
                    >
                      {p.title}
                    </h3>
                    <span className="text-[11px] tracking-wider uppercase text-white/35 glass-tag rounded-full px-3 py-1">
                      {p.category}
                    </span>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-2xl">
                    {p.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {p.stack.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] tracking-wider uppercase text-white/35 glass-tag rounded-full px-3 py-1"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}