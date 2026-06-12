'use client'

import React, { forwardRef, useRef } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

interface FooterProps {
  onScrollToTop?: () => void
}

const SOCIAL_LINKS = [

  {
    name: 'Instagram',
    link: 'https://www.instagram.com/edg',
    target: '_blank',
  },
  {
    name: 'Facebook',
    link: 'https://www.facebook.com/edg',
    target: '_blank',
  },

]

const PRIMARY_NAV = [
  { label: 'الرئيسية', path: '/' },
  { label: 'من نحن', path: '/about' },
  { label: 'تواصل معنا', path: '/contact' },
]


const Footer = () => {
   

    const pathname = usePathname()
    
    return (
      <footer
        className="relative flex  min-h-screen bg-secondary w-full flex-col items-center justify-between overflow-hidden bg-primary-950 py-[4vh]"
      >
        <div className="flex w-full flex-grow flex-col items-center justify-between">
          {/* 1. MASSIVE LOGO  */}

          <div  className="flex w-[90vw] justify-between">
            <div className="flex items-center font-display text-[12vw] font-black leading-[1.3] tracking-tight">

              <span className="text-white heading "> رواد الشباب </span>
            </div>

            {/* Mascot edgo */}

            <div className="relative h-[22vw] overflow-hidden rounded-sm md:flex">
              <Image
                src="/dzyoungLeaders.jpg"
                alt="Dz young leaders"
                className="h-full w-full object-cover"
                width={500}
                height={500}
                priority
              />
            </div>
          </div>

          {/* 2. MIDDLE SECTION  */}
          <div
            className="z-10  flex w-[90vw] flex-col items-start justify-between gap-12 md:mt-0 md:flex-row md:items-center"
          >
            {/* Headline */}
            <div className="flex max-w-full flex-col gap-8 md:max-w-[50vw]">
              <h2 className="font-sans text-[clamp(1.5rem,4vw,2.5rem)] font-medium leading-[1.5] text-white/90">
                 نُؤمن بأن العمل العام يبدأ من الوعي، ولهذا نُكرّس مساحات للتعلم، ومنصات للانطلاق، وتجارب تصنع الأثر.
              </h2>

              <a
                href="/contact"
                className="cta-link group relative w-fit font-sans text-xl font-medium text-white transition-colors hover:text-primary md:text-2xl"
              >
                تواصل معنا
                {/* Animated Underline */}
                <span className="absolute -bottom-2 left-0 h-[2px] w-full origin-right scale-x-100 bg-white/30 transition-transform duration-500 ease-out group-hover:origin-left group-hover:scale-x-0"></span>
                <span className="absolute -bottom-2 left-0 h-[2px] w-full origin-left scale-x-0 bg-primary transition-transform duration-500 ease-out group-hover:scale-x-100"></span>
              </a>
            </div>

            {/* Nav Links */}
            <div className="flex gap-12 md:gap-[5vw] lg:gap-[8vw]">
              <ul className="flex flex-col gap-4 font-sans text-base font-semibold uppercase text-white/70 md:text-lg">
                {PRIMARY_NAV.map((item) => (
                  <li key={item.path}>
                    <Link
                      href={item.path}
                      className={`text-left transition-colors hover:text-primary ${pathname === item.path ? 'text-primary' : ''}`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            
            </div>
          </div>

       

          {/* 4. BOTTOM BAR */}
          <div
            className="flex w-[90vw] flex-col gap-6 pt-8 md:flex-row md:justify-between"
          >
            <div className="flex flex-wrap gap-6 font-sans text-sm font-medium ">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.name}
                  href={s.link}
                  target={s.target}
                  className="transition-colors hover:text-white"
                >
                  {s.name}
                </a>
              ))}
            </div>
            <div className="font-sans text-sm font-medium">
              <p>
                © 2026 Copyright Nasri noufel seif el islam.{' '}
                <span>
                  Designed & Built by{' '}
                  <a
                    href="https://my-portfolio-pi-nine-27.vercel.app/"
                    target="new"
                    className="uppercase ml-2 text-white/70 transition-colors hover:text-primary"
                  >
                    NSF
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    )
  }

Footer.displayName = 'Footer'
export default Footer
