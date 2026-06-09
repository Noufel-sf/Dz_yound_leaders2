/* eslint-disable react-hooks/exhaustive-deps, @typescript-eslint/no-unused-vars */
"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, forwardRef } from "react";
import { useRouter as useTransitionRouter } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { ScrollToPlugin } from "gsap/all";
import Link from "next/link";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const NAV_LINKS = [
  { label: "الر ئيسية", path: "/" },
  { label: "من نحن", path: "/about" },
  { label: "تواصل معنا", path: "/contact" },
];

interface NavBarProps {
  itemsRef?: React.RefObject<HTMLDivElement | null>;
  burgerRef?: React.RefObject<HTMLButtonElement | null>;
  navContainerRef: React.RefObject<HTMLDivElement | null>;
  onBurgerClick?: () => void;
  isOpen?: boolean;
}

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

interface NavbarAnimationOptions {
  navContainerRef: React.RefObject<HTMLDivElement | null>;
  navItemsRef: React.RefObject<HTMLDivElement | null>;
  navBurgerRef: React.RefObject<HTMLButtonElement | null>;
  menuOpen?: boolean;
  enabled?: boolean;
  scopeRef?: React.RefObject<HTMLElement | HTMLDivElement>;
}

export const NavBar = forwardRef<HTMLDivElement, NavBarProps>(
  ({ itemsRef, burgerRef, navContainerRef, onBurgerClick, isOpen }, _ref) => {
    const pathname = usePathname();
    const router = useTransitionRouter();

    useEffect(() => {
      router.prefetch("/about");
      router.prefetch("/contact");
    }, []);

    const navigateTo = (path: string) => {
      if (pathname === path) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      if (isOpen && onBurgerClick) {
        onBurgerClick();
      }

      router.push(path);
    };

    const handleLogoClick = () => {
      if (pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        router.push("/");
      }
    };

    return (
      <div
        ref={navContainerRef}
        className="navbar fixed top-6 py-2 md:py-4 z-100 flex w-full items-center justify-center rounded-lg border-none border-transparent"
      >
        <nav className="relative flex w-[90vw] items-center justify-between">
          <Link
            href="/"
            onClick={(e) => {
              if (pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full"
          >
            <Image src="/logossmall.png" alt="شعار رواد الشباب" width={50} height={50} />
            <span className="text-4xl font-sans heading tracking-tight text-primary">
              رواد الشباب
            </span>
          </Link>
          <button
            onClick={handleLogoClick}
            aria-label="شعار رواد الشباب - العودة للرئيسية"
            className="absolute hidden md:block left-1/2 -translate-x-1/2 cursor-pointer"
          >
            <Image
              src="/logossmall.png"
              alt=""
              width={100}
              height={100}
            />
          </button>

          <div ref={itemsRef} className="hidden items-center gap-14 md:flex">
            <Link
              href="/about"
              className={`nav-link inline-flex items-center gap-2  border-2 border-black hover:bg-secondary/20 transition duration-400 heading bg-secondary px-4 py-1 text-3xl -rotate-3 font-bold text-black shadow-[3px_3px_0_0_#111111] ${pathname === "/about" ? "active-link" : ""}`}
            >
              من نحن
            </Link>

            <Link
              href="/contact"
              className="nav-contact heading inline-flex items-center gap-2 hover:bg-secondary/20 transition duration-400  border-2 border-black bg-secondary px-4 py-1 text-3xl -rotate-3 font-bold text-black shadow-[3px_3px_0_0_#111111]"
            >
              تواصل معنا
            </Link>
          </div>

          <button
            ref={burgerRef}
            onClick={onBurgerClick}
            aria-label={isOpen ? "إغلاق القائمة" : "فتح القائمة"}
            className="scale-1 absolute -rotate-3 font-bold  text-black bg-white border-4 shadow-[3px_3px_0_0_#111111] right-[5vw] flex cursor-pointer flex-col gap-1.5 p-2 md:scale-0"
          >
            <div
              className={`h-0.75 w-8 rounded-full bg-black transition-transform duration-300 ${isOpen ? "translate-y-2.25 rotate-45" : ""}`}
            />
            <div
              className={`h-0.75 w-8 rounded-full bg-black  transition-transform duration-300 ${isOpen ? "-translate-y-2.25 -rotate-45" : ""}`}
            />
          </button>
        </nav>
      </div>
    );
  },
);

NavBar.displayName = "NavBar";

export function Menu({ isOpen, onClose }: MenuProps) {
  const container = useRef(null);
  const linksRef = useRef<HTMLDivElement[]>([]);
  const pathname = usePathname();
  const router = useTransitionRouter();

  useEffect(() => {
    router.prefetch("/about");
    router.prefetch("/contact");
  }, []);

  useGSAP(
    () => {
      if (isOpen) {
        gsap.to(container.current, {
          y: 0,
          duration: 0.8,
          ease: "power4.inOut",
        });

        gsap.fromTo(
          linksRef.current,
          { y: 140, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.8,
            delay: 0.4,
            ease: "power3.out",
          },
        );
      } else {
        gsap.to(container.current, {
          y: "-100%",
          duration: 0.6,
          ease: "power4.inOut",
        });
      }
    },
    { dependencies: [isOpen], scope: container },
  );

  const handleLinkClick = (path: string) => {
    if (pathname === path) {
      onClose();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    onClose();
    setTimeout(() => {
      router.push(path);
    }, 650);
  };

  return (
    <div
      ref={container}
      className={`fixed inset-0 z-90 flex -translate-y-full  flex-col items-center justify-center bg-secondary px-6 ${
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <nav className="flex flex-col items-center gap-6">
        {NAV_LINKS.map((link, i) => (
          <div
            key={link.label}
            className="group w-full overflow-hidden px-8 py-2"
          >
            <div
              ref={(el) => {
                if (el) linksRef.current[i] = el;
              }}
              className="overflow-hidden-x relative"
            >
              <button
                onClick={() => handleLinkClick(link.path)}
                aria-label={`الانتقال إلى ${link.label}`}
                className="relative block w-full text-center font-display text-5xl font-black uppercase leading-none tracking-tight  md:text-7xl"
              >
                <span className="block heading transition-transform duration-500 ease-[0.76,0,0.24,1] group-hover:-translate-y-full">
                  {link.label}
                </span>
                <span className="absolute inset-0 block translate-y-[110%] italic transition-transform duration-500 ease-[0.76,0,0.24,1] group-hover:translate-y-0">
                  {link.label}
                </span>
              </button>
            </div>
          </div>
        ))}
      </nav>

      <div className="absolute bottom-12 left-6 right-6 flex items-end justify-between pt-8 md:left-20 md:right-20">
        <div className="text-right font-sans">
          <p className="text-[10px] heading uppercase tracking-[0.2em]">
            موعنا
          </p>
          <p className="text-sm font-bold heading uppercase">شلغوم العيد</p>
        </div>
      </div>
    </div>
  );
}

export function useNavbarAnimations({
  navContainerRef,
  navItemsRef,
  navBurgerRef,
  menuOpen = false,
  enabled = true,
  scopeRef,
}: NavbarAnimationOptions) {
  const navTl = useRef<gsap.core.Timeline | null>(null);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  const { contextSafe } = useGSAP(
    () => {
      if (!enabled || !navContainerRef.current) return;

      ScrollTrigger.config({ ignoreMobileResize: true });

      scrollTriggerRef.current?.kill();
      scrollTriggerRef.current = ScrollTrigger.create({
        start: 0,
        end: "max",
        onUpdate: (self) => {
          if (!navContainerRef.current) return;

          if (menuOpen) return;

          gsap.to(navContainerRef.current, {
            y: self.direction === 1 ? -120 : 0,
            autoAlpha: self.direction === 1 ? 0 : 1,
            duration: 0.35,
            ease: "power2.out",
            overwrite: true,
          });
        },
      });

      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: "(min-width: 768px)",
          isMobile: "(max-width: 767px)",
        },
        (context) => {
          const { isDesktop } = context.conditions as { isDesktop: boolean };

          gsap.set(navContainerRef.current, {
            autoAlpha: 1,
            y: 0,
            clearProps: "none",
          });

          gsap.set(navBurgerRef.current, { scale: 0, autoAlpha: 0 });
          gsap.set(navItemsRef.current, {
            x: 0,
            autoAlpha: 1,
            pointerEvents: "auto",
          });

          if (!isDesktop) {
            gsap.set(navBurgerRef.current, { scale: 1, autoAlpha: 1 });
            gsap.set(navItemsRef.current, { autoAlpha: 0, display: "none" });
          } else {
            gsap.set(navItemsRef.current, { display: "flex" });
          }

          const navMorphTl = gsap.timeline({
            paused: true,
            defaults: { overwrite: "auto" },
          });
          navMorphTl
            .to(navItemsRef.current, {
              x: 30,
              autoAlpha: 0,
              pointerEvents: "none",
              duration: 0.4,
              ease: "power2.in",
            })
            .to(
              navBurgerRef.current,
              { scale: 1, autoAlpha: 1, duration: 0.4, ease: "back.out(1.7)" },
              "-=0.2",
            );

          navTl.current = navMorphTl;
        },
      );

      return () => {
        scrollTriggerRef.current?.kill();
        scrollTriggerRef.current = null;
        mm.revert();
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    },
    {
      scope: scopeRef ?? navContainerRef,
      dependencies: [enabled, menuOpen],
    },
  );

  const resetNavToStart = () => {
    contextSafe(() => {
      navTl.current?.progress(0).pause();
      const container = navContainerRef.current;
      const items = navItemsRef.current;
      if (container && items) {
        gsap.set([container, items], {
          autoAlpha: 1,
          y: 0,
        });
      }
    });
  };

  return { navTimeline: navTl, resetNavToStart };
}

export function NavbarSystem({
  enabled = true,
  scopeRef,
}: {
  enabled?: boolean;
  scopeRef?: React.RefObject<HTMLElement | HTMLDivElement>;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItemsRef = useRef<HTMLDivElement>(null);
  const navBurgerRef = useRef<HTMLButtonElement>(null);
  const navContainerRef = useRef<HTMLDivElement>(null);

  useNavbarAnimations({
    navContainerRef,
    navItemsRef,
    navBurgerRef,
    menuOpen: isMenuOpen,
    enabled,
    scopeRef,
  });

  return (
    <>
      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <NavBar
        itemsRef={navItemsRef}
        burgerRef={navBurgerRef}
        navContainerRef={navContainerRef}
        onBurgerClick={() => setIsMenuOpen((prev) => !prev)}
        isOpen={isMenuOpen}
      />
    </>
  );
}

export default NavbarSystem;
