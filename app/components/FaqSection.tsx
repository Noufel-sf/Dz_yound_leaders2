import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

export const faqs: FAQItem[] = [
  {
    id: "1",
    question: "ما هو مخيم الرواد الشبابي؟",
    answer:
      "مخيم الرواد الشبابي هو برنامج تدريبي متكامل ومرحلي يهدف إلى بناء جيل جديد من الشباب الجزائري القادر على الابتكار، القيادة، وصناعة الأثر الإيجابي في مجتمعاتهم، من خلال صقل مهاراتهم الشخصية والتقنية والمهنية.",
  },
  {
    id: "2",
    question: "ما هي الفئة العمرية المستهدفة من البرنامج؟",
    answer:
      "يستهدف البرنامج الشباب الجزائري من الفئة العمرية 18 إلى 35 سنة، الطموحين، الملتزمين، والراغبين في تطوير ذواتهم والمساهمة في بناء مجتمعاتهم.",
  },
  {
    id: "3",
    question: "ما هي المراحل التدريبية الرئيسية في المخيم؟",
    answer:
      "يتكون البرنامج من ثلاث مراحل رئيسية: المرحلة الأولى بناء الشخصية والمهارات الناعمة (Soft Skills) وتركز على التواصل الفعال، الذكاء العاطفي، القيادة والعمل الجماعي، وإدارة الذات والوقت. المرحلة الثانية التمكين الرقمي والتقني (Hard Skills) وتشمل التدريب على أدوات الذكاء الاصطناعي وكيفية استهلاكها لصالحنا، بالإضافة إلى مسارين تخصصيين هما التمكين الرقمي والمقاولتية. المرحلة الثالثة تدريب المدربين (TOT - Training of Trainers) لتأهيل الشباب ليصبحوا مدربين وموجهين.",
  },
  {
    id: "4",
    question: "ما هي المسارات التخصصية المتاحة في المرحلة الثانية؟",
    answer:
      "المسارات التخصصية هي: المسار الأول التمكين الرقمي ويشمل التصوير وصحافة الهاتف، البودكاست، والتسويق الرقمي. المسار الثاني المقاولتية ويشمل المهارات المقاولاتية واختيار المشروع، دراسة السوق والدراسات التقنية والمالية، مخطط نموذج العمل (BMC)، وكيفية التسجيل مع NESDA وANGEM والمقاول الذاتي.",
  },
  {
    id: "5",
    question: "ما هي وتيرة النشاطات خلال فترة الصيف والفترة الدراسية؟",
    answer:
      "خلال فصل الصيف (جويلية وأوت) ستكون النشاطات بمعدل ثلاث مرات شهرياً. ومع بداية المشوار الدراسي، ستصبح النشاطات مرتين شهرياً لضمان عدم الإرهاق وتوفير المرونة للمشاركين.",
  },
  {
    id: "6",
    question: "ما هو الأثر المتوقع من المشاركة في مخيم الرواد الشبابي؟",
    answer:
      "يتوقع أن يساهم المخيم في تخريج جيل من الشباب الواعي والمؤهل، يمتلك خارطة طريق واضحة للانطلاق في مساره المهني أو الريادي، ويكون قادراً على قيادة المبادرات، خلق فرص العمل، والمساهمة بفعالية في التنمية الاقتصادية والاجتماعية للوطن.",
  },
];
export default function FaqSection() {
  return (
    <section id="faq" className="w-full z-100  py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-4xl z-100 p-6 sm:p-10">
        {/* Header */}
        <div className="mb-12 flex flex-col items-center gap-4 text-center">
          <span className="inline-flex items-center gap-2 border-2 border-black heading bg-secondary px-4 py-1 text-xl -rotate-3 font-bold text-black shadow-[3px_3px_0_0_#111111]">
            الأسئلة الشائعة
          </span>

          <h2 className="heading text-5xl z-10 font-bold leading-tight text-slate-900 sm:text-8xl">
            كل ما تحتاج معرفته قبل
            <span className=" text-primary heading"> الانطلاق معنا</span>
          </h2>
          <p className="max-w-2xl z-10 text-base leading-8 sm:text-lg">
            إجابات واضحة تساعدك على فهم مسار مشروع البوصلة وكيفية الاستفادة من
            التكوينات السياسية والقيادية.
          </p>
          <div className="mt-1 h-px w-14 bg-primary" />
        </div>

        {/* Accordion list */}
        <div className="overflow-hidden z-100 rotate-1 hover:rotate-0 transition duration-500 border-2 border-black bg-[var(--figjam-cream)] p-4 shadow-[10px_10px_0_0_#111111] sm:p-6">
          <Accordion type="single" collapsible className="w-full z-10">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="mb-4 z-10 last:mb-0"
              >
                <AccordionTrigger className="text-right heading text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-right text-sm leading-8 text-slate-700 sm:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Footer note */}
        <p className="mt-8 text-center text-sm leading-relaxed text-slate-500">
          لديك سؤال آخر؟{" "}
          <a
            href="/contact"
            className="text-primary underline underline-offset-4 transition-opacity hover:opacity-70"
          >
            تواصل معنا مباشرة
          </a>
          .
        </p>
      </div>
    </section>
  );
}
