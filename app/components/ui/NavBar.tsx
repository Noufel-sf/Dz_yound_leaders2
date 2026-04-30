"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, X, Menu } from "lucide-react";

const navLinks = [
  { label: "الرئيسية", to: "/" },
  { label: "من نحن", to: "/about" },
  { label: "تواصل", to: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when sidebar is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={[
          "sticky top-0 z-40 transition-all duration-300",
          scrolled
            ? "border-b border-primary/20  shadow-sm backdrop-blur-lg"
            : "border-b border-transparent ",
        ].join(" ")}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6 lg:px-4">
          {/* Logo */}
          <Link
            href="/"
            className="heading text-2xl marker-underline font-bold tracking-tight  text-primary transition-colors hover:text-third"
          >
            انطلاقتك
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                href={link.to}
                className="relative transition-colors hover:text-primary after:absolute after:-bottom-1 after:right-0 after:h-[2px] after:w-0 after:bg-gradient-to-l after:from-primary after:to-secondary after:transition-all hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex flex-col md:flex-row items-center gap-2 md:block">
            <a
              target="_blank"
              href="https://docs.google.com/forms/d/e/1FAIpQLSfbaB2RWp_-TUz-QmFcEI1RDSXqHGAT_W0SxGcHdRHxbjSl5g/viewform"
              className="btn-gradient group heading inline-flex cursor-pointer items-center gap-3 rounded-xl px-6 py-2.5 text-sm font-bold shadow-lg transition-all hover:scale-[1.02]"
            >
              سجل الآن
              <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
            </a>
            {/* <div className="hidden md:block w-8">
            <LanguageSwitcher />
          </div> */}
          </div>

          {/* Mobile hamburger */}
          <button
            className="rounded-md p-2 text-slate-800 md:hidden"
            aria-label="فتح القائمة"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </nav>
      </header>

      {/* ── Mobile Sidebar ── */}

      {/* Backdrop */}
      <div
        onClick={() => setIsOpen(false)}
        className={[
          "fixed inset-0 z-50 bg-black/30 backdrop-blur-sm md:hidden transition-opacity duration-300",
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        ].join(" ")}
      />

      {/* Sidebar panel */}
      <aside
        className={[
          "fixed right-0 top-0 z-50 h-full w-72 border-l border-primary/15 bg-white shadow-2xl md:hidden",
          "flex flex-col transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
      >
        {/* Sidebar header */}
        <div className="flex items-center justify-between border-b border-primary/10 px-6 py-5">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="heading text-xl marker-underline font-bold tracking-tight text-primary"
          >
            انطلاقتك
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="إغلاق القائمة"
            className="rounded-md p-1.5 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-800"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col gap-1 px-4 py-6 flex-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              href={link.to}
              onClick={() => setIsOpen(false)}
              className="rounded-xl px-4 py-3 text-right text-base font-medium text-slate-700 transition-colors hover:bg-primary/10 hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Bottom CTA */}
        <div className="px-6 pb-8">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfbaB2RWp_-TUz-QmFcEI1RDSXqHGAT_W0SxGcHdRHxbjSl5g/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gradient inline-flex w-full items-center heading justify-center gap-2 rounded-xl py-3.5 text-sm font-bold shadow-lg transition-all"
          >
            سجل الآن
            <ArrowLeft className="h-5 w-5" />
          </a>
        </div>
      </aside>
    </>
  );
}
