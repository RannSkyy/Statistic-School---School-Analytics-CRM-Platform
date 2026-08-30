import React, { useState } from 'react';
import { Zap, Mail, ArrowRight, ShieldCheck, Heart, CheckCircle2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim() || !newsletterEmail.includes('@')) return;
    setSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail('');
      setSubscribed(false);
    }, 4000);
  };

  const navLinks = [
    { label: 'Live Dashboard', href: '#dashboard' },
    { label: 'Summary Stats', href: '#summary' },
    { label: 'CRM & Deals', href: '#deals' },
    { label: 'Target Tracking', href: '#targets' },
    { label: 'Features', href: '#features' },
    { label: 'ROI Simulator', href: '#simulator' },
    { label: 'Pricing Plans', href: '#pricing' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#635BFF] to-[#8C84FF] flex items-center justify-center shadow-md shadow-indigo-500/25">
                <Zap className="w-5 h-5 text-white fill-white" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                Statistic<span className="text-[#8C84FF]">School</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              The next-generation intelligence platform for school districts, secondary academies, and educational administrators worldwide.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-slate-400">All District Telemetry Systems Operational (99.99%)</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-4 text-xs">
            <div>
              <h4 className="font-bold text-white uppercase tracking-wider text-[11px] mb-3 text-slate-300">
                Navigation
              </h4>
              <ul className="space-y-2">
                {navLinks.slice(0, 5).map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white uppercase tracking-wider text-[11px] mb-3 text-slate-300">
                Institutional
              </h4>
              <ul className="space-y-2">
                {navLinks.slice(5).map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Col 3: Newsletter & Briefings */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px] text-slate-300">
              District Analytics Briefing
            </h4>
            <p className="text-xs text-slate-400">
              Receive monthly educational benchmark data and admissions optimization trends.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Thank you for subscribing to District Briefings!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2 text-xs">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="superintendent@district.gov"
                  className="flex-1 px-3.5 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:ring-2 focus:ring-[#635BFF] outline-none"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-[#635BFF] hover:bg-[#5244ea] text-white font-bold transition-all shrink-0"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}

            <div className="pt-2 flex items-center gap-2 text-[11px] text-slate-500">
              <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
              <span>FERPA & COPPA Protected • No Spam Guarantee</span>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Statistic School Platform. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#contact" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#contact" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <a href="#contact" className="hover:text-slate-300 transition-colors">Security Audit</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
