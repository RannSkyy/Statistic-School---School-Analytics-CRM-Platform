import React from 'react';
import { ArrowUpRight, TrendingUp, Sparkles } from 'lucide-react';

interface RegionalRevenueCardProps {
  onOpenRegionalModal: () => void;
}

export const RegionalRevenueCard: React.FC<RegionalRevenueCardProps> = ({
  onOpenRegionalModal
}) => {
  return (
    <div
      id="regional-revenue-card"
      onClick={onOpenRegionalModal}
      className="bg-[#0B66FE] text-white rounded-2xl p-6 shadow-lg shadow-blue-500/25 relative overflow-hidden cursor-pointer group hover:bg-[#0957DB] transition-all duration-300 transform hover:-translate-y-0.5"
    >
      {/* Background glow circle */}
      <div className="absolute -right-8 -bottom-8 w-36 h-36 rounded-full bg-white/10 blur-xl pointer-events-none group-hover:scale-125 transition-transform" />

      {/* Top Header: Title + Arrow Action Button ↗ */}
      <div className="flex items-start justify-between gap-3 mb-6 relative z-10">
        <div>
          <h3 className="text-sm md:text-base font-bold text-white leading-snug">
            Revenue School <br /> North Region
          </h3>
        </div>

        {/* Circular Action Button with ↗ */}
        <div className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center text-white transition-all duration-200 shrink-0 group-hover:scale-110">
          <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>

      {/* Metric Stat + Growth Pill + Timestamp */}
      <div className="flex items-baseline flex-wrap gap-2.5 mb-6 relative z-10">
        <div className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
          $631.3
        </div>
        
        {/* Growth pill */}
        <div className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full text-xs font-bold bg-white/20 text-white backdrop-blur-sm">
          <TrendingUp className="w-3.5 h-3.5 stroke-[2.5]" />
          <span>12%</span>
        </div>

        <div className="text-xs text-blue-100/80 font-normal ml-auto">
          Update 1 hour ago
        </div>
      </div>

      {/* Footer text: Report data November 2023 | Updated */}
      <div className="flex items-center justify-between text-xs text-blue-100/90 pt-3 border-t border-white/15 relative z-10">
        <span>Report data November 2023</span>
        <span className="font-semibold text-white flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Updated
        </span>
      </div>
    </div>
  );
};
