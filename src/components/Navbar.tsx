import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  Menu, 
  X, 
  ChevronRight, 
  PhoneCall, 
  BarChart3, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

interface NavbarProps {
  onOpenDemoModal: () => void;
  onOpenContactModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemoModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('dashboard');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['dashboard', 'summary', 'deals', 'targets', 'features', 'simulator', 'pricing', 'testimonials', 'faq', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Live Dashboard', href: '#dashboard' },
    { label: 'Summary Stats', href: '#summary' },
    { label: 'CRM & Deals', href: '#deals' },
    { label: 'Target Tracking', href: '#targets' },
    { label: 'Features', href: '#features' },
    { label: 'ROI Simulator', href: '#simulator' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/90 backdrop-blur-md text-white shadow-lg border-b border-slate-800/80'
          : 'bg-slate-900 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Brand Logo */}
          <a
            id="brand-logo-link"
            href="#dashboard"
            onClick={(e) => handleScrollTo(e, '#dashboard')}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#635BFF] to-[#8C84FF] flex items-center justify-center shadow-md shadow-indigo-500/25 group-hover:scale-105 transition-transform">
              <Zap className="w-5 h-5 text-white fill-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg md:text-xl tracking-tight text-white">
                  Statistic<span className="text-[#8C84FF]">School</span>
                </span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1 animate-pulse" />
                  Live v2.4
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden sm:block">
                School Analytics & Target Intelligence
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.slice(0, 7).map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.href}
                  id={`nav-${link.href.replace('#', '')}`}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className={`px-3 py-1.5 rounded-lg text-xs xl:text-sm font-medium transition-all duration-150 ${
                    isActive
                      ? 'text-white bg-[#635BFF]/30 border border-[#635BFF]/40 font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <a
              id="nav-contact"
              href="#contact"
              onClick={(e) => handleScrollTo(e, '#contact')}
              className={`px-3 py-1.5 rounded-lg text-xs xl:text-sm font-medium transition-all duration-150 ${
                activeSection === 'contact'
                  ? 'text-white bg-[#635BFF]/30 border border-[#635BFF]/40 font-semibold'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              Contact
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              id="btn-schedule-call"
              onClick={() => {
                const contactEl = document.getElementById('contact');
                if (contactEl) {
                  contactEl.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-200 hover:text-white hover:bg-slate-800 border border-slate-700 transition-all active:scale-95"
            >
              <PhoneCall className="w-3.5 h-3.5 text-indigo-400" />
              <span>Schedule Call</span>
            </button>

            <button
              id="btn-nav-request-demo"
              onClick={onOpenDemoModal}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-[#635BFF] hover:bg-[#5249ea] text-white shadow-md shadow-indigo-600/30 transition-all hover:scale-102 active:scale-98"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive Demo</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              id="btn-mobile-demo"
              onClick={onOpenDemoModal}
              className="px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-[#635BFF] text-white"
            >
              Demo
            </button>
            <button
              id="btn-mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer-menu"
          className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 animate-fadeIn"
        >
          <div className="grid grid-cols-2 gap-2 pt-2 pb-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className={`flex items-center justify-between p-2.5 rounded-xl text-xs font-medium ${
                  activeSection === link.href.replace('#', '')
                    ? 'bg-[#635BFF]/20 text-white font-bold border border-[#635BFF]/30'
                    : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                <span>{link.label}</span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full py-2.5 rounded-xl text-center text-xs font-semibold bg-slate-800 text-slate-200 hover:bg-slate-700"
            >
              Contact School Admissions
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemoModal();
              }}
              className="w-full py-2.5 rounded-xl text-center text-xs font-semibold bg-[#635BFF] text-white shadow-md"
            >
              Launch Live Sandbox Demo
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
