import { SectionTitle } from '../components/ui/SectionTitle';
import { AppStoreBadges } from '../components/ui/AppStoreBadges';
import { Button } from '../components/ui/Button';
import { MapPin, Clock, CreditCard, Bell, Star, Shield, Users } from 'lucide-react';

const features = [
  { Icon: MapPin,       title: 'تتبع الرحلة لحظياً',   body: 'اعرف موقع سائقك بدقة وشارك رحلتك مع من تريد.' },
  { Icon: Clock,        title: 'حجز مسبق',              body: 'احجز رحلتك مسبقاً في أي وقت، حتى الساعات المبكرة.' },
  { Icon: CreditCard,   title: 'دفع مرن',               body: 'نقداً أو بطاقة أو محفظة رقمية — اختر ما يناسبك.' },
  { Icon: Bell,         title: 'تنبيهات فورية',          body: 'تأكيد الحجز، تفاصيل السائق، وتنبيه الوصول — كل شيء على جوالك.' },
  { Icon: Star,         title: 'اختر السائق',            body: 'اختر سائقاً ذكراً أو أنثى حسب تفضيلك.' },
  { Icon: Shield,       title: 'رحلة مؤمّنة',           body: 'كل رحلة مغطاة، والتاريخ محفوظ للرجوع إليه.' },
];

const faqs = [
  { q: 'كيف أعرف سعر الرحلة مسبقاً؟', a: 'بمجرد إدخال نقطة الانطلاق والوجهة، يظهر السعر الثابت قبل تأكيد الحجز. لن يتغير هذا السعر.' },
  { q: 'هل يمكنني طلب سائقة أنثى؟', a: 'نعم، يمكنك اختيار تفضيل السائق (ذكر أو أنثى أو لا يهمني) عند الحجز.' },
  { q: 'ماذا لو أردت تغيير الوجهة؟', a: 'يمكن تعديل الوجهة خلال الرحلة، وسيُحسب الفرق بالسعر الثابت أيضاً.' },
  { q: 'هل الدفع نقداً متاح؟', a: 'نعم، ندعم الدفع النقدي والرقمي دون أي إلزام بطريقة معينة.' },
];

export function RiderAppPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#8A1538] sadu-bg py-28 px-6">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs font-bold tracking-widest uppercase bg-white/15 text-[#C9A86A] px-3 py-1 rounded-full mb-5">
              تطبيق الركاب
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              وين تبي تروح؟<br />
              <span className="text-[#C9A86A]">دريول يوصّلك</span>
            </h1>
            <p className="text-white/75 text-lg leading-relaxed mb-8">
              حجز سهل، سعر ثابت، وسائق تختاره أنت. التطبيق متاح على iOS وAndroid.
            </p>
            <AppStoreBadges light />
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="bg-white/10 backdrop-blur-sm rounded-[32px] p-8 border border-white/20 text-center w-full max-w-xs">
              <div className="text-7xl mb-4">📱</div>
              <p className="text-white font-bold text-lg">تطبيق دريول</p>
              <p className="text-white/60 text-sm mt-1">للركاب — iOS & Android</p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {[['4.8 ⭐', 'التقييم'], ['+5K', 'رحلة'], ['24/7', 'الدعم'], ['0', 'رسوم خفية']].map(([num, label], i) => (
                  <div key={i} className="bg-white/10 rounded-[12px] p-3">
                    <p className="text-white font-black text-lg">{num}</p>
                    <p className="text-white/60 text-xs">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6">
        <div className="max-w-[1200px] mx-auto">
          <SectionTitle eyebrow="مزايا التطبيق" title="كل ما تحتاجه في تطبيق واحد" center />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ Icon, title, body }, i) => (
              <div key={i} className="bg-white rounded-[20px] p-7 shadow-[0_4px_24px_rgba(138,21,56,0.06)] hover:shadow-[0_8px_36px_rgba(138,21,56,0.12)] hover:-translate-y-1 transition-all duration-200">
                <div className="w-12 h-12 rounded-[14px] bg-[#8A1538]/8 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-[#8A1538]" />
                </div>
                <h3 className="text-lg font-black text-[#1C1C1C] mb-2">{title}</h3>
                <p className="text-sm text-[#5A5A5A] leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-24 px-6 bg-[#F4F1EA]">
        <div className="max-w-[800px] mx-auto">
          <SectionTitle eyebrow="خطوات" title="ابدأ في دقيقتين" center />
          <div className="mt-12 space-y-6">
            {[
              { n: '1', t: 'حمّل التطبيق',        b: 'متوفر على App Store و Google Play مجاناً.' },
              { n: '2', t: 'سجّل حسابك',          b: 'رقم الجوال فقط — ما في ورق ولا تعقيد.' },
              { n: '3', t: 'اختر رحلتك',          b: 'أدخل من أين وإلى أين، واعرف السعر فوراً.' },
              { n: '4', t: 'استمتع بالرحلة',      b: 'السائق يصلك وتتبعه لحظياً. ادفع بالطريقة اللي تناسبك.' },
            ].map(({ n, t, b }) => (
              <div key={n} className="flex gap-5 items-start bg-white rounded-[20px] p-6 shadow-[0_4px_24px_rgba(138,21,56,0.06)]">
                <span className="shrink-0 w-10 h-10 rounded-full bg-[#8A1538] text-white font-black text-lg flex items-center justify-center">{n}</span>
                <div>
                  <h3 className="font-black text-[#1C1C1C] text-lg mb-1">{t}</h3>
                  <p className="text-sm text-[#5A5A5A]">{b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6">
        <div className="max-w-[800px] mx-auto">
          <SectionTitle eyebrow="أسئلة شائعة" title="عندك سؤال؟" center />
          <div className="mt-10 space-y-4">
            {faqs.map(({ q, a }, i) => (
              <details key={i} className="bg-white rounded-[16px] shadow-[0_4px_24px_rgba(138,21,56,0.06)] group">
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-bold text-[#1C1C1C] list-none">
                  {q}
                  <span className="text-[#8A1538] text-xl transition-transform group-open:rotate-45">+</span>
                </summary>
                <div className="px-6 pb-5 text-sm text-[#5A5A5A] leading-relaxed border-t border-[rgba(138,21,56,0.08)] pt-4">
                  {a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-[#FAF8F3] text-center">
        <h2 className="text-2xl font-black text-[#1C1C1C] mb-6">جاهز تحجز رحلتك؟</h2>
        <div className="flex justify-center"><AppStoreBadges /></div>
      </section>
    </div>
  );
}
