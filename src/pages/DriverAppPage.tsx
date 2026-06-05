import { SectionTitle } from '../components/ui/SectionTitle';
import { AppStoreBadges } from '../components/ui/AppStoreBadges';
import { Button } from '../components/ui/Button';
import { DollarSign, Clock, MapPin, Star, Shield, Smartphone } from 'lucide-react';

const benefits = [
  { Icon: DollarSign, title: 'عمولة 0% لأول 4 أشهر',  body: 'احتفظ بكل أرباحك الأربعة أشهر الأولى. لا خصومات، لا مفاجآت.' },
  { Icon: Clock,      title: 'مواعيد بيدك',             body: 'اشتغل متى تريد. التطبيق يعمل 24/7 وأنت تختار وقتك.' },
  { Icon: MapPin,     title: 'رحلات قريبة منك',         body: 'نظام توزيع ذكي يعطيك الرحلات الأقرب لموقعك.' },
  { Icon: Star,       title: 'بناء سمعتك',              body: 'تقييماتك العالية تجلب لك ركاباً أكثر وأرباحاً أفضل.' },
  { Icon: Shield,     title: 'دعم كامل',                body: 'فريق دعم جاهز لمساعدتك في أي مشكلة تواجهها.' },
  { Icon: Smartphone, title: 'تطبيق سهل',               body: 'واجهة بسيطة وواضحة. لا تعقيد، كل شيء بنقرة.' },
];

const requirements = [
  'رخصة قيادة قطرية سارية',
  'سيارة بحالة ممتازة (موديل 2015 فأحدث)',
  'بطاقة هوية قطرية أو إقامة سارية',
  'اجتياز فحص الخلفية الأمنية',
  'التحقق من صحة السيارة والتأمين',
];

export function DriverAppPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#1C1C1C] sadu-bg py-28 px-6">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs font-bold tracking-widest uppercase bg-white/10 text-[#C9A86A] px-3 py-1 rounded-full mb-5">
              تطبيق السائقين
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
              حوّل سيارتك<br />
              <span className="text-[#C9A86A]">إلى مصدر دخل</span>
            </h1>
            <div className="inline-block bg-[#8A1538] rounded-[16px] px-5 py-3 mb-6">
              <p className="text-white font-black text-2xl">عمولة 0% <span className="text-[#C9A86A] text-base font-bold">لأول 4 أشهر</span></p>
            </div>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              سجّل كسائق في دريول واشتغل بشروطك. أنت تحدد وقتك ومناطقك.
            </p>
            <AppStoreBadges light />
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { num: '0%',   label: 'عمولة أول 4 أشهر', sub: 'ابدأ وأنت رابح' },
              { num: '+200', label: 'سائق نشيط', sub: 'في الدوحة' },
              { num: '24/7', label: 'دعم متواصل', sub: 'نحن معك دائماً' },
              { num: '4.8★', label: 'تقييم السائقين', sub: 'متوسط عام' },
            ].map(({ num, label, sub }, i) => (
              <div key={i} className="bg-white/8 border border-white/10 rounded-[20px] p-5 text-center">
                <p className="text-2xl font-black text-[#C9A86A]">{num}</p>
                <p className="text-white font-bold text-sm mt-1">{label}</p>
                <p className="text-white/40 text-xs mt-0.5">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 px-6">
        <div className="max-w-[1200px] mx-auto">
          <SectionTitle eyebrow="لماذا دريول" title="مزايا السائق في دريول" center />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map(({ Icon, title, body }, i) => (
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

      {/* Requirements + Steps side-by-side */}
      <section className="py-24 px-6 bg-[#F4F1EA]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Requirements */}
          <div>
            <SectionTitle eyebrow="الشروط" title="متطلبات الانضمام" />
            <ul className="mt-8 space-y-4">
              {requirements.map((req, i) => (
                <li key={i} className="flex items-center gap-4 bg-white rounded-[16px] p-5 shadow-[0_2px_12px_rgba(138,21,56,0.05)]">
                  <span className="shrink-0 w-8 h-8 rounded-full bg-[#8A1538] text-white font-black text-sm flex items-center justify-center">{i + 1}</span>
                  <span className="text-[#1C1C1C] font-medium">{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Registration steps */}
          <div>
            <SectionTitle eyebrow="خطوات" title="كيف تبدأ" />
            <div className="mt-8 space-y-5">
              {[
                { n: '01', t: 'حمّل التطبيق',      b: 'من App Store أو Google Play.' },
                { n: '02', t: 'سجّل كسائق',        b: 'أدخل بياناتك وارفع المستندات المطلوبة.' },
                { n: '03', t: 'مراجعة الطلب',      b: 'يستغرق الفحص 24-48 ساعة عمل.' },
                { n: '04', t: 'ابدأ الكسب',         b: 'بعد الموافقة، أنت جاهز لاستقبال الرحلات فوراً.' },
              ].map(({ n, t, b }) => (
                <div key={n} className="flex gap-4 bg-white rounded-[16px] p-5 shadow-[0_2px_12px_rgba(138,21,56,0.05)]">
                  <span className="shrink-0 text-3xl font-black text-[#8A1538]/20 font-mono w-10">{n}</span>
                  <div>
                    <h4 className="font-black text-[#1C1C1C] mb-1">{t}</h4>
                    <p className="text-sm text-[#5A5A5A]">{b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-6 bg-[#8A1538] sadu-bg text-center">
        <div className="max-w-[600px] mx-auto">
          <h2 className="text-3xl font-black text-white mb-4">جاهز تنضم؟</h2>
          <p className="text-white/70 text-lg mb-8">سجّل الآن واستفد من عمولة 0% لأول 4 أشهر.</p>
          <div className="flex justify-center">
            <AppStoreBadges light />
          </div>
        </div>
      </section>
    </div>
  );
}
