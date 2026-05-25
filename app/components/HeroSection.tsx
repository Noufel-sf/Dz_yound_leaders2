"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

function PenSVG() {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 40 40"
      className="drop-shadow-[0_8px_16px_rgba(0,0,0,0.15)]"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g fill="none" strokeMiterlimit="10">
        <path
          fill="#fcdd00"
          stroke="#231f20"
          d="M21.29 6.83c-4 4-8.27 9.25-8.67 10.64a2.7 2.7 0 0 0-.34.88c-2.55-.28-5.19.71-7.69 3.22C0 26.15-.32 36.3 1.64 38.27s12.12 1.64 16.7-3c2.51-2.5 3.5-5.14 3.22-7.69a3.1 3.1 0 0 0 .88-.34c1.39-.4 6.67-4.7 10.64-8.67C40.93 10.77 40.8 7 36.87 3S28.53-.41 21.29 6.83Z"
          strokeWidth="1.5"
        />
        <path
          stroke="#231f20"
          strokeLinecap="round"
          d="M15.1 20a14 14 0 0 1 2.67 2.2A13.8 13.8 0 0 1 20 24.87"
          strokeWidth="1.5"
        />
      </g>
    </svg>
  );
}

/* ─── Decorative background grid ─── */

/* ─── Logo placeholder ─── */
function LogoSlot() {
  return (
    <div
      className="hidden md:flex items-center gap-3 select-none"
      aria-label="شعار المشروع"
    >
      <div className="relative flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border-2 border-primary bg-white shadow-md ring-2 ring-primary/30">
        {/* ↓ Delete this placeholder content and add your logo here ↓ */}
        <span className="text-xs font-black text-primary leading-none text-center">
          <Image
            src="/logo.png"
            alt="مشروع البوصلة"
            width={48}
            height={48}
            priority
          />
        </span>
        {/* ↑ ─────────────────────────────────────────────────────── ↑ */}
      </div>

      {/* Word-mark beside the logo */}
      <div className="flex flex-col items-start leading-tight gap-2" dir="rtl">
        <span className="text-[15px] font-black tracking-tight text-slate-900">
          مشروع البوصلة
        </span>
        <span className="text-[11px] font-medium text-slate-500">
          DZ Young Leaders
        </span>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section
      dir="rtl"
      className="relative min-h-screen overflow-hidden px-4 py-2 md:py-8 sm:px-8"
    >

    
      {/* ── Hero content ── */}
      <div className="relative z-10 mx-auto flex w-full gap-2 max-w-5xl flex-col items-center text-center">
        {/* Eyebrow pill */}

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="mt-7 max-w-3xl text-3xl font-extrabold leading-tight heading text-gradient-primary sm:text-7xl"
        >
          هل أنت مستعد لتقود التغيير وتُشارك في
          <span className="relative heading marker-underline text-primary mx-2 inline-block pb-2">
            صناعة القرار ؟
          </span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
    
        </motion.div>

        {/* Sub-descriptions */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl"
        >
          مشروع البوصلة مبادرة شبابية لتأهيل وتمكين الشباب في المجال السياسي عبر
          مسارات مهارية، قانونية، إدارية وسياسية.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.42, ease: "easeOut" }}
          className="mt-3 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base"
        >
          تم اختيار المشروع ضمن برنامج  <span className="font-bold marker-underline text-primary">DZ Young Leaders</span> التابع لوزارة الشباب
          وبالتنسيق مع المجلس الأعلى للشباب، مما يعكس أهمية دوره في دعم وتمكين
          الشباب الجزائري.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: "easeOut" }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:mt-12"
        >
          <Link
            href="/about"
            className="btn-gradient heading inline-flex min-h-[52px] w-full max-w-xs items-center justify-center rounded-full px-10 text-lg font-bold shadow-lg transition duration-300 hover:scale-[1.03] active:scale-[0.98]"
          >
            تعرف أكثر
          </Link>
        </motion.div>

        {/* Corner accents */}
        <span
          className="pointer-events-none absolute right-[14%] top-20 text-2xl text-yellow-400 opacity-70"
          aria-hidden="true"
        >
          ✦
        </span>
        <span
          className="pointer-events-none absolute left-[15%] top-32 text-xl text-pink-400 opacity-60"
          aria-hidden="true"
        >
          ✦
        </span>
        <span
          className="pointer-events-none absolute right-[22%] top-56 text-sm text-violet-400 opacity-50"
          aria-hidden="true"
        >
          ●
        </span>
        <span
          className="pointer-events-none absolute left-[22%] top-64 text-sm text-indigo-400 opacity-50"
          aria-hidden="true"
        >
          ●
        </span>
      </div>
    </section>
  );
}