import { HashRouter, Routes, Route, useLocation, useEffect as _ue } from 'react-router-dom';
import { useEffect } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage }          from './pages/HomePage';
import { AboutPage }         from './pages/AboutPage';
import { RiderAppPage }      from './pages/RiderAppPage';
import { DriverAppPage }     from './pages/DriverAppPage';
import { ContactPage }       from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage }         from './pages/TermsPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, [pathname]);
  return null;
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-[72px]">{children}</main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/"        element={<HomePage />} />
          <Route path="/about"   element={<AboutPage />} />
          <Route path="/rider"   element={<RiderAppPage />} />
          <Route path="/driver"  element={<DriverAppPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/terms"   element={<TermsPage />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}
