export function ContactPage() {
  return (
    <section className="py-24 px-6 max-w-[600px] mx-auto">
      <h1 className="text-4xl font-black text-[#8A1538] mb-8">اتصل بنا</h1>
      <div className="space-y-4 text-[#5A5A5A]">
        <p>هاتف: <a href="tel:+97444000000" className="text-[#8A1538] font-medium hover:underline">+974 44 000 000</a></p>
        <p>بريد: <a href="mailto:support@drieul.com" className="text-[#8A1538] font-medium hover:underline">support@drieul.com</a></p>
        <p>ساعات العمل: السبت – الخميس، 8 صباحاً – 5 مساءً</p>
        <p>التطبيق متاح 24/7</p>
      </div>
    </section>
  );
}
