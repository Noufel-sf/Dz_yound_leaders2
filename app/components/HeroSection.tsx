"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import Link from "next/link";



export default function HeroSection() {
  return (
    <section
      dir="rtl"
      className="relative min-h-screen bg-[var(--figjam-blue)] overflow-hidden px-4 py-2 md:py-8 sm:px-8"
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