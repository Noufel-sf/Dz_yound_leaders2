import React from "react";

export default function ReelVideo() {
  return (
    <section className="w-full bg-[var(--figjam-cream)] flex flex-col items-center gap-5 px-4 py-20 sm:px-8 lg:px-12">
             <div className="mb-12 flex flex-col items-center gap-4 text-center">
         <span className="inline-flex items-center gap-2 rounded-full border-2 border-black heading bg-secondary px-4 py-1 text-2xl -rotate-3 font-bold text-black shadow-[3px_3px_0_0_#111111]">
          مشروع البوصلة
        </span>

          <h2 className="heading text-4xl font-bold leading-tight text-slate-900 sm:text-6xl">
            كل ما تحتاج معرفته قبل
            <span className="marker-underline text-primary heading"> الانطلاق معنا</span>
          </h2>
          <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            إجابات واضحة تساعدك على فهم مسار مشروع البوصلة وكيفية الاستفادة من
            التكوينات السياسية والقيادية.
          </p>
          <div className="mt-1 h-px w-14 bg-primary" />
        </div>
      <div className="mx-auto max-w-4xl">
        <div className="rounded-[28px] border-2 border-dashed border-black/70 bg-[var(--figjam-cream)] p-4 shadow-[8px_8px_0_0_#111111] sm:p-6">
          <div className="rounded-[18px] border-2 border-black bg-white p-2">
            <video
              className="w-full rounded-[12px]"
              controls
              poster="/video-poster.jpg"
            >
              <source src="/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
