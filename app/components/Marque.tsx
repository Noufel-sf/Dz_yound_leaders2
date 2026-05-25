import Marquee from "@/components/ui/marquee";

export default function Marque() {
  const items = [
    "الذكاء الاصطناعي",
    "التسويق الرقمي",
    "ريادة الأعمال",
    "إدارة المشاريع",
    "Prompt Engineering",
    "صناعة الأثر",
  ];

  return (
    <div dir="rtl" className="bg-yellow-200">
      <Marquee items={items} />
    </div>
  );
}



