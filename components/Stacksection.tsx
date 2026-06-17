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
    <section
      ref={sectionRef}
      className="relative py-32 px-6 overflow-hidden"
      style={{ background: "#000000" }}
    >
      <div className="max-w-7xl mx-auto">
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
          className="reveal rounded-2xl p-8 md:p-12"
          style={{
            opacity: 0,
            transform: "translateY(24px)",
            transition: "all 0.7s ease",
            background: "rgba(255,255,255,0.04)",
            border: "0.5px solid rgba(255,255,255,0.08)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06), 0 24px 64px rgba(0,0,0,0.35)",
          }}
        >
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-7">
            {stack.map((item, i) => (
              <div key={item.name}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-white/70 tracking-wide">{item.name}</span>
                  <span className="text-xs text-white/30">{item.level}%</span>
                </div>
                <div
                  className="h-px rounded-full overflow-hidden"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                >
                  <div
                    ref={(el) => {
                      if (el) barsRef.current[i] = el;
                    }}
                    data-width={`${item.level}%`}
                    className="h-full rounded-full"
                    style={{
                      width: "0%",
                      transition: "width 1s cubic-bezier(0.4,0,0.2,1)",
                      background: "rgba(255,255,255,0.4)",
                    }}
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