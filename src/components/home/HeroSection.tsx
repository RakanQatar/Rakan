import { PriceCalculator } from '../calculator/PriceCalculator';
import { AppStoreBadges } from '../ui/AppStoreBadges';

export function HeroSection() {
  return (
    <section className="relative min-h-[100svh] bg-[#8A1538] sadu-bg flex items-center" aria-label="القسم الرئيسي">
      <div className="max-w-[1200px] mx-auto px-6 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Text side */}
          <div>
            <span className="inline-block text-xs font-bold tracking-widest uppercase bg-white/15 text-[#C9A86A] px-3 py-1 rounded-full mb-5">
              قطر — خدمة سائق خاص
            </span>
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-black text-white leading-tight mb-6">
              اختر المشوار<br />
              <span className="text-[#C9A86A]">والسائق</span><br />
              على حسب رغبتك
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-md">
              سعر ثابت تعرفه مسبقاً. سائقين ذكور وإناث. دعم 24/7 عبر التطبيق.
            </p>
            <AppStoreBadges light size="md" />

            {/* Trust badges */}
            <div className="mt-8 flex flex-wrap gap-4">
              {[
                '✓ سعر ثابت',
                '✓ سائقات إناث',
                '✓ دفع نقدي ورقمي',
                '✓ دعم 24/7',
              ].map(b => (
                <span key={b} className="text-sm text-white/70 font-medium">{b}</span>
              ))}
            </div>
          </div>

          {/* Calculator side */}
          <div className="flex justify-center lg:justify-end">
            <PriceCalculator />
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 inset-x-0 overflow-hidden leading-none">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
          <path d="M0 60L480 20L960 50L1440 0V60H0Z" fill="#FAF8F3"/>
        </svg>
      </div>
    </section>
  );
}
