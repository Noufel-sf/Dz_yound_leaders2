import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <div
      className="relative h-[530px] bg-primary"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+430px)] -top-[100vh]">
        <footer className="h-[430px] py-12 lg:py-32 pb-22 sticky top-[calc(100vh-430px)] bg-primary">
          <div className="absolute inset-0 bg-primary -z-10" />

          <div className="w-full relative z-10 pb-12 px-8 md:px-16">
            <h1 className="text-[6rem] md:text-[10rem] text-white text-center mb-3 heading  font-bold">
              مشروع انطلاقتك
            </h1>
            <div
              className="flex flex-col z-10 md:flex-row justify-between gap-3  items-center  text-sm"
              dir="rtl"
            >
              {/* Left: Copyright */}
              <span className="text-white/90">© 2026 Noufel seif el islam nasri</span>

              {/* Center: Links */}
              <div className="flex items-center gap-6 flex-row-reverse">
              
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.instagram.com/albawsala_program"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white/90 transition-colors hover:bg-white/10"
                    aria-label="Instagram"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-4 w-4">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                    </svg>
                  </a>
                  <a
                    href="https://web.facebook.com/albawsala_program?_rdc=1&_rdr#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white/90 transition-colors hover:bg-white/10"
                    aria-label="Facebook"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white/90 transition-colors hover:bg-white/10"
                    aria-label="LinkedIn"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                      <path d="M4.98 3.5C4.98 4.88 3.9 6 2.5 6S0 4.88 0 3.5 1.1 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.1c.67-1.2 2.3-2.4 4.7-2.4 5 0 5.9 3.3 5.9 7.6V24h-5V16c0-1.9 0-4.4-2.7-4.4s-3.1 2.1-3.1 4.3V24h-5V8z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Right: Site name & description */}
              <div className="">
                <span>مشروع انطلاقتك</span>
                <span className="mx-2">•</span>
                <span>DZ Young Leaders</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
