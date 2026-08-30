import React, { useState } from 'react';
import { 
  Users, 
  Target, 
  TrendingUp, 
  Building2, 
  ShieldCheck, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { featuresList } from '../data/mockData';

export const FeaturesSection: React.FC = () => {
  const [activeFeatureIdx, setActiveFeatureIdx] = useState(0);

  const featureIcons = [
    <Users className="w-5 h-5" />,
    <Target className="w-5 h-5" />,
    <TrendingUp className="w-5 h-5" />,
    <Building2 className="w-5 h-5" />
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-indigo-50 text-[#635BFF] mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>Platform Capabilities</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Engineered for Modern Educational Institutions
          </h2>
          <p className="mt-3 text-slate-600 text-sm md:text-base leading-relaxed">
            Eliminate fragmented spreadsheets. Unify lead intake, admissions visit schedules, goal trajectories, and district revenue metrics into a single high-performance workspace.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuresList.map((f, idx) => {
            const isActive = activeFeatureIdx === idx;
            return (
              <div
                key={f.title}
                onClick={() => setActiveFeatureIdx(idx)}
                className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer text-left flex flex-col justify-between group ${
                  isActive
                    ? 'border-[#635BFF] bg-indigo-50/30 shadow-lg shadow-indigo-500/10 ring-2 ring-indigo-500/20'
                    : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50/80'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                      isActive ? 'bg-[#635BFF] text-white shadow-md shadow-indigo-600/30' : 'bg-slate-100 text-slate-700 group-hover:bg-slate-200'
                    }`}>
                      {featureIcons[idx]}
                    </div>
                    <span className="text-[11px] font-bold text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-100">
                      {f.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug group-hover:text-[#635BFF] transition-colors">
                    {f.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {f.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-800">
                  <span>{f.metrics}</span>
                  <ArrowRight className={`w-4 h-4 transition-transform ${isActive ? 'text-[#635BFF] translate-x-1' : 'text-slate-400 group-hover:translate-x-0.5'}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Feature Deep-Dive Preview */}
        <div className="bg-slate-900 rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#635BFF]/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-indigo-300 border border-white/10">
                <Sparkles className="w-3.5 h-3.5" /> Feature Spotlight
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {featuresList[activeFeatureIdx].title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {featuresList[activeFeatureIdx].description} With built-in FERPA data vaults, automated SMS/email visit confirmations, and real-time dashboard synchronizations across all regional nodes.
              </p>

              <div className="pt-4 grid grid-cols-2 gap-4 text-xs font-medium text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Instant SIS Synchronization</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Sub-second Query Latency</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Multi-District Role Access</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>1-Click State Audit Export</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-slate-800/80 rounded-2xl p-6 border border-slate-700/80 backdrop-blur-md">
              <div className="flex items-center justify-between pb-3 border-b border-slate-700 mb-4 text-xs font-bold text-slate-300">
                <span>Active Telemetry Preview</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  99.99% Node Uptime
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-3 bg-slate-900/90 rounded-xl flex items-center justify-between">
                  <span className="text-slate-400">Total Leads Ingestion Rate</span>
                  <span className="font-extrabold text-white">4,820 / day</span>
                </div>
                <div className="p-3 bg-slate-900/90 rounded-xl flex items-center justify-between">
                  <span className="text-slate-400">Classroom Deal Velocity</span>
                  <span className="font-extrabold text-indigo-300">4.2 Days (avg)</span>
                </div>
                <div className="p-3 bg-slate-900/90 rounded-xl flex items-center justify-between">
                  <span className="text-slate-400">Projected Regional Yield</span>
                  <span className="font-extrabold text-emerald-400">$631,300.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
