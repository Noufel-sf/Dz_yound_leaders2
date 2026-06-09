import type { Metadata } from "next";
import { Lalezar , Noto_Sans_Arabic, Zain } from "next/font/google";
import "./globals.css";
import Layout from "./components/LayoutWrapper";
import BackToTopButton from "./components/ui/BackToTopButton";
import { cn } from "@/lib/utils";

const zain = Zain({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-zain",
});

const lalezar = Lalezar({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-lalezar",
});

const notoSansArabic = Noto_Sans_Arabic({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-noto-sans-arabic",
});


export const metadata: Metadata = {
  title: "مشروع - مخيم الرواد للشباب",
  description: "مخيم الرواد للشباب هو برنامج تدريبي يهدف إلى تمكين الشباب من اكتساب المهارات القيادية والتطوير الشخصي، من خلال ورش عمل تفاعلية وأنشطة تعليمية ممتعة. يركز المخيم على تعزيز الثقة بالنفس، وتنمية مهارات التواصل، وبناء روح الفريق، مما يساعد المشاركين على تحقيق إمكاناتهم الكاملة في حياتهم الشخصية والمهنية.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      className={cn("h-full", "antialiased", lalezar.variable, notoSansArabic.variable, "font-sans", zain.variable)}
    >
      <body className="min-h-full flex flex-col bg-[#f8fafc]">
        <div
          className="fixed inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(90deg, #e2e8f0 1px, transparent 1px),
              linear-gradient(180deg, #e2e8f0 1px, transparent 1px),
              linear-gradient(90deg, #cbd5e1 1px, transparent 1px),
              linear-gradient(180deg, #cbd5e1 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px, 50px 50px, 10px 10px, 10px 10px",
          }}
        />
        <Layout>
          {children}
        </Layout>
        <BackToTopButton />
      </body>
    </html>
  );
}
