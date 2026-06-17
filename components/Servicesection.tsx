"use client";
import { useEffect, useRef } from "react";

const services = [
  {
    icon: "✦",
    title: "Web Development",
    desc: "Full-stack Next.js applications with clean architecture, TypeScript, and optimized performance. From MVP to production.",
    tags: ["Next.js", "TypeScript", "React"],
  },
  {
    icon: "◈",
    title: "UI & Frontend",
    desc: "Pixel-perfect interfaces built with Tailwind CSS. Responsive, accessible, and fast — with animations that feel intentional.",
    tags: ["Tailwind CSS", "Framer Motion", "Figma"],
  },
  {
    icon: "⬡",
    title: "E-commerce",
    desc: "Custom storefronts and admin panels with Supabase or Stripe. Cart, auth, inventory — the whole system.",
    tags: ["Supabase", "Stripe", "Next.js"],
  },
  {
    icon: "◎",
    title: "SEO & Performance",
    desc: "Schema markup, Core Web Vitals, sitemap, and Google Search Console setup. Built to be found and fast.",
    tags: ["SEO", "JSON-LD", "Vercel"],
  },
];

export default function ServicesSection() {
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
              }, i * 120);
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
    <section id="services" ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-white/20 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p
            className="reveal text-xs tracking-[0.25em] text-white/40 uppercase mb-6"
            style={{ opacity: 0, transform: "translateY(24px)", transition: "all 0.7s ease" }}
          >
            What I do
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
            Services built for
            <em className="not-italic text-white/50"> real outcomes.</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {services.map((s) => (
            <div
              key={s.title}
              className="reveal service-card glass-card rounded-2xl p-8 group cursor-default"
              style={{ opacity: 0, transform: "translateY(24px)", transition: "all 0.7s ease" }}
            >
              <span className="text-2xl text-white/30 group-hover:text-white/70 transition-colors duration-500 block mb-5">
                {s.icon}
              </span>
              <h3
                className="text-xl font-normal text-white mb-3 group-hover:text-white transition-colors"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                {s.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-6">{s.desc}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] tracking-wider uppercase text-white/35 glass-tag rounded-full px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}