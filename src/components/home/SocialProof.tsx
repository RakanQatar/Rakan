import { SectionTitle } from '../ui/SectionTitle';

const stats = [
  { num: '+5,000', label: 'رحلة مكتملة' },
  { num: '+200',   label: 'سائق معتمد' },
  { num: '4.8',    label: 'تقييم متوسط ★' },
  { num: '100%',   label: 'سعر ثابت' },
];

const reviews = [
  {
    name: 'فاطمة السليطي',
    rating: 5,
    text: 'آخر مرة جربت خدمة دريول، طلبت سائقة وجاءت بالضبط. السعر وضح مسبقاً وما فيه مفاجآت.',
    city: 'الدوحة',
  },
  {
    name: 'عبدالله الرشيدي',
    rating: 5,
    text: 'تطبيق سهل ومريح. حجزت بالساعة لرحلة من المطار وكان كل شيء مرتب.',
    city: 'الوكرة',
  },
  {
    name: 'سارة الخالدي',
    rating: 5,
    text: 'أخيراً تطبيق يقدر احتياجاتي. الخيار بين سائق وسائقة فرق كبير.',
    city: 'لسايل',
  },
];

export function SocialProof() {
  return (
    <section className="py-24 px-6" aria-labelledby="proof-title">
      <div className="max-w-[1200px] mx-auto">
        <SectionTitle
          id="proof-title"
          eyebrow="أرقام حقيقية"
          title="تصدق ولا تصدقنا"
          center
        />

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {stats.map(({ num, label }, i) => (
            <div key={i} className="bg-white rounded-[20px] p-6 text-center shadow-[0_4px_24px_rgba(138,21,56,0.06)]">
              <p className="text-3xl font-black text-[#8A1538] mb-1">{num}</p>
              <p className="text-sm text-[#5A5A5A]">{label}</p>
            </div>
          ))}
        </div>

        {/* Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white rounded-[20px] p-7 shadow-[0_4px_24px_rgba(138,21,56,0.06)]">
              <div className="flex items-center gap-1 mb-4" aria-label={`تقييم ${r.rating} نجوم`}>
                {Array.from({ length: r.rating }).map((_, j) => (
                  <span key={j} className="text-[#C9A86A] text-lg" aria-hidden="true">★</span>
                ))}
              </div>
              <p className="text-[#5A5A5A] text-sm leading-relaxed mb-5">“{r.text}”</p>
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-[#8A1538]/10 flex items-center justify-center text-[#8A1538] font-bold text-sm">
                  {r.name[0]}
                </div>
                <div>
                  <p className="text-sm font-bold text-[#1C1C1C]">{r.name}</p>
                  <p className="text-xs text-[#5A5A5A]">{r.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
