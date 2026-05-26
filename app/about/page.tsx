import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import CtaSection from "../components/CtaSection";
import Owner from "../components/Owner";
import WhyChooseUs from "../components/WhyChooseUs";
import OurVision from "../components/OurVision";
import OurGoal from "../components/OurGoal";
import OurTeam from "../components/OurTeam";
import Plan from "../components/Plan";
import WerbsiteBuilder from "../components/WerbsiteBuilder";

export default function AboutPage() {
  return (
    <main dir="rtl" className="min-h-screen ">
      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden px-4 py-24 sm:px-8 lg:px-12">
        <div className="absolute inset-0 -z-10" />

        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-6  px-5 py-2.5">
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-black heading bg-secondary px-4 py-1 text-3xl -rotate-3 font-bold text-black shadow-[3px_3px_0_0_#111111]">
              من نحن
            </span>
          </div>

          <h1 className="heading mb-6 text-[3.3rem] font-bold leading-[1.15] tracking-tight text-slate-900 sm:text-[4rem] lg:text-[6rem]">
            مشروع
            <span className="text-primary heading marker-underline">
              {" "}
              انطلاقتك
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
              className="btn-gradient heading group inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-lg font-bold shadow-lg transition-all hover:scale-105"
            >
               سجل الآن
              <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
            </a>
          </div>
        </div>
      </section>
      <OurTeam />
      <WerbsiteBuilder />
      {/* <OurGoal /> */}
      <WhyChooseUs />
      <OurVision />
      {/* <Plan /> */}
      <CtaSection />
    </main>
  );
}
