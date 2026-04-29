import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import CtaSection from "../components/CtaSection";
import Owner from "../components/Owner";
import WhyChooseUs from "../components/WhyChooseUs";
import OurVision from "../components/OurVision";
import OurGoal from "../components/OurGoal";
import OurTeam from "../components/OurTeam";
import Plan from "../components/Plan";

export default function AboutPage() {
  return (
    <main dir="rtl" className="min-h-screen ">
      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden px-4 py-24 sm:px-8 lg:px-12">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_25%,rgba(10,153,0,0.08),transparent_40%),radial-gradient(circle_at_80%_60%,rgba(224,47,117,0.08),transparent_40%)]" />

        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-6 inline-flex rounded-full bg-primary/10 px-5 py-2.5">
            <span className="text-sm font-semibold text-primary heading">
              من نحن
            </span>
          </div>

          <h1 className="heading mb-6 text-5xl font-bold leading-tight  text-slate-900 sm:text-6xl lg:text-7xl">
            مشروع
            <span className="text-primary heading marker-underline">
              {" "}
              البوصلة
            </span>
          </h1>

          <p className="mx-auto mb-8 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
            مبادرة شبابية تكوينية تسعى إلى تأهيل وتمكين الشباب الجزائري في
            المجال السياسي وصناعة القرار، من خلال تكوينات تطبيقية تعزز الكفاءة
            والقيادة والمسؤولية.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              target="_blank"
              href="https://docs.google.com/forms/d/e/1FAIpQLSfbaB2RWp_-TUz-QmFcEI1RDSXqHGAT_W0SxGcHdRHxbjSl5g/viewform"
              className="btn-gradient group inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-lg font-bold shadow-lg transition-all hover:scale-105"
            >
               سجل الآن
              <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
            </a>
          </div>
        </div>
      </section>
      <OurTeam />
      <Owner />
      <OurGoal />
      <WhyChooseUs />
      <OurVision />
      <Plan />


      {/* ── Program Pillars ── */}
      {/* <section className="relative overflow-hidden px-4 py-24 sm:px-8 lg:px-12">
        <div className="absolute inset-0 -z-10 bg-primary" />
        <div className="absolute inset-0 -z-10 bg-(image:--gradient-primary) opacity-70" />

        <div className="mx-auto max-w-6xl">
          <h2 className="heading mb-6 text-center text-4xl font-bold text-white sm:text-5xl">
            أركان البرنامج
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-lg leading-8 text-white/90">
            يقوم مشروع البوصلة على ثلاثة أركان أساسية تعمل معاً لإعداد القادة
            السياسيين الواعيين
          </p>

          <div className="grid gap-8 lg:grid-cols-3">
            {programPillars.map((pillar, idx) => (
              <article
                key={idx}
                className="rounded-2xl bg-white/10 p-8 backdrop-blur-sm"
              >
                <div className="mb-6 text-5xl font-bold text-white/20">
                  {pillar.number}
                </div>
                <h3 className="heading mb-4 text-2xl font-bold text-white">
                  {pillar.title}
                </h3>
                <p className="text-base leading-8 text-white/80">
                  {pillar.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section> */}

      {/* ── Values Grid ── */}
      <section className="px-4 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="heading mb-16 text-center text-4xl font-bold text-slate-900 sm:text-5xl">
            قيمنا{" "}
            <span className="text-primary marker-underline heading">
              الأساسية
            </span>
          </h2>

          <div className="grid gap-6 sm:grid-cols-2">
            {[
              {
                title: "النزاهة",
                desc: "الالتزام بالصدق والشفافية في كل أعمالنا وقراراتنا.",
              },
              {
                title: "الكفاءة",
                desc: "تطوير مهارات عملية قابلة للتطبيق الفوري في الواقع.",
              },
              {
                title: "الشمولية",
                desc: "فتح الفرص أمام جميع الشباب بغض النظر عن خلفياتهم.",
              },
              {
                title: "الاستدامة",
                desc: "بناء تأثير طويل الأمد يستمر ويتطور عبر الأجيال.",
              },
              {
                title: "الحياد",
                desc: "الالتزام بالعدالة والمساواة في جميع أعمالنا.",
              },
              {
                title: "العمل الجماعي",
                desc: "التعاون والتنسيق بين أعضاء الفريق لتحقيق الأهداف المشتركة.",
              },

            ].map((value, idx) => (
              <article
                key={idx}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg hover:border-primary/30"
              >
                <h3 className="heading mb-3 text-xl font-bold text-slate-900">
                  {value.title}
                </h3>
                <p className="text-slate-600">{value.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <CtaSection />
    </main>
  );
}
