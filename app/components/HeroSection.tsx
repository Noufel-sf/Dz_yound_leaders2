import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      dir="rtl"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      {/* Decorative floating shapes with hardware-accelerated CSS animations */}
      {/* shape 1 */}
      <div className="pointer-events-none absolute left-2 top-26 md:left-10 md:top-30 animate-float-slow">
        <Image
          src="/shape1.png"
          alt=""
          width={180}
          height={180}
          sizes="(max-width: 768px) 56px, 160px"
          className="w-14 md:w-40"
        />
      </div>

      {/* shape 2 */}
      <div className="pointer-events-none absolute -right-4 top-30 md:-right-10 md:top-26 animate-float-reverse">
        <Image
          src="/shape3.png"
          alt=""
          width={120}
          height={100}
          sizes="(max-width: 768px) 72px, 192px"
          className="w-18 md:w-48"
        />
      </div>

      {/* shape 3 */}
      <div className="pointer-events-none absolute bottom-10 left-4 md:left-12 animate-float">
        <Image
          src="/shape2.svg"
          alt=""
          width={100}
          height={100}
          sizes="(max-width: 768px) 96px, 176px"
          className="w-24 md:w-44"
          loading="lazy"
        />
      </div>

      {/* shape 4 */}
      <div className="pointer-events-none absolute bottom-10 right-4 md:right-12 animate-float-slow">
        <Image
          src="/c2.png"
          alt=""
          width={100}
          height={100}
          sizes="(max-width: 768px) 96px, 176px"
          className="w-24 md:w-44"
          loading="lazy"
        />
      </div>

      {/* center content */}
      <div className="relative z-10 md:mt-24 flex max-w-5xl xl:max-w-6xl flex-col items-center text-center">
        {/* top small text */}
        <span className="heading border-2 -rotate-2 border-black bg-secondary px-5 py-2 text-sm font-black text-black shadow-[4px_4px_0_0_#111111] md:text-base">
          مخيم الرواد الشبابي
        </span>

        {/* big title - critical LCP text */}
        <h1 className="heading mt-5 text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] xl:text-[5.75rem] 2xl:text-[6.5rem] rotate-3 font-black leading-[1.15] text-black">
          نحلم، نبتكر،
          <span className="text-primary heading"> ونبني المستقبل</span>
        </h1>

        {/* subtitle */}
        <p className="mt-4 md:mt-10 max-w-3xl text-md leading-9 text-black/70 md:text-2xl">
          انضم إلى تجربة شبابية تجمع بين
          <span className="heading font-black text-primary"> القيادة،</span>
          <span className="heading font-black text-secondary"> التكنولوجيا،</span>
          <span className="heading font-black text-primary"> والابتكار</span>
          ، لصناعة جيل قادر على التأثير الحقيقي في المجتمع.
        </p>

        {/* buttons */}
        <div className="mt-12 flex items-center justify-center gap-5">
          <Link
            href="/register"
            className="heading inline-flex h-14 items-center gap-3 border-2 border-black bg-primary px-8 text-md md:text-lg font-black text-white shadow-[5px_5px_0_0_#111111] transition-transform hover:-translate-y-1 hover:shadow-[8px_8px_0_0_#111111]"
          >
            سجل الآن
            <ArrowLeft className="h-5 w-5" />
          </Link>

          <Link
            href="/about"
            className="heading inline-flex h-14 items-center border-2 border-black bg-white px-8 text-md md:text-lg font-black text-black shadow-[5px_5px_0_0_#111111] transition-transform hover:-translate-y-1 hover:shadow-[8px_8px_0_0_#111111]"
          >
            اكتشف البرنامج
          </Link>
        </div>
      </div>
    </section>
  );
}
