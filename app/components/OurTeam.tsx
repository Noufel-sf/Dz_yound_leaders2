import Image from "next/image";

export default function OurTeam() {
  return (
    <section id="our-team" dir="rtl" className="px-4 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/60">
          <Image
            src="/poli.png"
            alt="لماذا هذا البرنامج مهم"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="order-2 lg:order-1">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-bold tracking-widest text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            فريقنا
          </div>

          <h2 className="mt-5 heading text-3xl font-black leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            يتكوّن فريق برنامج{" "}
            <span className="text-primary marker-underline heading">
              "البوصلة"
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-9 text-slate-600 sm:text-xl">
            يتكوّن فريق برنامج “البوصلة” من مجموعة من الشباب الطموح والمتكامل،
            يجمعهم الشغف بالتعلّم والعمل الجماعي. يعمل الفريق بروح احترافية
            لتقديم برنامج تكويني عالي الجودة، قائم على التنظيم والالتزام، بهدف
            إحداث أثر إيجابي ومستدام.
          </p>

          <div className="mt-8 rounded-3xl border border-primary/10 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary/70">
              روح العمل
            </p>
            <p className="mt-3 text-base leading-8 text-slate-700">
              نؤمن بأن نجاح البرنامج يبدأ من فريق متكامل يشتغل بتنسيق واضح
              وتعاون مستمر، حتى يقدّم تجربة تكوينية مؤثرة وذات قيمة حقيقية
              للمشاركين.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
