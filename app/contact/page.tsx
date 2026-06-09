import Link from "next/link";
import FaqSection from "../components/FaqSection";
import OurLocation from "../components/OurLocation";
import { ArrowLeft } from "lucide-react";
// import WerbsiteBuilder from "../components/WerbsiteBuilder";

const socials = [
  {
    id: "instagram",
    label: "INSTAGRAM",
    href: "https://www.instagram.com/albawsala_program",
    color: "bg-secondary text-white hover:bg-accent hover:text-primary",
  },
  {
    id: "facebook",
    label: "FACEBOOK",
    href: "https://www.facebook.com/profile.php?id=61590390284453&locale=fr_FR",
    color: "bg-primary text-white hover:bg-accent hover:text-primary",
  },
  {
    id: "whatsapp",
    label: "WHATSAPP",
    href: "https://wa.me/+213772358023",
    color: "bg-secondary text-white hover:bg-accent hover:text-primary",
  },

];

export default function ContactPage() {
  return (
    <main dir="rtl" className="min-h-screen z-10 flex flex-col py-24">
      {/* ── Hero ── */}
      <div className="w-full pt-24 pb-16 px-6 text-center">
        <p className="inline-flex items-center gap-2 border-2 mb-2 border-black heading bg-secondary px-7 py-1 text-xl -rotate-3 font-bold text-black shadow-[3px_3px_0_0_#111111]">
          تواصل معنا
        </p>
        <h1 className="heading mb-5 rotate-2 text-[3.8rem] font-bold leading-[1.15] tracking-tight text-slate-900 lg:text-[9rem]">
          تواصل مع فريق
          <span className="text-primary heading ">
            {" "}
            مشروع انطلاقتك
          </span>
        </h1>
        <p className="mx-auto max-w-2xl text-[0.95rem] leading-[1.95] sm:text-lg">
          للاستفسار حول الدفعات القادمة، شروط المشاركة، أو تفاصيل البرنامج，
          يمكنك مراسلتنا عبر المنصات التالية وسنرد عليك في أقرب وقت.
        </p>
        <div className="px-6 pb-8 max-w-sm mt-5 mx-auto">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdHvr5R3_eS0nwktsFXqSuOYsEY9dgGL9o81FpBuD_gdY6BSQ/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="heading flex items-center flex-row-reverse h-12 border-2 border-black px-4 justify-center bg-primary text-white  shadow-[4px_4px_0_0_#111111] hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none "
          >
            سجل الآن
            <ArrowLeft className="h-5 w-5" />
          </a>
        </div>
        <div className="mx-auto mt-8 h-px w-12 bg-primary" />
      </div>

      {/* ── Social Cards ── */}
      <div className="flex-1 contain-content mx-auto w-full pb-24">
        <div className="">
          <h2 className="heading  text-center text-[2.8rem] font-bold leading-[1.15] tracking-tight text-slate-900 lg:text-[4rem]">
            تواصل عبر منصاتنا الاجتماعية
          </h2>
          <div className="flex items-center justify-between px-6 py-6 sm:px-10">
          
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 border-t border-white/10">
            {socials.map((s) => (
              <Link
                key={s.id}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={[
                  "group flex items-center justify-center min-h-[250px] border-l border-white/10  text-white/80",
                  "text-sm sm:text-base font-semibold uppercase tracking-widest",
                  "transition-colors duration-200",
                  s.color,
                ].join(" ")}
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>

        {/* ── Divider + Email ── */}
        <div className="flex items-center gap-5 my-10 ">
          <div className="h-px flex-1 bg-primary/20" />
          <span className="text-[0.78rem] tracking-[0.12em] text-slate-500">
            أو عبر البريد الإلكتروني
          </span>
          <div className="h-px flex-1 bg-primary/20" />
        </div>

        <span className="btn-gradient   md:max-w-5xl mx-auto flex items-center justify-between  shadow-[4px_4px_0_0_#111111] border-4 border-black  px-6 py-7 transition-colors duration-300">
          <div className="flex flex-col gap-1">
            <span className="text-[0.72rem] font-semibold tracking-[0.12em] opacity-80">
              البريد الإلكتروني
            </span>
            <span className="text-[1.1rem] font-semibold text-white tracking-tight">
              bouteramansourk@gmail.com 
            </span>
          </div>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            className="h-5 w-5 shrink-0 transition-transform duration-300 group-hover:-translate-x-1"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </span>

        {/* ── Response note ── */}
        <p className="mt-10 text-center text-[0.8rem] leading-relaxed text-slate-500">
          شلغوم العيد · متاحون للتنسيق عبر مختلف ولايات الوطن
          <br />
          معدل الرد: خلال 24 ساعة
        </p>
      </div>
      <OurLocation />
      <FaqSection />
      {/* <canvas style="vertical-align: top; width: 411px; height: 411px;" width="822" height="822"></canvas> */}
    </main>
  );
}


