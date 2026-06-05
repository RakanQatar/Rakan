import { SectionTitle } from '../components/ui/SectionTitle';
import { Button } from '../components/ui/Button';
import { Target, Eye, Heart, Shield, Star, Users } from 'lucide-react';

const values = [
  { Icon: Target,  title: 'سعر واضح',     body: 'نؤمن بالشفافية الكاملة. الراكب يعرف التكلفة قبل الرحلة، لا مفاجآت.' },
  { Icon: Shield,  title: 'أمان أولاً',   body: 'كل سائق يمر بفحص أمني دقيق. سلامتك ليست خياراً، هي معيارنا الأساسي.' },
  { Icon: Heart,   title: 'تجربة راقية',  body: 'خدمة سائق خاص، ليست تاكسي. نرفع مستوى التنقل في قطر.' },
  { Icon: Users,   title: 'للجميع',       body: 'سائقون وسائقات. دفع نقدي ورقمي. نخدم كل أفراد المجتمع القطري.' },
  { Icon: Star,    title: 'جودة مضمونة', body: 'تقييمات حقيقية، رقابة مستمرة، وفريق دعم جاهز للتدخل فوراً.' },
  { Icon: Eye,     title: 'شفافية كاملة', body: 'لا رسوم خفية، لا تسعير متغير وقت الذروة. ما تراه ما تدفعه.' },
];

export function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#8A1538] sadu-bg py-28 px-6 text-center">
        <div className="max-w-[800px] mx-auto">
          <span className="inline-block text-xs font-bold tracking-widest uppercase bg-white/15 text-[#C9A86A] px-3 py-1 rounded-full mb-5">
            قصتنا
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            نبني مستقبل التنقل في قطر
          </h1>
          <p className="text-white/75 text-lg leading-relaxed">
            دريول منصة قطرية نشأت من إيمان بأن كل شخص يستحق رحلة مريحة وآمنة بسعر عادل ومعروف مسبقاً.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-6">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionTitle
              eyebrow="من نحن"
              title="أكثر من تطبيق نقل"
              subtitle="دريول هي منصة قطرية تجمع بين الراكب وسائق خاص محترف. أسسناها لنحل مشاكل حقيقية: أسعار غير واضحة، سائقون غير موثوقين، وغياب خيار السائقة الأنثى."
            />
            <div className="mt-8 space-y-4">
              {[
                'أول منصة قطرية تتيح اختيار جنس السائق',
                'سعر ثابت معروف قبل تأكيد الحجز',
                'سائقون معتمدون بفحص أمني كامل',
                'دفع نقدي ورقمي بدون إلزام',
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="mt-1 w-5 h-5 rounded-full bg-[#8A1538] flex items-center justify-center shrink-0">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span className="text-[#1C1C1C] font-medium">{point}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#F4F1EA] rounded-[32px] p-10 text-center">
            <div className="text-7xl mb-4">🇶🇦</div>
            <h3 className="text-2xl font-black text-[#8A1538] mb-2">صُنع في قطر</h3>
            <p className="text-[#5A5A5A] text-sm leading-relaxed">
              فريق قطري يفهم احتياجات المجتمع المحلي ويعمل يومياً على تحسين تجربة التنقل في الدوحة.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 bg-[#FAF8F3]">
        <div className="max-w-[1200px] mx-auto">
          <SectionTitle eyebrow="قيمنا" title="ما الذي يميزنا" center />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map(({ Icon, title, body }, i) => (
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

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-[600px] mx-auto">
          <h2 className="text-3xl font-black text-[#1C1C1C] mb-4">جرّب دريول اليوم</h2>
          <p className="text-[#5A5A5A] mb-8">حمّل التطبيق وابدأ رحلتك الأولى بسعر ثابت ومضمون.</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button as="a" href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" size="lg">App Store</Button>
            <Button as="a" href="https://play.google.com" target="_blank" rel="noopener noreferrer" variant="outline" size="lg">Google Play</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
