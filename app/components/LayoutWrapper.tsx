'use client';

import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const NavBar = dynamic(() => import('../components/ui/NavBar'), {
  ssr: false,
});

const Footer = dynamic(() => import('../components/ui/Footer'), {
  ssr: false,
});

export default function LayoutWrapper({ children }: { children: React.ReactNode  }) {
  const pathname = usePathname();

  useEffect(() => {
    // Scroll to top instantly before refreshing ScrollTrigger
    window.scrollTo(0, 0);

    // Refresh ScrollTrigger when pathname changes
    // A small timeout ensures the new page has fully mounted and layout is settled
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    return () => clearTimeout(timer);
  }, [pathname]);
    
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
