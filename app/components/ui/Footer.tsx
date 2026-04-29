 import Link from "next/link";

// ─── Footer ───────────────────────────────────────────────────────────────────
export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white w-full py-22">
      <div className="w-full px-8 md:px-16">
          <h1 className="text-[6rem] md:text-[10rem] text-center mb-12 heading  font-bold">مشروع البوصلة</h1>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm" dir="rtl">
          {/* Left: Copyright */}
          <span className="text-gray-400">© 2026 mawada.dz</span>

          {/* Center: Links */}
          <div className="flex gap-6 flex-row-reverse">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
              سياسة الخصوصية
            </Link>
            <span className="text-gray-600">•</span>
            <Link href="/terms-of-use" className="text-gray-400 hover:text-white transition-colors">
              شروط الاستخدام
            </Link>
          </div>

          {/* Right: Site name & description */}
          <div className="text-gray-400 text-right">
            <span>مشروع البوصلة</span>
            <span className="mx-2">•</span>
            <span>DZ Young Leaders</span>
          </div>
        </div>
      </div>
    </footer>
  );
}