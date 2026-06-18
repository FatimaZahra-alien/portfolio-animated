"use client";
import { useEffect, useRef } from "react";

export default function AboutSection() {
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
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: "3+", label: "Years building" },
    { value: "20+", label: "Projects shipped" },
    { value: "15+", label: "Happy clients" },
    { value: "∞", label: "Cups of chai" },
  ];

  return (
    <section id="about" ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left — text */}
        <div>
          <p
            className="reveal text-xs tracking-[0.25em] text-white/40 uppercase mb-6"
            style={{ opacity: 0, transform: "translateY(24px)", transition: "all 0.7s ease" }}
          >
            About me
          </p>
          <h2
            className="reveal text-4xl md:text-5xl font-normal leading-[1.1] mb-8"
            style={{
              fontFamily: "'Instrument Serif', serif",
              color: "white",
              opacity: 0,
              transform: "translateY(24px)",
              transition: "all 0.7s ease",
            }}
          >
            A developer who thinks
            <em className="not-italic text-white/50"> like a designer.</em>
          </h2>
          <p
            className="reveal text-white/55 text-base leading-relaxed mb-6"
            style={{ opacity: 0, transform: "translateY(24px)", transition: "all 0.7s ease" }}
          >
            I'm FZ — a freelance web developer based in Pakistan, specializing
            in React, Next.js, and TypeScript. I craft digital experiences that feel
            as good as they look: fast, accessible, and built to last.
          </p>
          <p
            className="reveal text-white/55 text-base leading-relaxed"
            style={{ opacity: 0, transform: "translateY(24px)", transition: "all 0.7s ease" }}
          >
            From shipping company dashboards to sportswear storefronts, I bring
            the same attention to detail whether the scope is a landing page or
            a full e-commerce system.
          </p>
        </div>

        {/* Right — glass stats card */}
        <div
          className="reveal glass-card rounded-2xl p-8 grid grid-cols-2 gap-6"
          style={{ opacity: 0, transform: "translateY(24px)", transition: "all 0.7s ease" }}
        >
          {stats.map((s) => (
            <div key={s.label} className="glass-stat rounded-xl p-6 text-center">
              <p
                className="text-4xl font-normal text-white mb-1"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                {s.value}
              </p>
              <p className="text-xs text-white/45 tracking-widest uppercase">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}