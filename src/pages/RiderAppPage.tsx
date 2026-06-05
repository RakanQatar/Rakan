import { AppStoreBadges } from '../components/ui/AppStoreBadges';

export function RiderAppPage() {
  return (
    <section className="py-24 px-6 max-w-[800px] mx-auto text-center">
      <h1 className="text-4xl font-black text-[#8A1538] mb-4">تطبيق الركاب</h1>
      <p className="text-lg text-[#5A5A5A] mb-8">حمّل تطبيق دريول وابدأ رحلتك بسعر ثابت ومضمون.</p>
      <div className="flex justify-center"><AppStoreBadges /></div>
    </section>
  );
}
