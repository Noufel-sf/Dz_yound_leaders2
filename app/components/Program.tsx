import Image from "next/image";
const phases = [
  {
    id: "01",
    title: "المرحلة الأولى: بناء الشخصية وصقل المهارات الناعمة",
    badge: "إلزامية",
    summary:
      "هذه المرحلة هي حجر الأساس في المخيم، وتهدف إلى تجهيز المشاركين بمهارات التواصل والقيادة وإدارة الذات قبل الانتقال إلى أي تخصص تقني.",
    points: [
      "التواصل والذكاء العاطفي: فهم أنماط الشخصيات، الإقناع، إدارة النزاعات، والتعامل بذكاء وفعالية.",
      "القيادة والعمل الجماعي: بناء الفرق عالية الأداء وتوزيع الأدوار بما يرفع الانسجام والإنتاجية.",
      "إدارة الذات والوقت: تقنيات الإنتاجية الشخصية، التعامل مع ضغط العمل، وتجنب الاحتراق الوظيفي.",
    ],
  },
  {
    id: "02",
    title: "المرحلة الثانية: التمكين التقني والمسارات التخصصية",
    badge: "إلزامية ثم اختيارية",
    summary:
      "تنطلق هذه المرحلة بتدريب مكثف على الذكاء الاصطناعي بوصفه المهارة الصلبة الأساسية، ثم يختار كل مشارك مسارًا تخصصيًا واحدًا للتطبيق العملي.",
    points: [
      "الذكاء الاصطناعي وPrompt Engineering: استخدام الأدوات الحديثة لرفع الإنتاجية وأتمتة المهام.",
      "Python: أساسيات عملية لتبسيط المهام وتطوير التفكير البرمجي.",
      "المسارات المتاحة: ريادة الأعمال، التسويق الرقمي، وإدارة المشاريع.",
    ],
  },
  {
    id: "03",
    title: "المرحلة الثالثة: صناعة الأثر (TOT)",
    badge: "تأثير",
    summary:
      "تستهدف هذه المرحلة تحويل المتدربين المتميزين إلى صناع معرفة قادرين على نقل الخبرة وتقديمها باحترافية أمام الجمهور.",
    points: [
      "سيكولوجية تعلم الكبار وتصميم الحقائب التدريبية الاحترافية.",
      "مهارات الإلقاء، كاريزما الظهور، والتحكم في نبرة الصوت ولغة الجسد.",
      "إعداد متدربين قادرين على نقل المعرفة التقنية للأقران بشكل مستدام.",
    ],
  },
];

const evaluations = [
  {
    title: "التقييم المعرفي",
    text: "اختبارات قبلية وبعدية لقياس تطور المهارات الناعمة والتقنية المكتسبة.",
  },
  {
    title: "المشاريع التطبيقية",
    text: "تقييم جودة المشاريع النهائية ومدى دمج أدوات الذكاء الاصطناعي فيها.",
  },
  {
    title: "الأداء التدريبي",
    text: "عرض حي (Demo Day) لقياس قوة الإلقاء والقدرة على نقل المعلومة.",
  },
  {
    title: "قياس الأثر والرضا",
    text: "استطلاعات رأي دورية لقياس ملاءمة البرنامج للفئة العمرية 18-35 سنة.",
  },
];

export default function Program() {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-8 lg:px-12" dir="rtl">
      <div className="absolute inset-0 -z-10" />
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
           <div className="">
            <Image src="/stars.png" alt="فريق انطلاقتك" width={48} height={48} />
          </div>
          <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
            <span className="heading marker-underline text-primary heading">النشاطات</span>
            <span className="heading marker-underline mr-2 heading">والبرنامج التدريبي </span>
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-700 sm:text-lg">
            تعتمد منهجية التدريب في المخيم على ثلاث مراحل تكاملية تضمن الانتقال السلس من
            التأسيس إلى التخصص ثم التأثير، مع مسارات واضحة للتعلم والتطبيق والتقييم.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {phases.map((phase) => (
            <article
              key={phase.id}
              className="group relative overflow-hidden rounded-3xl border border-primary/10 bg-white p-6 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:border-secondary/30 hover:shadow-lg"
            >
              <div className="absolute right-0 top-0 h-1 w-full" />
              <div className="flex items-start justify-between gap-4">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-sm font-black text-primary">
                  {phase.id}
                </span>
                <span className="rounded-full border border-secondary/20 bg-secondary/10 px-3 py-1 text-xs font-bold text-secondary">
                  {phase.badge}
                </span>
              </div>

              <h3 className="mt-5 heading text-xl font-black leading-snug text-slate-900">
                {phase.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{phase.summary}</p>

              <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-700">
                {phase.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-secondary" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-14  p-6 sm:p-8">
          <div className="max-w-3xl">
            <h3 className="text-2xl heading font-black leading-tight sm:text-3xl">
              <span className="heading marker-underline text-primary">خامسًا:</span>
              <span className="mx-2 heading text-primary">التقييم</span>
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
              تعتمد عملية التقييم على نظام شامل يضمن جودة المخرجات وتحقيق الأهداف المرجوة.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {evaluations.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-secondary/15 bg-white p-5 shadow-sm"
              >
                <h4 className="heading text-lg font-black text-secondary">{item.title}</h4>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}