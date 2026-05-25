import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";



export default function HeroSection() {
  return (
    <section
      dir="rtl"
      className="relative min-h-screen overflow-hidden bg-blue-700 px-4 py-24 sm:px-8"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        <span className="inline-flex items-center gap-2 rounded-full border-2 border-black heading bg-secondary px-4 py-1 text-3xl -rotate-3 font-bold text-black shadow-[3px_3px_0_0_#111111]">
          مشروع البوصلة
        </span>

        <h1 className="heading mt-6 text-5xl font-black leading-[1.05] heading tracking-tight text-white sm:text-6xl lg:text-8xl">
            هل أنت مستعد لتكون جزءًا من جيل جديد يشارك في السياسة
          <span className="block heading mt-8 text-secondary">وتشارك في صناعة القرار؟</span>
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
          مشروع البوصلة مبادرة شبابية لتأهيل وتمكين الشباب في المجال السياسي عبر
          مسارات مهارية، قانونية، إدارية وسياسية.
        </p>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
          تم اختيار المشروع ضمن برنامج
          <span className="mx-2 font-bold text-secondary heading">DZ Young Leaders</span>
          التابع لوزارة الشباب وبالتنسيق مع المجلس الأعلى للشباب، مما يعكس أهمية
          دوره في دعم وتمكين الشباب الجزائري.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-2">
          {[
            "حل المشكلات",
            "المسارات التخصصية",
            "القيادة الواعية",
          ].map((label) => (
            <span
              key={label}
              className="rounded-full border-2 border-black heading bg-[var(--figjam-cream)] px-3 py-1 text-sm font-bold text-black shadow-[2px_2px_0_0_#111111] md:text-lg"
            >
              {label}
            </span>
          ))}
        </div>

        <div className="mt-8 flex w-full flex-row gap-3  items-center justify-center">
          <Button
            asChild
            className="heading h-12 border-2 px-4 border-black bg-primary text-primary-foreground shadow-[4px_4px_0_0_#111111] hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
          >
            <Link href="/about">ابدأ الآن</Link>
          </Button>
          <Button
            asChild
            variant="neutral"
            className="heading h-12 border-2 border-black px-4 bg-secondary text-secondary-foreground shadow-[4px_4px_0_0_#111111] hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
          >
            <Link href="/about">تعرف أكثر</Link>
          </Button>
        </div>

        
      </div>
    </section>
  );
}