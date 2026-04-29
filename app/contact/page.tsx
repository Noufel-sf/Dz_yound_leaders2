import Link from "next/link";
import FaqSection from "../components/FaqSection";
import OurLocation from "../components/OurLocation";
import { ArrowLeft } from "lucide-react";
import WerbsiteBuilder from "../components/WerbsiteBuilder";

const socials = [
  {
    id: "instagram",
    label: "إنستغرام",
    handle: "@albawsala_program",
    href: "https://www.instagram.com/albawsala_program",
    description: "تابع آخر الإعلانات والأنشطة التكوينية",
    color: "hover:border-[#E1306C] hover:text-[#E1306C]",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-7 h-7"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: "tiktok",
    label: "تيك توك",
    handle: "@albawsala_program",
    href: "https://www.tiktok.com/@albawsala_program",
    description: "تابع المقاطع القصيرة والملخصات السريعة",
    color: "hover:border-[#010101] hover:text-[#010101]",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M16.6 5.82a5.1 5.1 0 0 1-1.15-3.28h-3.01v13.18a2.73 2.73 0 1 1-2.73-2.73c.16 0 .31.01.46.04V9.98a5.64 5.64 0 1 0 4.8 5.56V9.6a8.4 8.4 0 0 0 4.91 1.57V8.16a5.1 5.1 0 0 1-3.28-1.34Z" />
      </svg>
    ),
  },
  {
    id: "facebook",
    label: "فيسبوك",
    handle: "مشروع البوصلة",
    href: "https://web.facebook.com/albawsala_program?_rdc=1&_rdr#",
    description: "اطلع على المستجدات والفعاليات القادمة",
    color: "hover:border-[#1877F2] hover:text-[#1877F2]",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    id: "whatsapp",
    label: "واتساب",
    handle: "0540355191",
    href: "https://api.whatsapp.com/send/?phone=213540355191&text&type=phone_number&app_absent=0",
    description: "تواصل مباشرة للاستفسار حول التسجيل",
    color: "hover:border-[#25D366] hover:text-[#25D366]",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.535 5.862L.057 23.998l6.305-1.654A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.034-1.388l-.361-.214-3.741.981.998-3.648-.235-.374A9.818 9.818 0 1112 21.818z" />
      </svg>
    ),
  },
  // {
  //   id: "telegram",
  //   label: "تيليغرام",
  //   handle: "@elbawsala_dz",
  //   href: "https://t.me/elbawsala_dz",
  //   description: "انضم للقناة الرسمية وتابع مواعيد التكوين",
  //   color: "hover:border-[#229ED9] hover:text-[#229ED9]",
  //   icon: (
  //     <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
  //       <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.26 14.4l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.888.16z" />
  //     </svg>
  //   ),
  // },
];

export default function ContactPage() {
  return (
    <main dir="rtl" className="min-h-screen flex flex-col">
      {/* ── Hero ── */}
      <div className="w-full pt-24 pb-16 px-6 text-center">
        <p className="mb-5 heading inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
          تواصل معنا
        </p>
        <h1 className="heading mb-5 text-[2.4rem] font-bold leading-[1.15] tracking-tight text-slate-900 lg:text-[4rem]">
          تواصل مع فريق
          <span className="text-primary heading marker-underline">
            {" "}
            مشروع البوصلة
          </span>
        </h1>
        <p className="mx-auto max-w-2xl text-[0.95rem] leading-[1.95] text-slate-600 sm:text-lg">
          للاستفسار حول الدفعات القادمة، شروط المشاركة، أو تفاصيل البرنامج，
          يمكنك مراسلتنا عبر المنصات التالية وسنرد عليك في أقرب وقت.
        </p>
        <div className="px-6 pb-8 max-w-sm mt-5 mx-auto">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdHvr5R3_eS0nwktsFXqSuOYsEY9dgGL9o81FpBuD_gdY6BSQ/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gradient inline-flex w-full items-center heading justify-center gap-2 rounded-xl py-3.5 text-sm font-bold shadow-lg transition-all"
          >
            سجل الآن
            <ArrowLeft className="h-5 w-5" />
          </a>
        </div>
        <div className="mx-auto mt-8 h-px w-12 bg-primary" />
      </div>

      {/* ── Social Cards ── */}
      <div className="flex-1 w-full max-w-4xl mx-auto px-6 md:px-12 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {socials.map((s) => (
            <Link
              key={s.id}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className={[
                "group flex items-start gap-6 rounded-2xl border border-primary/20 bg-white p-8 text-slate-700",
                "transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
                s.color,
              ].join(" ")}
            >
              {/* Icon */}
              <div className="shrink-0 mt-0.5 transition-colors duration-300 group-hover:inherit">
                {s.icon}
              </div>

              {/* Text */}
              <div className="flex flex-col gap-1 min-w-0">
                <span className="text-[0.72rem] font-semibold tracking-widest text-primary">
                  {s.label}
                </span>
                <span className="text-[1.05rem] font-semibold tracking-tight text-slate-900 truncate">
                  {s.handle}
                </span>
                {/* <span className="mt-0.5 text-[0.85rem] leading-snug text-slate-600">
                  {s.description}
                </span> */}
              </div>

              {/* Arrow */}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                className="mr-auto mt-1 h-4 w-4 shrink-0 -translate-x-1 text-slate-400 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          ))}
        </div>

        {/* ── Divider + Email ── */}
        <div className="flex items-center gap-5 my-10">
          <div className="h-px flex-1 bg-primary/20" />
          <span className="text-[0.78rem] tracking-[0.12em] text-slate-500">
            أو عبر البريد الإلكتروني
          </span>
          <div className="h-px flex-1 bg-primary/20" />
        </div>

        <span className="btn-gradient group flex w-full items-center justify-between rounded-2xl  px-8 py-7 transition-colors duration-300">
          <div className="flex flex-col gap-1">
            <span className="text-[0.72rem] font-semibold tracking-[0.12em] opacity-80">
              البريد الإلكتروني
            </span>
            <span className="text-[1.1rem] font-semibold tracking-tight">
              albawsalaprogram@gmail.com
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
    </main>
  );
}
