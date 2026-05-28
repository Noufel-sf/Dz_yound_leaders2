"use client";

import { forwardRef, useImperativeHandle, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";

const contacts = [
  {
    id: "whatsapp",
    label: "واتساب",
    value: "0796528894",
    href: "https://api.whatsapp.com/send/?phone=213540355191&text&type=phone_number&app_absent=0",
    icon: MessageCircle,
  },
  {
    id: "instagram",
    label: "إنستغرام",
    value: "@Noufel.2.0",
    href: "https://www.instagram.com/Noufel.2.0",
    icon: MessageCircle,
  },
  {
    id: "email",
    label: "البريد الإلكتروني",
    value: "noufelnasridevelopment@gmail.com",
    href: "mailto:noufelnasridevelopment@gmail.com",
    icon: Mail,
  },
];

export type WerbsiteBuilderHandle = {
  section: HTMLElement | null;
  title: HTMLHeadingElement | null;
};

const WerbsiteBuilder = forwardRef<WerbsiteBuilderHandle>(
  function WerbsiteBuilder(_, ref) {
    const sectionRef = useRef<HTMLElement | null>(null);
    const titleRef = useRef<HTMLHeadingElement | null>(null);
    const imageRef = useRef<HTMLDivElement | null>(null);
    const textRef = useRef<HTMLDivElement | null>(null);

    useImperativeHandle(ref, () => ({
      section: sectionRef.current,
      title: titleRef.current,
    }));

    return (
      <section
        id="website-builder"
        dir="rtl"
        ref={sectionRef}
        className="relative overflow-hidden h-screen px-4 py-20 sm:px-8 sm:py-24"
      >
        <div className="mx-auto w-full max-w-6xl">
          <div className="mb-10 text-center">
            <h2
              ref={titleRef}
              className="heading text-[14vw] font-black leading-tight text-slate-900"
            >
              عن
              <span className="marker-underline text-primary heading"> المبادرة</span>
            </h2>
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="order-1 flex justify-center">
              <div ref={imageRef} className="w-full max-w-[360px]">
                <div className="rotate-2 hover:rotate-0 transition duration-500 border border-5 shadow-[10px_12px_0_0_#111111] bg-white p-4">
                  <div className="overflow-hidden bg-slate-100">
                    <Image
                      src="/owner.png"
                      alt="واجهة بناء موقع إلكتروني"
                      width={420}
                      height={460}
                      className="w-full object-cover"
                      priority
                    />
                  </div>
                  <div className="pt-3 text-center text-xs font-semibold text-slate-600">
                    نعم، هذه انا
                  </div>
                </div>
              </div>
            </div>

            <div ref={textRef} className="order-2 text-right">
              <h2 className="heading text-3xl font-black leading-tight text-slate-900 sm:text-5xl">
                صاحب
                <span className="text-primary heading"> الموقع</span>
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                نقدم خدمة تصميم وتطوير مواقع عصرية بسرعة عالية وتجربة استخدام واضحة،
                مع صفحات تعريف، خدمات، تواصل، وتحسين أساسي لمحركات البحث.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {contacts.map((contact) => {
                  const Icon = contact.icon;
                  return (
                    <Link
                      key={contact.id}
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-4 py-2 text-sm font-semibold text-slate-800 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
                    >
                      <Icon className="h-4 w-4 text-primary" />
                      <span>{contact.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
);

WerbsiteBuilder.displayName = "WerbsiteBuilder";

export default WerbsiteBuilder;
