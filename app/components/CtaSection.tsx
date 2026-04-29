import React from "react";
import { ArrowLeft } from "lucide-react";

function CtaSection() {
  return (
    <section className="px-4 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-4xl rounded-3xl bg-linear-to-r from-primary to-third px-8 py-16 text-center shadow-xl sm:px-12">
        <h2 className="heading mb-4 text-3xl font-bold text-white sm:text-4xl">
          هل تريد أن تكون جزءًا من فريقنا؟
        </h2>
        <p className="mb-8 text-lg leading-8 text-white/90">
          انضم و تطوع مع فريقنا ، لتكون جزءا من إرثنا الحضاري الخالد
        </p>
        <a
          target="_blank"
          href="https://docs.google.com/forms/d/e/1FAIpQLSdHvr5R3_eS0nwktsFXqSuOYsEY9dgGL9o81FpBuD_gdY6BSQ/viewform?usp=dialog"
          className="bg-white hover:bg-gray-100 group heading inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-lg font-bold shadow-lg transition-all hover:scale-105"
        >
          سجل الآن
          <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
        </a>
      </div>
    </section>
  );
}

export default CtaSection;
