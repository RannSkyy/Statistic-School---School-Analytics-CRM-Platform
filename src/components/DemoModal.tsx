import React, { useState } from 'react';
import { X, Sparkles, Check, Play, ArrowRight, Layers, BarChart3, Users, Target } from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onJumpToSection: (sectionId: string) => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose, onJumpToSection }) => {
  if (!isOpen) return null;

  const demoTourSteps = [
    {
      title: '1. Summary Data Metrics (2x3 Grid)',
      description: 'Explore leads penetration (50.000), classroom penetration (650), total revenue ($1500), and annual rate toggles.',
      targetSection: 'summary',
      badge: 'Metric Engine'
    },
    {
      title: '2. PIC & Deal Pipeline Table',
      description: 'Search prospective leads, filter Won/Pending/Process statuses, view contact dossiers, and export CSV reports.',
      targetSection: 'deals',
      badge: 'Admissions CRM'
    },
    {
      title: '3. Real-Time Target Trajectory Sliders',
      description: 'Drag target revenue ($1209 / $3000) and leads sliders to see immediate progress recalculations.',
      targetSection: 'targets',
      badge: 'Goal Tracking'
    },
    {
      title: '4. North Region Revenue Card',
      description: 'Click the electric blue card to inspect sub-district yields and 12% MoM growth acceleration.',
      targetSection: 'targets',
      badge: 'Financial Intelligence'
    },
    {
      title: '5. District ROI & Target Simulator',
      description: 'Simulate customized demographic pools, student tuition rates, and enrollment forecasting.',
      targetSection: 'simulator',
      badge: 'Simulator'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#635BFF] to-[#8C84FF] text-white flex items-center justify-center shadow-md">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">Interactive Sandbox Tour</h3>
            <p className="text-xs text-slate-500">Walk through key modules of the Statistic School system</p>
          </div>
        </div>

        <div className="space-y-3 my-6 max-h-[380px] overflow-y-auto pr-1">
          {demoTourSteps.map((step, idx) => (
            <div
              key={step.title}
              onClick={() => {
                onJumpToSection(step.targetSection);
                onClose();
              }}
              className="p-4 rounded-2xl bg-slate-50 hover:bg-indigo-50/60 border border-slate-200/80 hover:border-[#635BFF]/50 transition-all cursor-pointer group flex items-start justify-between gap-4"
            >
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-100">
                    {step.badge}
                  </span>
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#635BFF] transition-colors">
                  {step.title}
                </h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="w-8 h-8 rounded-full bg-white group-hover:bg-[#635BFF] text-slate-400 group-hover:text-white flex items-center justify-center shrink-0 shadow-xs transition-colors mt-1">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-slate-100">
          <span className="text-xs text-slate-500">Fully interactive live prototype</span>
          <button
            onClick={() => {
              onJumpToSection('dashboard');
              onClose();
            }}
            className="px-5 py-2.5 rounded-xl bg-[#635BFF] hover:bg-[#5244ea] text-white text-xs font-bold shadow-md shadow-indigo-600/30 transition-all"
          >
            Launch Live Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};
