"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

/* ─── Decorative background grid ─── */

/* ─── Logo placeholder ─── */
// function LogoSlot() {
//   return (
//     <div
//       className="hidden md:flex items-center gap-3 select-none"
//       aria-label="شعار المشروع"
//     >
//       <div className="relative flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border-2 border-primary bg-white shadow-md ring-2 ring-primary/30">
//         {/* ↓ Delete this placeholder content and add your logo here ↓ */}
//         <span className="text-xs font-black text-primary leading-none text-center">
//           <Image
//             src="/logo.png"
//             alt="مشروع البوصلة"
//             width={48}
//             height={48}
//             priority
//           />
//         </span>
//         {/* ↑ ─────────────────────────────────────────────────────── ↑ */}
//       </div>

//       {/* Word-mark beside the logo */}
//       <div className="flex flex-col items-start leading-tight gap-2" dir="rtl">
//         <span className="text-[15px] font-black tracking-tight text-slate-900">
//           مشروع البوصلة
//         </span>
//         <span className="text-[11px] font-medium text-slate-500">
//           DZ Young Leaders
//         </span>
//       </div>
//     </div>
//   );
// }

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden px-4 py-12 sm:px-8 lg:px-14" dir="ltr">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-10 lg:flex-row lg:items-start lg:justify-between">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full lg:w-1/2"
          dir="rtl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-secondary/35 bg-secondary/10 px-4 py-2 text-xs font-bold tracking-wider text-secondary">
            <span className="h-2 w-2 rounded-full bg-secondary" />
            DZ Young Leaders
          </span>

          <h1 className="mt-6 heading text-4xl font-black leading-tight text-primary sm:text-5xl lg:text-6xl">
            تمكين الشباب بالمهارات الرقمية
            <span className="mt-2 block text-secondary heading">من الفكرة إلى سوق العمل</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-700 sm:text-lg">
            برنامج تدريبي موجه للشباب من 18 إلى 35 سنة يجمع بين المهارات الناعمة والمهارات
            التقنية مع تركيز عملي على الذكاء الاصطناعي والمسارات التخصصية.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/about"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-7 text-sm font-bold text-white transition hover:brightness-105"
            >
              اكتشف البرنامج
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-secondary px-7 text-sm font-bold text-secondary transition hover:bg-secondary hover:text-white"
            >
              سجل اهتمامك
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="w-full lg:w-1/2"
        >
          <div className="relative mx-auto max-w-xl ">
            <Image
              src="/work.svg"
              alt="work illustration"
              width={900}
              height={700}
              priority
              className="h-auto w-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
