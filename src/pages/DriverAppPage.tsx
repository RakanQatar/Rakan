import { AppStoreBadges } from '../components/ui/AppStoreBadges';

export function DriverAppPage() {
  return (
    <section className="py-24 px-6 max-w-[800px] mx-auto text-center">
      <h1 className="text-4xl font-black text-[#8A1538] mb-4">تطبيق السائقين</h1>
      <p className="text-lg text-[#5A5A5A] mb-8">سجّل كسائق واستمتع بعمولة 0% لأول 4 أشهر.</p>
      <div className="flex justify-center"><AppStoreBadges /></div>
    </section>
  );
}
