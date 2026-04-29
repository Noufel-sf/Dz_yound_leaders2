import type { Metadata } from "next";
import { Lalezar , Noto_Sans_Arabic} from "next/font/google";
import "./globals.css";
import Layout from "./components/LayoutWrapper";
import BackToTopButton from "./components/ui/BackToTopButton";

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
  title: "مشروع انطلاقتك - مخيم الرواد للشباب",
  description: "مخيم الرواد للشباب هو برنامج تدريبي يهدف إلى تمكين الشباب من اكتساب المهارات القيادية والتطوير الشخصي، من خلال ورش عمل تفاعلية وأنشطة تعليمية ممتعة. يركز المخيم على تعزيز الثقة بالنفس، وتنمية مهارات التواصل، وبناء روح الفريق، مما يساعد المشاركين على تحقيق إمكاناتهم الكاملة في حياتهم الشخصية والمهنية.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${lalezar.variable} ${notoSansArabic.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Layout>
          {children}
        </Layout>
        <BackToTopButton />
      </body>
    </html>
  );
}
