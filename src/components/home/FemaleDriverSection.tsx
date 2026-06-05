import { Shield, Star, CheckCircle } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';
import { Button } from '../ui/Button';

const points = [
  { Icon: Shield, text: 'خصوصية تامة — سائقة للراكبات فقط' },
  { Icon: Star,   text: 'سائقات مدربات ومعتمدات' },
  { Icon: CheckCircle, text: 'أمان وراحة بالنسبة لك ولعائلتك' },
];

export function FemaleDriverSection() {
  return (
    <section className="py-24 px-6 bg-[#F4F1EA]" aria-labelledby="female-title">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="bg-[#8A1538] rounded-[32px] p-10 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-[#C9A86A] to-transparent" />
              <div className="relative z-10">
                <div className="text-8xl mb-4" role="img" aria-label="سائقة">👩‍🚗</div>
                <p className="text-white font-bold text-xl">سائقات محترفات</p>
                <p className="text-white/70 text-sm mt-1">في خدمتك على مدار الساعة</p>
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-[#C9A86A] text-white text-sm font-bold px-4 py-2.5 rounded-[14px] shadow-lg">
              خصوصية وأمان
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <SectionTitle
              id="female-title"
              eyebrow="ميزة حصرية"
              title="سائقات إناث خصصين لك"
              subtitle="نفتخر بتوفير سائقات متدربات للراكبات اللواتي يفضلن خصوصيتهن وراحتهن."
            />
            <ul className="mt-8 space-y-4">
              {points.map(({ Icon, text }, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="shrink-0 w-10 h-10 rounded-[12px] bg-[#8A1538]/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#8A1538]" aria-hidden="true" />
                  </span>
                  <span className="text-[#1C1C1C] font-medium">{text}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button as="a" href="https://play.google.com" target="_blank" rel="noopener noreferrer">
                حمّلي التطبيق
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
