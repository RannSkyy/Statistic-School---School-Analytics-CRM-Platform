import React, { useState } from 'react';
import { Check, Zap, Sparkles, HelpCircle } from 'lucide-react';
import { pricingPlans } from '../data/mockData';

interface PricingSectionProps {
  onSelectPlan?: (planName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="py-16 md:py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-indigo-50 text-[#635BFF] mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>Institutional Plans</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Transparent Pricing for Every Campus Scale
          </h2>
          <p className="mt-3 text-slate-600 text-sm md:text-base">
            From single STEM high schools to state-wide education networks, deploy reliable data pipelines with zero hidden fees.
          </p>

          {/* Billing Switcher Toggle */}
          <div className="mt-8 inline-flex items-center gap-3 p-1.5 rounded-2xl bg-slate-100 border border-slate-200">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                !isAnnual ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                isAnnual ? 'bg-[#635BFF] text-white shadow-md shadow-indigo-600/30' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>Annual Billing</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-extrabold ${
                isAnnual ? 'bg-white/20 text-white' : 'bg-emerald-100 text-emerald-700'
              }`}>
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan) => {
            const price = isAnnual ? plan.priceAnnually : plan.priceMonthly;

            return (
              <div
                key={plan.name}
                className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  plan.popular
                    ? 'bg-slate-900 text-white shadow-2xl ring-2 ring-[#635BFF] transform lg:-translate-y-2'
                    : 'bg-white text-slate-900 border border-slate-200 shadow-sm hover:border-slate-300 hover:shadow-md'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#635BFF] to-[#8C84FF] text-white text-[11px] font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
                    ★ Most Popular Choice
                  </div>
                )}

                <div>
                  {/* Plan Name & Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold tracking-tight">{plan.name}</h3>
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                      plan.popular ? 'bg-white/15 text-indigo-200' : 'bg-slate-100 text-slate-700'
                    }`}>
                      {plan.badge}
                    </span>
                  </div>

                  <p className={`text-xs leading-relaxed mb-6 ${plan.popular ? 'text-slate-300' : 'text-slate-500'}`}>
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mb-6 pb-6 border-b border-slate-100/20">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-extrabold tracking-tight">${price}</span>
                      <span className={`text-xs font-semibold ${plan.popular ? 'text-slate-300' : 'text-slate-500'}`}>
                        / campus / mo
                      </span>
                    </div>
                    <div className={`text-[11px] mt-1 ${plan.popular ? 'text-indigo-300' : 'text-slate-400'}`}>
                      {isAnnual ? 'Billed annually ($' + (price * 12).toLocaleString() + '/yr)' : 'Billed monthly'}
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8 text-xs font-medium">
                    <div className={`text-[11px] font-bold uppercase tracking-wider mb-2 ${
                      plan.popular ? 'text-slate-400' : 'text-slate-500'
                    }`}>
                      Included Features:
                    </div>
                    {plan.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2.5">
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          plan.popular ? 'bg-indigo-500/30 text-indigo-300' : 'bg-emerald-100 text-emerald-700'
                        }`}>
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className={plan.popular ? 'text-slate-200' : 'text-slate-700'}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Plan Action CTA */}
                <a
                  href="#contact"
                  onClick={() => onSelectPlan && onSelectPlan(plan.name)}
                  className={`w-full py-3 rounded-2xl text-center text-xs font-bold transition-all shadow-md active:scale-98 ${
                    plan.popular
                      ? 'bg-[#635BFF] hover:bg-[#5246ea] text-white shadow-indigo-600/40'
                      : 'bg-slate-900 hover:bg-slate-800 text-white'
                  }`}
                >
                  {plan.buttonText}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
