import { Link } from 'react-router-dom';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#1C1C1C] text-white sadu-bg">
      <div className="max-w-[1200px] mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-white/10">

          {/* Brand */}
          <div>
            <span className="text-2xl font-black text-[#C9A86A] block mb-4">دريول</span>
            <p className="text-white/60 text-sm leading-relaxed">
              منصة قطرية لحجز سائق خاص بسعر ثابت ومضمون.
              نربط الركاب بأفضل السائقين في الدوحة.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white mb-5">تواصل معنا</h3>
            <div className="space-y-3 text-sm text-white/60">
              <p>
                <a href="tel:+97444000000" className="hover:text-[#C9A86A] transition-colors">
                  هاتف: +974 44 000 000
                </a>
              </p>
              <p>
                <a href="mailto:support@drieul.com" className="hover:text-[#C9A86A] transition-colors">
                  support@drieul.com
                </a>
              </p>
              <div className="pt-2 space-y-1">
                <p><span className="text-[#C9A86A] font-medium">مكتب الدعم:</span> السبت – الخميس، 8 ص – 5 م</p>
                <p><span className="text-[#C9A86A] font-medium">التطبيق:</span> متاح 24/7</p>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold text-white mb-5">روابط سريعة</h3>
            <nav className="space-y-3" aria-label="روابط التذييل">
              {[
                { href: '/',        label: 'الرئيسية' },
                { href: '/about',   label: 'من نحن' },
                { href: '/rider',   label: 'تطبيق الركاب' },
                { href: '/driver',  label: 'تطبيق السائقين' },
                { href: '/privacy', label: 'سياسة الخصوصية' },
                { href: '/terms',   label: 'الشروط والأحكام' },
              ].map(l => (
                <Link key={l.href} to={l.href} className="block text-sm text-white/60 hover:text-[#C9A86A] transition-colors">
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Social + copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {[
              { href: 'https://instagram.com/drieulqa',  label: 'Instagram', Icon: InstagramIcon },
              { href: 'https://facebook.com/drieulqa',   label: 'Facebook',  Icon: FacebookIcon },
              { href: 'https://x.com/drieulqa',          label: 'X',         Icon: XIcon },
              { href: 'https://youtube.com/@drieulqa',   label: 'YouTube',   Icon: YoutubeIcon },
              { href: 'https://tiktok.com/@drieulqa',    label: 'TikTok',    Icon: TiktokIcon },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#8A1538] transition-colors"
              >
                <Icon />
              </a>
            ))}
          </div>
          <p className="text-xs text-white/35">© {year} دريول. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}

function InstagramIcon() {
  return <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>;
}
function FacebookIcon() {
  return <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>;
}
function XIcon() {
  return <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>;
}
function YoutubeIcon() {
  return <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>;
}
function TiktokIcon() {
  return <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.77 1.53V6.78a4.85 4.85 0 01-1-.09z"/></svg>;
}
