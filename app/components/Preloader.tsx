"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface PreloaderProps {
  onComplete: () => void;
}

export const PreLoad = ({ onComplete }: PreloaderProps) => {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const wordRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const [isComplete, setIsComplete] = useState(false);

  useGSAP(
    () => {
      gsap.set(wordRefs.current, { yPercent: 120, opacity: 0 });
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.to(preloaderRef.current, {
            yPercent: -100,
            duration: 0.5,
            ease: "expo.inOut",
            onComplete: () => {
              setIsComplete(true);
              onComplete();
            },
          });
        },
      });

      wordRefs.current.forEach((word) => {
        if (!word) return;

        tl.to(word, {
          yPercent: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
        })
          .to(word, {
            yPercent: -120,
            opacity: 0,
            duration: 0.4,
            ease: "power3.in",
          }, "+=0.7");
      });
    },
    { scope: containerRef },
  );

  if (isComplete) return null;

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-[999] flex items-center justify-center overflow-hidden bg-blue-600"
    >
      <div ref={containerRef} className="flex flex-col items-center gap-6">
        <div className="relative flex h-16 items-center justify-center">
          {["نجاح", "تطور", "قيادة"].map((word, index) => (
            <span
              key={word}
              ref={(el) => {
                wordRefs.current[index] = el;
              }}
              className="absolute left-1/2 -translate-x-1/2 font-display text-7xl  heading uppercase tracking-[0.35em] text-white"
            >
              {word}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
