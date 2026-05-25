import React from "react";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

function CtaSection() {
  return (
    <section className="px-4 py-20 sm:px-8 lg:px-12" dir="rtl">
      <div className="mx-auto max-w-5xl rounded-[32px] px-6 py-14 text-center  sm:px-10">
        <div className="mb-12 flex flex-col items-center gap-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border-2 border-black heading bg-secondary px-4 py-1 text-2xl -rotate-3 font-bold text-black shadow-[3px_3px_0_0_#111111]">
            مشروع البوصلة
          </span>

          <h2 className="heading text-4xl font-bold leading-tight text-slate-900 sm:text-6xl">
            كل ما تحتاج معرفته قبل
            <span className="marker-underline text-primary heading">
              {" "}
              الانطلاق معنا
            </span>
          </h2>
          <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            إجابات واضحة تساعدك على فهم مسار مشروع البوصلة وكيفية الاستفادة من
            التكوينات السياسية والقيادية.
          </p>
          <div className="mt-1 h-px w-14 bg-primary" />
        </div>
        <div className="mx-auto mb-6 flex w-full max-w-2xl items-center justify-center">
          <Image
            src="/cta3.png"
            alt="دعوة للانضمام"
            width={520}
            height={260}
            className="h-auto w-full max-w-[520px]"
            priority
          />
        </div>

        <h2 className="heading mb-3 text-3xl font-bold text-slate-900 sm:text-4xl">
          انضم إلى مسارنا القيادي اليوم
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
          نوفّر لك بيئة تدريبية داعمة ومسارًا عمليًا لصقل المهارات وبناء أثر
          واقعي في المجتمع.
        </p>

        <a
          target="_blank"
          href="https://docs.google.com/forms/d/e/1FAIpQLSdHvr5R3_eS0nwktsFXqSuOYsEY9dgGL9o81FpBuD_gdY6BSQ/viewform?usp=dialog"
          className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
        >
          سجّل الآن
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
        </a>
      </div>
    </section>
  );
}

export default CtaSection;
