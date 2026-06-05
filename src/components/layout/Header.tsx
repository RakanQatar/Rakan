import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { MobileMenu } from './MobileMenu';

export const navLinks = [
  { href: '/',       label: 'الرئيسية' },
  { href: '/about',  label: 'من نحن' },
  { href: '/rider',  label: 'تطبيق الركاب' },
  { href: '/driver', label: 'تطبيق السائقين' },
  { href: '/contact', label: 'اتصل بنا' },
];

export function Header() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const location                  = useLocation();
  const isHome                    = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  const navBg = scrolled || !isHome
    ? 'bg-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(28,28,28,0.07)]'
    : 'bg-transparent';

  const linkColor = (href: string) =>
    location.pathname === href
      ? 'text-[#8A1538] font-bold'
      : (scrolled || !isHome ? 'text-[#1C1C1C]' : 'text-white');

  return (
    <>
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${navBg}`}>
        <div className="max-w-[1200px] mx-auto px-6 h-[72px] flex items-center justify-between gap-6">

          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <span className={`text-2xl font-black tracking-tight transition-colors ${
              scrolled || !isHome ? 'text-[#8A1538]' : 'text-white'
            }`}>
              دريول
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7" aria-label="القائمة الرئيسية">
            {navLinks.map(link => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm transition-colors hover:text-[#8A1538] ${linkColor(link.href)}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-[#8A1538] text-white text-sm font-bold px-5 py-2.5 rounded-[16px] shadow-[0_4px_14px_rgba(138,21,56,0.30)] hover:bg-[#6b1029] transition-colors"
            >
              حمّل التطبيق
            </a>
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden p-2 rounded-xl hover:bg-black/10 transition-colors"
              aria-label="فتح القائمة"
            >
              <Menu className={`w-6 h-6 ${scrolled || !isHome ? 'text-[#1C1C1C]' : 'text-white'}`} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
