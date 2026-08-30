import React from 'react';
import { Quote, Star, CheckCircle, Sparkles } from 'lucide-react';
import { testimonials } from '../data/mockData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-[#E4E9F0]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-indigo-100 text-[#635BFF] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Proven District Outcomes</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Trusted by Leading STEM & Secondary Academies
          </h2>
          <p className="mt-3 text-slate-600 text-sm md:text-base">
            See how educational leaders leverage real-time statistics to forecast student capacity and close enrollment goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80 flex flex-col justify-between hover:shadow-lg transition-all duration-300 group"
            >
              <div>
                {/* 5 Stars + Stat Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-extrabold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    {t.stat}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.author}
                  referrerPolicy="no-referrer"
                  className="w-11 h-11 rounded-full object-cover ring-2 ring-indigo-50 shrink-0"
                />
                <div>
                  <h4 className="text-xs font-bold text-slate-900 group-hover:text-[#635BFF] transition-colors">
                    {t.author}
                  </h4>
                  <p className="text-[11px] text-slate-500 font-medium">{t.role}</p>
                  <p className="text-[10px] text-indigo-600 font-semibold truncate max-w-[200px]">
                    {t.institution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
