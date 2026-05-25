import React from "react";
import { Check } from "lucide-react";

const highlights = [
  {
    title: "تأهيل شامل",
    description:
      "برنامج متكامل يغطي المسارات المهارية والقانونية والإدارية والسياسية.",
    accent: "border-[var(--figjam-blue)]",
    iconBg: "bg-[var(--figjam-blue)]",
  },
  {
    title: "قيادة واعية",
    description:
      "نعد جيلاً قادراً على فهم الحياة العامة والمشاركة الفعالة فيها.",
    accent: "border-[var(--figjam-yellow)]",
    iconBg: "bg-[var(--figjam-yellow)]",
  },
  {
    title: "هوية قوية",
    description:
      "نحافظ على التراث الثقافي ونطوره ليكون منطلقاً للتغيير الإيجابي.",
    accent: "border-[var(--figjam-pink)]",
    iconBg: "bg-[var(--figjam-pink)]",
  },
  {
    title: "شراكات استراتيجية",
    description:
      "دعم من وزارة الشباب والمجلس الأعلى للشباب ضمن برنامج DZ Young Leaders.",
    accent: "border-[var(--figjam-green)]",
    iconBg: "bg-[var(--figjam-green)]",
  },
  {
    title: "تقييم مستمر",
    description: "نظام تقييم شامل لضمان جودة المخرجات وتحقيق الأهداف المرجوة.",
    accent: "border-[var(--figjam-purple)]",
    iconBg: "bg-[var(--figjam-purple)]",
  },
  {
    title: "تأثير ملموس",
    description:
      "نهدف إلى بناء جيل قادر على إحداث تغيير إيجابي في المجتمع الجزائري.",
    accent: "border-[var(--figjam-blue)]",
    iconBg: "bg-[var(--figjam-blue)]",
  },
];

function WhyChooseUs() {
  return (
    <section className="bg-[var(--figjam-blue)] px-4 py-20 sm:px-8 lg:px-12">
      <div className="mb-10 flex flex-col items-center gap-4 text-center">
        <span className="rounded-full border-2 border-black bg-[var(--figjam-yellow)] px-4 py-1 text-xl heading font-bold text-black shadow-[3px_3px_0_0_#111111]">
          ما الذي يميزنا
        </span>
        <h2 className="heading text-5xl font-bold uppercase text-[#111111] sm:text-7xl">
          <span className="block heading">ما الذي يميزنا</span>
        </h2>
      </div>

      <div className="mx-auto max-w-6xl -rotate-1 rounded-[28px] border-[3px] border-black bg-[var(--figjam-cream)] p-6 shadow-[10px_10px_0_0_#111111] sm:p-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item, idx) => (
            <article
              key={idx}
              className={`rounded-2xl border-[3px] bg-white p-6 shadow-[6px_6px_0_0_#111111] ${item.accent}`}
            >
              <div className="mb-4 flex items-center justify-between">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl border-2 border-black text-[#111111] ${item.iconBg}`}
                >
                  <Check className="h-6 w-6" />
                </div>
                <div className="flex items-center gap-1">
                  <span className="h-3 w-3 rounded-full bg-[var(--figjam-blue)]" />
                  <span className="h-3 w-3 rounded-full bg-[var(--figjam-green)]" />
                  <span className="h-3 w-3 rounded-full bg-[var(--figjam-yellow)]" />
                </div>
              </div>
              <h3 className="heading mb-3 text-lg font-bold text-[#111111]">
                {item.title}
              </h3>
              <p className="text-sm leading-7 text-[#111111]/70">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 h-0.5 w-full bg-black" />
      </div>
    </section>
  );
}

export default WhyChooseUs;
