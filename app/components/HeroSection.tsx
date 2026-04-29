"use client";

import React from "react";
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
    <div
      dir="rtl"
      className="relative min-h-screen overflow-hidden px-4 py-2 md:py-8 sm:px-8"
    >
      {/* Background texture */}

      {/* ── Top nav bar with logo ── */}
 
      {/* ── Hero content ── */}
      <div className="relative z-10 mx-auto flex w-full gap-2 max-w-5xl flex-col items-center text-center">
        {/* Eyebrow pill */}
{/* 
        <div className="flex justify-center">
          <div className="relative  overflow-hidden ">
            <Image
              src="/logo.png"
              alt="شعار مشروع البوصلة"
              width={120}
              height={100}
              priority
              className="object-contain"
            />
          </div>
        </div> */}

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="mt-7 max-w-5xl text-5xl font-extrabold leading-tight hero-title sm:text-7xl"
        >
          <div className="text-[34px] sm:text-[48px] ">
            <span className="highlight highlight-pink heading">تمكين الشباب</span>
            <span className="highlight highlight-blue heading">من</span>
            <span className="mx-2 heading">18</span>
            <span className="mx-1 heading">إلى</span>
            <span className="mx-2 highlight highlight-green heading">35</span>
          </div>
          <div className="text-[28px] sm:text-[40px] mt-2">
            <span className="mx-2">في</span>
            <span className="highlight highlight-yellow heading">الذكاء الاصطناعي</span>
            <span className="mx-2">والمسارات</span>
            <span className="mx-2">التقنية</span>
          </div>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-flex w-fit mt-5 items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-bold capitalize tracking-widest text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            dz young leaders - مشروع البوصلة
          </span>
        </motion.div>

        {/* Sub-descriptions */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="mt-6 max-w-2xl text-lg leading-8 hero-sub sm:text-xl"
        >
          يهدف المشروع إلى تقليل الفجوة المعرفية بين التعليم الأكاديمي ومتطلبات
          سوق العمل عبر تمكين الشباب بالمهارات الصلبة والناعمة، مع تركيز خاص على
          إكساب مهارات الذكاء الاصطناعي كمهارة إنتاجية أساسية.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.42, ease: "easeOut" }}
          className="mt-3 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base"
        >
          المراحل:
          <span className="block mt-2">1. بناء الشخصية وصقل المهارات الناعمة (إلزامية)</span>
          <span className="block">2. التمكين التقني والمسارات التخصصية (إلزامية ثم اختيارية)</span>
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
            className="btn-gradient heading inline-flex min-h-13 w-full max-w-xs items-center justify-center rounded-full px-10 text-lg font-bold shadow-lg transition duration-300 hover:scale-[1.03] active:scale-[0.98]"
          >
            تعرف أكثر
          </Link>
        </motion.div>

      </div>
    </div>
  );
}
