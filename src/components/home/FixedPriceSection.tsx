import { SectionTitle } from '../ui/SectionTitle';
import { Button } from '../ui/Button';

export function FixedPriceSection() {
  return (
    <section className="py-24 px-6 bg-[#8A1538] sadu-bg text-white" aria-labelledby="fixed-price-title">
      <div className="max-w-[900px] mx-auto text-center">
        <SectionTitle
          id="fixed-price-title"
          eyebrow="السعر الثابت"
          title="تعرف كم ستدفع قبل ما تركب"
          subtitle="لا مفاجآت. لا أسعار تتغيّر بسبب الازدحام أو الطقس. سعر تحدده مسبقاً ويبقى كما هو."
          center
          light
        />

        {/* Comparison */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl mx-auto text-start">
          <div className="bg-white/10 rounded-[20px] p-6 border border-white/20">
            <p className="text-[#C9A86A] font-bold text-sm mb-2">دريول ✔</p>
            <p className="text-white font-black text-2xl mb-1">15 ر.ق</p>
            <p className="text-white/60 text-sm">سعر محدد عند الحجز</p>
            <p className="text-white/60 text-sm">لن يتغيّر بأي حال</p>
          </div>
          <div className="bg-black/20 rounded-[20px] p-6 border border-white/10">
            <p className="text-white/40 font-bold text-sm mb-2">تطبيقات أخرى ✕</p>
            <p className="text-white/40 font-black text-2xl mb-1">15 → 23 ر.ق</p>
            <p className="text-white/40 text-sm">سعر يتغيّر مع الطلب</p>
            <p className="text-white/40 text-sm">وقت الذروة يرفع السعر</p>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Button variant="gold" size="lg" as="a" href="https://play.google.com" target="_blank" rel="noopener noreferrer">
            جرّب دريول الآن
          </Button>
        </div>
      </div>
    </section>
  );
}
