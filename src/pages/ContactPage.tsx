import { useState, type FormEvent } from 'react';
import { SectionTitle } from '../components/ui/SectionTitle';
import { Button } from '../components/ui/Button';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';

const contactInfo = [
  {
    Icon: Phone,
    title: 'الهاتف',
    lines: [
      { text: '+974 44 000 000', href: 'tel:+97444000000' },
    ],
  },
  {
    Icon: Mail,
    title: 'البريد الإلكتروني',
    lines: [
      { text: 'support@drieul.com', href: 'mailto:support@drieul.com' },
      { text: 'drivers@drieul.com', href: 'mailto:drivers@drieul.com' },
    ],
  },
  {
    Icon: Clock,
    title: 'ساعات العمل',
    lines: [
      { text: 'مكتب الدعم: السبت – الخميس، 8 ص – 5 م' },
      { text: 'التطبيق: متاح 24 ساعة / 7 أيام' },
    ],
  },
  {
    Icon: MapPin,
    title: 'الموقع',
    lines: [
      { text: 'الدوحة، قطر' },
    ],
  },
];

export function ContactPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // Placeholder: replace with real form submission
    setTimeout(() => { setLoading(false); setSent(true); }, 1200);
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#8A1538] sadu-bg py-24 px-6 text-center">
        <div className="max-w-[600px] mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">اتصل بنا</h1>
          <p className="text-white/70 text-lg">فريقنا جاهز للمساعدة. تواصل معنا بأي طريقة تناسبك.</p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14">

          {/* Contact info */}
          <div>
            <SectionTitle eyebrow="معلومات التواصل" title="نحن هنا من أجلك" />
            <div className="mt-10 space-y-5">
              {contactInfo.map(({ Icon, title, lines }, i) => (
                <div key={i} className="flex gap-5 bg-white rounded-[20px] p-6 shadow-[0_4px_24px_rgba(138,21,56,0.06)]">
                  <div className="shrink-0 w-12 h-12 rounded-[14px] bg-[#8A1538]/8 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#8A1538]" />
                  </div>
                  <div>
                    <p className="font-black text-[#1C1C1C] mb-1.5">{title}</p>
                    {lines.map((line, j) => (
                      line.href
                        ? <a key={j} href={line.href} className="block text-sm text-[#5A5A5A] hover:text-[#8A1538] transition-colors">{line.text}</a>
                        : <p key={j} className="text-sm text-[#5A5A5A]">{line.text}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact form */}
          <div>
            <SectionTitle eyebrow="راسلنا" title="أرسل رسالتك" />
            {sent ? (
              <div className="mt-10 bg-[#8A1538]/8 border border-[#8A1538]/20 rounded-[20px] p-10 text-center">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-xl font-black text-[#8A1538] mb-2">تم إرسال رسالتك</h3>
                <p className="text-[#5A5A5A] text-sm">سيتواصل معك فريقنا خلال 24 ساعة عمل.</p>
                <button onClick={() => setSent(false)} className="mt-6 text-sm text-[#8A1538] font-bold hover:underline">إرسال رسالة أخرى</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-10 space-y-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-[#1C1C1C] mb-2">الاسم</label>
                    <input id="name" required type="text" placeholder="اسمك الكريم" className="w-full border border-[rgba(28,28,28,0.15)] rounded-[12px] px-4 py-3 text-sm focus:outline-none focus:border-[#8A1538] transition-colors" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-[#1C1C1C] mb-2">رقم الجوال</label>
                    <input id="phone" type="tel" placeholder="+974 XXXX XXXX" className="w-full border border-[rgba(28,28,28,0.15)] rounded-[12px] px-4 py-3 text-sm focus:outline-none focus:border-[#8A1538] transition-colors" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-[#1C1C1C] mb-2">البريد الإلكتروني</label>
                  <input id="email" required type="email" placeholder="example@email.com" className="w-full border border-[rgba(28,28,28,0.15)] rounded-[12px] px-4 py-3 text-sm focus:outline-none focus:border-[#8A1538] transition-colors" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-bold text-[#1C1C1C] mb-2">الموضوع</label>
                  <select id="subject" className="w-full border border-[rgba(28,28,28,0.15)] rounded-[12px] px-4 py-3 text-sm focus:outline-none focus:border-[#8A1538] transition-colors bg-white">
                    <option value="">اختر الموضوع</option>
                    <option value="support">دعم فني</option>
                    <option value="driver">الانضمام كسائق</option>
                    <option value="complaint">شكوى أو اقتراح</option>
                    <option value="business">شراكات تجارية</option>
                    <option value="other">أخرى</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-[#1C1C1C] mb-2">الرسالة</label>
                  <textarea id="message" required rows={5} placeholder="اكتب رسالتك هنا..." className="w-full border border-[rgba(28,28,28,0.15)] rounded-[12px] px-4 py-3 text-sm focus:outline-none focus:border-[#8A1538] transition-colors resize-none" />
                </div>
                <Button type="submit" size="lg" className="w-full" disabled={loading}>
                  {loading ? 'جاري الإرسال...' : 'أرسل الرسالة'}
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
