import { SectionTitle } from '../ui/SectionTitle';

const steps = [
  {
    num: '01',
    title: 'اختر المشوار',
    body: 'حدّد نقطة الانطلاق والوجهة، فئة السيارة، وتفضيل السائق. ستظهر لك التكلفة الثابتة فوراً.',
  },
  {
    num: '02',
    title: 'أكّد الحجز',
    body: 'بتوصلك رسالتين على الإيميل والجوال — وحدة تأكيد الحجز وتفاصيل السائق، والثانية تنبيه لحظة قرب وصوله.',
  },
  {
    num: '03',
    title: 'استمتع بالرحلة',
    body: 'يصلك سائقك بحرفية وأمان. ادفع نقداً أو رقمياً — كلاهما مقبول.',
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 px-6" aria-labelledby="how-title">
      <div className="max-w-[1200px] mx-auto">
        <SectionTitle
          id="how-title"
          eyebrow="كيف يعمل"
          title="ثلاث خطوات بسطة"
          center
        />
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <div key={i} className="relative bg-white rounded-[24px] p-8 shadow-[0_4px_24px_rgba(138,21,56,0.07)] hover:shadow-[0_8px_40px_rgba(138,21,56,0.13)] transition-shadow">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 -left-4 w-8 h-0.5 bg-[rgba(138,21,56,0.2)]" aria-hidden="true" />
              )}
              <span className="inline-block text-4xl font-black text-[#8A1538]/15 mb-4 font-mono">{s.num}</span>
              <h3 className="text-xl font-black text-[#1C1C1C] mb-3">{s.title}</h3>
              <p className="text-[#5A5A5A] leading-relaxed text-sm">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
