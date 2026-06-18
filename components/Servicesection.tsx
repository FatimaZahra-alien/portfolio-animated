"use client";

import { useEffect, useRef } from "react";

const services = [
  {
    icon: "✦",
    title: "Web Development",
    desc: "Full-stack Next.js applications with clean architecture, TypeScript, and optimized performance. From MVP to production.",
    tags: ["Next.js", "TypeScript", "React"],
    dot: "rgba(147,197,253,0.9)",
  },
  {
    icon: "◈",
    title: "UI & Frontend",
    desc: "Pixel-perfect interfaces built with Tailwind CSS. Responsive, accessible, and fast — with animations that feel intentional.",
    tags: ["Tailwind CSS", "Framer Motion", "Figma"],
    dot: "rgba(110,231,183,0.9)",
  },
  {
    icon: "⬡",
    title: "E-commerce",
    desc: "Custom storefronts and admin panels with Supabase or Stripe. Cart, auth, inventory — the whole system.",
    tags: ["Supabase", "Stripe", "Next.js"],
    dot: "rgba(253,186,116,0.9)",
  },
  {
    icon: "◎",
    title: "SEO & Performance",
    desc: "Schema markup, Core Web Vitals, sitemap, and Google Search Console setup. Built to be found and fast.",
    tags: ["SEO", "JSON-LD", "Vercel"],
    dot: "rgba(216,180,254,0.9)",
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

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

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 220, behavior: "smooth" });
    }
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Top dark blue gradient */}
      <div className="absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-[hsl(201,100%,7%)] via-[rgba(2,18,36,0.7)] to-transparent pointer-events-none" />

      {/* Optional radial glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at top, hsl(201 100% 7% / 0.9) 0%, hsl(201 100% 7% / 0.45) 40%, transparent 75%)",
        }}
      />

     

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p
            className="reveal text-xs tracking-[0.25em] text-white/40 uppercase mb-6"
            style={{
              opacity: 0,
              transform: "translateY(24px)",
              transition: "all 0.7s ease",
            }}
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

        {/* Mobile: horizontal scroll with circular cards */}
        <div className="md:hidden relative">
          <div
            ref={scrollRef}
            className="-mx-6 px-6 overflow-x-auto"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <style>{`div::-webkit-scrollbar { display: none; }`}</style>
            <div
              className="flex flex-row gap-5 pb-4"
              style={{ width: "max-content" }}
            >
              {services.map((s, gi) => (
                <div
                  key={s.title}
                  className="reveal cursor-default flex-shrink-0"
                  style={{
                    width: 200,
                    height: 200,
                    borderRadius: "50%",
                    opacity: 0,
                    transform: "translateY(24px)",
                    transition: `opacity 0.7s ease ${gi * 0.12}s, transform 0.7s ease ${gi * 0.12}s`,
                    background: "rgba(255,255,255,0.07)",
                    border: "0.5px solid rgba(255,255,255,0.14)",
                    boxShadow:
                      "inset 0 1px 0 rgba(255,255,255,0.12), 0 4px 6px rgba(0,0,0,0.12), 0 16px 40px rgba(0,0,0,0.22)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    position: "relative",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "1.5rem",
                  }}
                >
                  {/* Accent dot */}
                  <span
                    style={{
                      position: "absolute",
                      top: 24,
                      right: 36,
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: s.dot,
                      boxShadow: `0 0 8px ${s.dot}`,
                    }}
                  />

                  {/* Icon */}
                  <span
                    className="mb-2 block"
                    style={{
                      fontSize: "1.25rem",
                      color: "rgba(255,255,255,0.3)",
                    }}
                  >
                    {s.icon}
                  </span>

                  {/* Title */}
                  <h3
                    className="font-normal mb-2"
                    style={{
                      fontFamily: "'Instrument Serif', serif",
                      fontSize: "1rem",
                      color: "rgba(255,255,255,0.95)",
                      lineHeight: 1.3,
                    }}
                  >
                    {s.title}
                  </h3>

                  {/* Divider */}
                  <div
                    style={{
                      width: "40%",
                      height: "0.5px",
                      background: "rgba(255,255,255,0.12)",
                      margin: "0.4rem auto",
                    }}
                  />

                  {/* Description */}
                  <p
                    style={{
                      fontSize: "0.62rem",
                      lineHeight: 1.45,
                      color: "rgba(255,255,255,0.45)",
                    }}
                  >
                    {s.desc}
                  </p>
                </div>
              ))}
              <div className="w-2 flex-shrink-0" />
            </div>
          </div>

          {/* Scroll arrow */}
          <button
            onClick={scrollRight}
            aria-label="Scroll right"
            style={{
              position: "absolute",
              right: 0,
              top: "50%",
              transform: "translateY(-60%)",
              width: 32,
              height: 32,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.1)",
              border: "0.5px solid rgba(255,255,255,0.18)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              boxShadow: "0 2px 12px rgba(0,0,0,0.3)",
            }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 2.5L9.5 7L5 11.5"
                stroke="rgba(255,255,255,0.7)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Desktop: original layout — untouched */}
        <div className="hidden md:flex flex-row flex-wrap justify-center gap-6">
          {services.map((s, gi) => (
            <div
              key={s.title}
              className="reveal group cursor-default flex-shrink-0"
              style={{
                width: 240,
                height: 240,
                borderRadius: "50%",
                opacity: 0,
                transform: "translateY(24px)",
                transition: `opacity 0.7s ease ${
                  gi * 0.12
                }s, transform 0.7s ease ${
                  gi * 0.12
                }s, box-shadow 0.35s ease, background 0.35s ease`,
                background: "rgba(255,255,255,0.07)",
                border: "0.5px solid rgba(255,255,255,0.14)",
                boxShadow:
                  "inset 0 1px 0 rgba(255,255,255,0.12), 0 4px 6px rgba(0,0,0,0.12), 0 16px 40px rgba(0,0,0,0.22)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                position: "relative",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                padding: "2rem",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.11)";
                e.currentTarget.style.boxShadow =
                  "inset 0 1px 0 rgba(255,255,255,0.18), 0 8px 16px rgba(0,0,0,0.18), 0 28px 56px rgba(0,0,0,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                e.currentTarget.style.boxShadow =
                  "inset 0 1px 0 rgba(255,255,255,0.12), 0 4px 6px rgba(0,0,0,0.12), 0 16px 40px rgba(0,0,0,0.22)";
              }}
            >
              {/* Accent dot */}
              <span
                style={{
                  position: "absolute",
                  top: 28,
                  right: 44,
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: s.dot,
                  boxShadow: `0 0 8px ${s.dot}`,
                }}
              />

              {/* Icon */}
              <span
                className="group-hover:opacity-70 transition-opacity duration-500 mb-3 block"
                style={{
                  fontSize: "1.5rem",
                  color: "rgba(255,255,255,0.3)",
                }}
              >
                {s.icon}
              </span>

              {/* Title */}
              <h3
                className="font-normal mb-2"
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontSize: "1.1rem",
                  color: "rgba(255,255,255,0.95)",
                  lineHeight: 1.3,
                }}
              >
                {s.title}
              </h3>

              {/* Divider */}
              <div
                style={{
                  width: "40%",
                  height: "0.5px",
                  background: "rgba(255,255,255,0.12)",
                  margin: "0.5rem auto",
                }}
              />

              {/* Description */}
              <p
                style={{
                  fontSize: "0.7rem",
                  lineHeight: 1.5,
                  color: "rgba(255,255,255,0.45)",
                }}
              >
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}