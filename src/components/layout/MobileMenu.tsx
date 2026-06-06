import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, ChevronLeft } from 'lucide-react';
import { navLinks } from './Header';

interface Props {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: Props) {
  const { pathname } = useLocation();

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        aria-hidden="true"
        className={`fixed inset-0 z-[60] bg-black/45 backdrop-blur-sm transition-opacity duration-300 ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Panel — slides from the right (RTL) */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="قائمة التنقل"
        className={`fixed top-0 right-0 h-full w-72 z-[70] bg-white flex flex-col shadow-2xl transition-transform duration-300 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 h-[72px] border-b border-[rgba(138,21,56,0.10)]">
          <span className="text-xl font-black text-[#8A1538]">دريول</span>
          <button onClick={onClose} className="p-2 rounded-xl hover:bg-[#F4F1EA] transition-colors" aria-label="إغلاق القائمة">
            <X className="w-5 h-5 text-[#5A5A5A]" />
          </button>
        </div>

        {/* Links */}
        <nav className="flex flex-col p-4 gap-1 flex-1 overflow-y-auto">
          {navLinks.map(link => (
            <Link
              key={link.href}
              to={link.href}
              onClick={onClose}
              className={`flex items-center justify-between px-4 py-3.5 rounded-[14px] text-base font-medium transition-colors ${
                pathname === link.href
                  ? 'bg-[#8A1538]/8 text-[#8A1538]'
                  : 'text-[#1C1C1C] hover:bg-[#F4F1EA]'
              }`}
            >
              {link.label}
              <ChevronLeft className="w-4 h-4 opacity-40" />
            </Link>
          ))}
        </nav>

        {/* Bottom CTA */}
        <div className="p-5 border-t border-[rgba(138,21,56,0.10)]">
          <a
            href="https://play.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full bg-[#8A1538] text-white font-bold py-3.5 rounded-[16px] shadow-[0_4px_16px_rgba(138,21,56,0.30)] hover:bg-[#6b1029] transition-colors"
          >
            حمّل التطبيق الآن
          </a>
        </div>
      </div>
    </>
  );
}
