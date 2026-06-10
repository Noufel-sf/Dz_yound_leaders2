"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {


  return (
    <main
      dir="rtl"
      className="relative flex min-h-screen items-center justify-center overflow-hidden  px-6 py-20"
    >


      {/* floating shapes */}
      <div className="float-shape absolute left-4 top-26 rotate-[-12deg] md:left-10">
        <Image
          src="/shape1.png"
          alt=""
          width={150}
          height={150}
          className="w-24 md:w-36"
        />
      </div>

      <div className="float-shape absolute top-30 rotate-6 -right-7">
        <Image
          src="/shape3.png"
          alt=""
          width={170}
          height={170}
          className="w-28 md:w-40"
        />
      </div>

      {/* content */}
      <div className="relative z-10 flex max-w-3xl flex-col items-center text-center">
        {/* badge */}
        <span className="animate-item heading border-2 border-black bg-secondary px-5 py-2 text-sm font-black shadow-[4px_4px_0_0_#111111]">
          خطأ 404
        </span>

        {/* big number */}
        <h1 className="animate-item heading mt-8 text-[7rem] font-black leading-none text-primary sm:text-[9rem] md:text-[12rem]">
          404
        </h1>

        {/* title */}
        <h2 className="animate-item heading mt-2 text-3xl font-black text-black sm:text-5xl">
          الصفحة غير موجودة
        </h2>

        {/* text */}
        <p className="animate-item mt-6 max-w-xl text-lg leading-9 text-black/70">
          يبدو أنك وصلت إلى صفحة غير متوفرة أو تم نقلها.
          <br />
          يمكنك العودة إلى الصفحة الرئيسية ومتابعة رحلتك معنا.
        </p>

        {/* button */}
        <Link
          href="/"
          className="animate-item heading mt-10 inline-flex h-14 items-center gap-3 border-2 border-black bg-primary px-8 text-lg font-black text-white shadow-[5px_5px_0_0_#111111] transition-all hover:-translate-y-1 hover:shadow-[8px_8px_0_0_#111111]"
        >
          العودة للرئيسية
          <ArrowLeft className="h-5 w-5" />
        </Link>
      </div>
    </main>
  );
}