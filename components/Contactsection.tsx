"use client";
import { useEffect, useRef, useState } from "react";

const quote =
  "Every great product starts with a conversation. Let's build something the world hasn't seen yet.";

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const wordsRef = useRef<HTMLSpanElement[]>([]);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const words = quote.split(" ");

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const total = window.innerHeight + sectionRef.current.offsetHeight;
      const progress = Math.max(0, Math.min(1, (-rect.top + window.innerHeight * 0.4) / (total * 0.45)));

      wordsRef.current.forEach((word, i) => {
        if (!word) return;
        const wordStart = i / words.length;
        const wordEnd = (i + 1) / words.length;
        const wordProgress = Math.max(0, Math.min(1, (progress - wordStart) / (wordEnd - wordStart)));
        const opacity = 0.35 + wordProgress * 0.65;
        const lightness = Math.round(50 + wordProgress * 50);
        word.style.opacity = String(opacity);
        word.style.color = `hsl(0 0% ${lightness}%)`;
      });
    };

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
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [words.length]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative overflow-hidden"
    >
      {/* ── Background Video ── */}
      <div className="absolute inset-0 z-0">
        <video
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ mixBlendMode: "luminosity" }}
        />
        {/* Lightened overlay so video is more visible */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      

      {/* Word Reveal Quote */}
      <div className="relative z-10 py-32 px-6 md:px-16 max-w-5xl mx-auto">
        <p
          className="reveal text-xs tracking-[0.25em] text-white/50 uppercase mb-12"
          style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.7s ease" }}
        >
          Let's talk
        </p>

        <p className="text-3xl md:text-5xl font-medium leading-[1.2] mb-16" aria-label={quote}>
          {words.map((word, i) => (
            <span
              key={i}
              ref={(el) => { if (el) wordsRef.current[i] = el; }}
              className="inline-block mr-[0.3em]"
              style={{
                opacity: 0.35,
                color: "hsl(0 0% 50%)",
                transition: "opacity 0.1s ease, color 0.1s ease",
                fontFamily:
                  word === "conversation." || word === "build" || word === "yet."
                    ? "'Instrument Serif', serif"
                    : "inherit",
                fontStyle:
                  word === "conversation." || word === "yet." ? "italic" : "normal",
              }}
            >
              {word}
            </span>
          ))}
        </p>

        {/* Author */}
        <div
          className="reveal flex items-center gap-4"
          style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.7s ease 0.2s" }}
        >
          <div className="w-11 h-11 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white/60 text-sm font-medium">
            F
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Next with FZ</p>
            <p className="text-xs text-white/40">Freelance Web Developer · Pakistan</p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="relative z-10 pb-32 px-6 max-w-3xl mx-auto">
        
<div
  className="reveal rounded-2xl p-8 md:p-12"
  style={{
    opacity: 0,
    transform: "translateY(24px)",
    transition: "all 0.7s ease 0.1s",
    background: "rgba(0, 0, 0, 0.55)",
    backdropFilter: "blur(24px)",
    WebkitBackdropFilter: "blur(24px)",
    border: "0.5px solid rgba(255,255,255,0.12)",
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08), 0 24px 60px rgba(0,0,0,0.5)",
  }}
>
          {sent ? (
            <div className="text-center py-10">
              <p
                className="text-4xl text-white mb-3"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                Message received ✦
              </p>
              <p className="text-white/40 text-sm">I'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] tracking-[0.2em] uppercase text-white/30">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className="contact-input rounded-xl px-4 py-3 text-sm text-white outline-none"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] tracking-[0.2em] uppercase text-white/30">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="your@email.com"
                    className="contact-input rounded-xl px-4 py-3 text-sm text-white outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[11px] tracking-[0.2em] uppercase text-white/30">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  className="contact-input rounded-xl px-4 py-3 text-sm text-white outline-none resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mt-2">
                <p className="text-xs text-white/25 text-center sm:text-left">
                  Usually replies within 24 hours · Based in Pakistan
                </p>
                <button
                  type="submit"
                  className="liquid-glass rounded-full px-10 py-4 text-sm text-white hover:scale-[1.03] transition-transform shrink-0"
                >
                  Send message →
                </button>
              </div>
            </form>
          )}
        </div>

        <div
          className="reveal mt-8 flex justify-center gap-10"
          style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.7s ease 0.3s" }}
        >
          {["Upwork", "LinkedIn", "GitHub", "Email"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-[11px] tracking-[0.2em] uppercase text-white/25 hover:text-white/70 transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 border-t border-white/8 py-8 px-6 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <span
          className="text-xl text-white/50"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Next with FZ<sup className="text-[10px]">®</sup>
        </span>
        <p className="text-xs text-white/20">
          © {new Date().getFullYear()} — Crafted with care in Pakistan
        </p>
      </div>
    </section>
  );
}