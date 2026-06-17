"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface PreloaderProps {
  onComplete: () => void;
}

const WORDS = ["نحلم", "نبني"];

export const PreLoad = ({ onComplete }: PreloaderProps) => {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const wordRefs = useRef<Array<HTMLSpanElement | null>>([]);

  const [isComplete, setIsComplete] = useState(false);

  useGSAP(
    () => {
      if (!preloaderRef.current) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReducedMotion) {
        gsap.delayedCall(0.15, () => {
          setIsComplete(true);
          onComplete();
        });

        return;
      }

      gsap.set(preloaderRef.current, {
        autoAlpha: 1,
      });

      gsap.set(eyebrowRef.current, {
        opacity: 0,
        y: 12,
      });

      gsap.set(wordRefs.current, {
        opacity: 0,
        y: 50,
        rotateX: -15,
      });

      const tl = gsap.timeline({
        defaults: {
          ease: "power2.out",
        },

        onComplete: () => {
          gsap.to(preloaderRef.current, {
            yPercent: -100,
            duration: 0.55,
            ease: "power3.inOut",

            onComplete: () => {
              setIsComplete(true);
              onComplete();
            },
          });
        },
      });

      // Badge
      tl.to(eyebrowRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.25,
      });

      // Words
      WORDS.forEach((_, index) => {
        tl.to(
          wordRefs.current[index],
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.25,
            ease: "back.out(1.5)",
          },
          ">",
        ).to(wordRefs.current[index], {
          opacity: 0,
          y: -40,
          rotateX: 10,
          duration: 0.25,
          ease: "power2.in",
          delay: 0.15,
        });
      });

      return () => {
        tl.kill();
      };
    },
    { scope: preloaderRef },
  );

  if (isComplete) return null;

  return (
    <div
      ref={preloaderRef}
      dir="rtl"
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-primary"
    >
      <div
        ref={containerRef}
        className="flex w-full max-w-3xl flex-col items-center justify-center px-6 text-center"
      >
        {/* Badge */}
        <p
          ref={eyebrowRef}
          className="heading mb-8 border-2 border-black bg-secondary px-5 py-2 text-base font-black text-black shadow-[4px_4px_0_0_#111111] md:text-lg"
        >
          مخيم الرواد الشبابي
        </p>

        {/* Words */}
        <div className="relative flex h-28 w-full items-center justify-center overflow-hidden md:h-36">
          {WORDS.map((word, index) => (
            <span
              key={word}
              ref={(el) => {
                wordRefs.current[index] = el;
              }}
              className="heading absolute inset-0 flex items-center justify-center text-6xl font-black text-white md:text-8xl"
            >
              {word}
            </span>
          ))}
        </div>

        {/* Tagline */}
        <p className="mt-4 text-sm text-white/60 md:text-base">
          نصنع جيلاً يقود المستقبل
        </p>
      </div>
    </div>
  );
};