import { Button } from '../ui/Button';

export function DriverCTABanner() {
  return (
    <section className="py-20 px-6 bg-[#1C1C1C]" aria-labelledby="driver-cta-title">
      <div className="max-w-[900px] mx-auto">
        <div className="bg-gradient-to-l from-[#8A1538] to-[#6b1029] rounded-[32px] p-10 md:p-14 text-center relative overflow-hidden">
          {/* Gold accent */}
          <div className="absolute top-0 inset-x-0 h-1 bg-[#C9A86A]" aria-hidden="true" />

          <span className="inline-block text-xs font-bold tracking-widest uppercase bg-white/15 text-[#C9A86A] px-3 py-1 rounded-full mb-5">
            عرض خاص
          </span>

          <h2 id="driver-cta-title" className="text-3xl md:text-4xl font-black text-white mb-4">
            عمولة <span className="text-[#C9A86A]">0%</span> لأول 4 أشهر
          </h2>
          <p className="text-white/75 text-lg mb-8 max-w-lg mx-auto">
            سجّل كسائق في دريول واحتفظ بكل أرباحك لأول أربعة أشهر. لا عمولة، لا خصومات.
          </p>

          <div className="flex flex-wrap justify-center gap-8 mb-10">
            {[
              { num: '0%',    label: 'عمولة لأول 4 أشهر' },
              { num: '+200',  label: 'سائق نشيط' },
              { num: '24/7',  label: 'دعم متواصل' },
            ].map(({ num, label }, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl font-black text-[#C9A86A]">{num}</p>
                <p className="text-white/60 text-sm mt-1">{label}</p>
              </div>
            ))}
          </div>

          <Button variant="gold" size="lg" as="a" href="https://play.google.com" target="_blank" rel="noopener noreferrer">
            سجّل كسائق الآن
          </Button>
        </div>
      </div>
    </section>
  );
}
