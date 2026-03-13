"use client";

import { useEffect, useState, useRef } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    const rotateX = (y - 0.5) * -10;
    const rotateY = (x - 0.5) * 10;
    setTilt({ x: rotateX, y: rotateY });
  };

  const resetTilt = () => setTilt({ x: 0, y: 0 });

  if (!mounted) return null;

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#050505]">
      {/* Background YouTube Video */}
      <div className="absolute inset-0 z-0 h-full w-full pointer-events-none overflow-hidden">
        <iframe
          className="absolute top-1/2 left-1/2 h-[100vh] w-[177.78vh] min-w-full min-h-[56.25vw] -translate-x-1/2 -translate-y-1/2 opacity-100 brightness-110"
          src="https://www.youtube.com/embed/ZRvkb_7pejA?autoplay=1&mute=1&loop=1&playlist=ZRvkb_7pejA&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube Background"
        />
      </div>

      {/* Content */}
      <main className="relative z-20 flex w-full max-w-lg flex-col items-center justify-center p-4">
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={resetTilt}
          className="flex w-full flex-col items-center gap-6 transition-transform duration-200 ease-out"
          style={{
            transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          }}
        >
          {/* Profile Section */}
          <div className="relative h-28 w-28">
            <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-30 blur-lg animate-pulse" />
            <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-white/20 shadow-2xl">
              <img
                src="/profile.jpg"
                alt="Profile"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Header */}
          <div className="flex flex-col items-center gap-2 text-center">
            <h1 className="kh-font text-shadow text-3xl font-bold text-white md:text-4xl text-glow-green">
              Sreang Lyhour
            </h1>
            <div className="kh-font text-emerald-400 font-medium opacity-90">
              Keep learning, keep growing, and never stop believing in yourself
            </div>
            <p className="kh-font mt-2 text-sm tracking-wide text-zinc-400">
              Frontend Developer | UX/UI Designer | Website Designer
            </p>
          </div>

          {/* Link List */}
          <div className="flex w-full flex-col gap-3">
            {[
              {
                title: "Telegram",
                sub: "ទាក់ទងផ្ទាល់តាមសារ តេឡេក្រាម",
                icon: "fab fa-telegram",
                color: "#229ED9",
                href: "https://t.me/lyyhuan",
              },
              {
                title: "Facebook",
                icon: "fab fa-facebook",
                color: "#1877F2",
                href: "https://www.facebook.com/share/183MeaHeZM/?mibextid=wwXIfr",
              },
              {
                title: "TikTok",
                icon: "fab fa-tiktok",
                color: "#ffffff",
                href: "https://www.tiktok.com/@yanglihua6?_r=1&_t=ZS-94eA8iQP1e8",
              },
              {
                title: "Github",
                icon: "fab fa-youtube",
                color: "#FF0000",
                href: "https://github.com/ly-hua",
              },
              {
                title: "Website",
                sub: "អំពីយើង តម្លៃ សេវាកម្ម និងផលិតផល",
                icon: "fas fa-globe",
                color: "#37a486",
                href: "https://mylekha.net/",
              },
              {
                title: "+855 95 391 294",
                sub: "ទាក់ទងផ្ទាល់តាមទូរស័ព្ទ",
                icon: "fas fa-phone-volume",
                color: "#37a486",
                href: "tel:+855 95 391 294",
              },
            ].map((link, i) => (
              <a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hover flex w-full items-center justify-between rounded-2xl bg-white/5 p-4 border border-white/5"
              >
                <div className="flex items-center gap-4">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5"
                    style={{ color: link.color }}
                  >
                    <i className={`${link.icon} text-xl`}></i>
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="kh-font text-sm font-bold text-white leading-tight">{link.title}</span>
                    <span className="kh-font text-[11px] text-zinc-400 leading-normal">{link.sub}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>

        </div>
      </main>

      <style jsx global>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.4;
            transform: scale(1.1);
          }
        }
      `}</style>
    </div>
  );
}
