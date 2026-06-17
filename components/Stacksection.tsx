"use client";
import { useEffect, useRef } from "react";

const stack = [
  { name: "Next.js", level: 95 },
  { name: "React", level: 93 },
  { name: "TypeScript", level: 88 },
  { name: "Tailwind CSS", level: 95 },
  { name: "Supabase", level: 82 },
  { name: "Vercel", level: 90 },
  { name: "Figma", level: 75 },
  { name: "Spline / 3D", level: 65 },
];

export default function StackSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const barsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = "1";
                (el as HTMLElement).style.transform = "translateY(0)";
              }, i * 100);
            });
            barsRef.current.forEach((bar, i) => {
              if (bar) {
                setTimeout(() => {
                  bar.style.width = bar.dataset.width || "0%";
                }, 300 + i * 80);
              }
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
    <section ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-white/20 to-transparent" />

      {/* Fade to black at bottom to blend into Contact section */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-black z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-0">
        <div className="text-center mb-20">
          <p
            className="reveal text-xs tracking-[0.25em] text-white/40 uppercase mb-6"
            style={{ opacity: 0, transform: "translateY(24px)", transition: "all 0.7s ease" }}
          >
            Tech stack
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
            Tools I reach for
            <em className="not-italic text-white/50"> without thinking.</em>
          </h2>
        </div>

        <div
          className="reveal glass-card rounded-2xl p-8 md:p-12"
          style={{ opacity: 0, transform: "translateY(24px)", transition: "all 0.7s ease" }}
        >
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-7">
            {stack.map((item, i) => (
              <div key={item.name}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-white/70 tracking-wide">{item.name}</span>
                  <span className="text-xs text-white/30">{item.level}%</span>
                </div>
                <div className="h-px bg-white/8 rounded-full overflow-hidden">
                  <div
                    ref={(el) => {
                      if (el) barsRef.current[i] = el;
                    }}
                    data-width={`${item.level}%`}
                    className="h-full bg-white/40 rounded-full"
                    style={{ width: "0%", transition: "width 1s cubic-bezier(0.4,0,0.2,1)" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}