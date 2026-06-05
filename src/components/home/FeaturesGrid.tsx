import { Clock, CreditCard, Star, Shield, Users, Headphones } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';

const features = [
  {
    Icon: Clock,
    title: 'حجز بالساعة',
    body: 'احجز سائقك لساعات متعددة بسعر ثابت وواضح.',
  },
  {
    Icon: CreditCard,
    title: 'دفع مرن',
    body: 'نقدي، بطاقة بنكية، أو محفظة رقمية — كلها مقبولة.',
  },
  {
    Icon: Star,
    title: 'سائقون معتمدون',
    body: 'كل سائق يمر بفحص أمني دقيق قبل الانضمام للمنصة.',
  },
  {
    Icon: Shield,
    title: 'سلامتك أولوية',
    body: 'تتبع رحلتك لحظة بلحظة. شارك التفاصيل مع من تريد.',
  },
  {
    Icon: Users,
    title: 'سائقك بيدك',
    body: 'اختر سائقاً أو سائقة. لك حرية الاختيار.',
  },
  {
    Icon: Headphones,
    title: 'دعم 24/7 عبر التطبيق',
    body: 'فريق دعم جاهز في أي وقت. مكتب الدعم متاح 8ص – 5م.',
  },
];

export function FeaturesGrid() {
  return (
    <section className="py-24 px-6 bg-[#FAF8F3]" aria-labelledby="features-title">
      <div className="max-w-[1200px] mx-auto">
        <SectionTitle
          id="features-title"
          eyebrow="ميزاتنا"
          title="ليش بس، خدمة مختلفة"
          center
        />
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ Icon, title, body }, i) => (
            <div
              key={i}
              className="bg-white rounded-[20px] p-7 shadow-[0_4px_24px_rgba(138,21,56,0.06)] hover:shadow-[0_8px_36px_rgba(138,21,56,0.12)] hover:-translate-y-1 transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-[14px] bg-[#8A1538]/8 flex items-center justify-center mb-5">
                <Icon className="w-6 h-6 text-[#8A1538]" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-black text-[#1C1C1C] mb-2">{title}</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
