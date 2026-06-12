"use client";

import { forwardRef, useImperativeHandle, useRef } from "react";

const PROBLEM_AND_OBJECTIVES_DATA = [
  {
    id: "01",
    title: "الإشكالية",
    desc: "فجوة واضحة بين التعليم التقليدي ومتطلبات السوق، وضعف في امتلاك أدوات الذكاء الاصطناعي والمسارات التقنية لدى الشباب.",
    color: "bg-rose-50",
    textColor: "text-rose-900",
  },
  {
    id: "02",
    title: "الأهداف",
    desc: "تمكين الشباب بالمعرفة القيادية والمهارات التقنية الأساسية، وفتح مسارات تخصصية تطبيقية لبناء الكفاءة والجاهزية المهنية.",
    color: "bg-emerald-50",
    textColor: "text-emerald-900",
  },
  {
    id: "03",
    title: "الحلول",
    desc: "برنامج تكويني متدرج يجمع بين التعلم التطبيقي، المشاريع الواقعية، والتوجيه المستمر لصناعة أثر حقيقي.",
    color: "bg-slate-50",
    textColor: "text-slate-900",
  },
];

const ProblemAndObjectives = forwardRef((_, ref) => {
  const ProblemAndObjectivesRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useImperativeHandle(ref, () => ({
    section: ProblemAndObjectivesRef.current,
    items: cardsRef.current,
    title: titleRef.current,
  }));

  return (
    <section
      ref={ProblemAndObjectivesRef}
      className="relative w-full overflow-hidden bg-primary-950 py-16 lg:h-screen lg:py-0"
    >
      <div className="relative flex w-full items-center justify-center px-6 lg:mt-30 lg:px-8">
        <h2
          ref={titleRef}
          className="featured heading select-none text-center font-display text-[15vw] uppercase leading-none tracking-tighter sm:text-[11vw]"
        >
          الاشكالية و
          <span className="text-primary heading "> الحلول</span>
        </h2>
      </div>

      <div className="relative mt-10 flex flex-col gap-5 px-4 lg:absolute lg:inset-0 lg:top-[35vh] lg:mt-0 lg:block lg:px-0">
        {PROBLEM_AND_OBJECTIVES_DATA.map((item, index) => (
          <div
            key={item.id}
            ref={(el) => {
              if (el) cardsRef.current[index] = el;
            }}
            className={`relative flex min-h-[58vh] w-full flex-col items-center justify-center border-4 border-black ${item.color} ${item.textColor} px-6 py-12 shadow-[5px_5px_0_0_#111111] md:px-20 lg:absolute lg:top-0 lg:h-full lg:border-0 lg:py-0 lg:shadow-none`}
            style={{ zIndex: index + 1 }}
          >
            <div className="service-content flex max-w-4xl flex-col items-center text-center">
              <span className="mb-4 font-mono text-sm uppercase tracking-widest opacity-40">
                {item.id}
                
              </span>
              <h2 className="mb-6 font-display heading text-5xl uppercase leading-[0.9] md:text-7xl">
                {item.title}
              </h2>
              <p className="max-w-xl font-sans text-lg opacity-70">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});

ProblemAndObjectives.displayName = "ProblemAndObjectives";
export default ProblemAndObjectives;
