"use client";

import { ChevronDown } from "lucide-react";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function ScrollIndicator() {
  const indicatorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!indicatorRef.current) return;

    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    tl.to(indicatorRef.current, {
      y: 12,
      duration: 1,
      ease: "power1.inOut",
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2">
      {/* Text */}
      <span className="heading text-sm font-bold tracking-widest text-black/70">
        اسحب للأسفل
      </span>

      {/* Mouse */}
      <div
        ref={indicatorRef}
        className="flex h-14 w-8 items-start justify-center rounded-full border-2 border-black bg-white p-1 shadow-[3px_3px_0_0_#111111]"
      >
        <div className="h-3 w-1.5 rounded-full bg-black" />
      </div>

      {/* Arrow */}
      <ChevronDown className="h-5 w-5 animate-bounce text-black" />
    </div>
  );
}