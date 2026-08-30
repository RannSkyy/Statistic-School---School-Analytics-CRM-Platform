import React, { useState } from 'react';
import { Bookmark, ChevronDown, TrendingUp, TrendingDown, Info } from 'lucide-react';
import { SummaryStats } from '../types';

interface SummaryDataCardProps {
  stats: SummaryStats;
  selectedYear: string;
  onYearChange: (year: string) => void;
  availableYears: string[];
}

export const SummaryDataCard: React.FC<SummaryDataCardProps> = ({
  stats,
  selectedYear,
  onYearChange,
  availableYears
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [tooltipMetric, setTooltipMetric] = useState<string | null>(null);

  // Format helpers
  const formatNumber = (val: number) => {
    return val.toLocaleString('id-ID'); // uses dot as thousands separator matching 50.000 in screenshot
  };

  return (
    <div
      id="summary-data-card"
      className="bg-white rounded-2xl p-5 md:p-6 shadow-sm border border-slate-100/90 relative"
    >
      {/* Top Header: Bookmark icon + "Summary Data" + Year dropdown */}
      <div className="flex items-center justify-between mb-5 pb-2">
        <div className="flex items-center gap-2.5">
          <div className="text-slate-700">
            <Bookmark className="w-5 h-5 fill-slate-700" />
          </div>
          <h2 className="text-base md:text-lg font-bold text-slate-900 tracking-tight">
            Summary Data
          </h2>
        </div>

        {/* Year Dropdown Pill */}
        <div className="relative">
          <button
            id="btn-year-dropdown"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors focus:outline-none"
          >
            <span>{selectedYear}</span>
            <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
          </button>

          {dropdownOpen && (
            <div
              id="year-dropdown-menu"
              className="absolute right-0 mt-1.5 w-32 bg-white rounded-xl shadow-xl border border-slate-100 py-1.5 z-20 animate-fadeIn"
            >
              {availableYears.map((year) => (
                <button
                  key={year}
                  onClick={() => {
                    onYearChange(year);
                    setDropdownOpen(false);
                  }}
                  className={`w-full text-left px-3 py-1.5 text-xs font-medium transition-colors ${
                    selectedYear === year
                      ? 'bg-indigo-50 text-[#635BFF] font-bold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* 2x3 Metrics Grid with clean dividers */}
      <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 border-t sm:border-t-0 border-b sm:border-b-0 border-slate-100">
        {/* Row 1, Col 1: Leads Penetration */}
        <div className="py-3.5 sm:py-2 sm:pr-4">
          <div className="flex items-center justify-between text-xs text-slate-500 font-medium mb-1">
            <span>Leads Penetration</span>
            <button 
              onClick={() => setTooltipMetric(tooltipMetric === 'leads' ? null : 'leads')}
              className="text-slate-400 hover:text-slate-600"
              title="Click for definition"
            >
              <Info className="w-3.5 h-3.5" />
            </button>
          </div>
          <div className="text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight">
            {formatNumber(stats.leadsPenetration)}
          </div>
          <div className="mt-1 flex items-center gap-1 text-xs font-bold text-emerald-600">
            <TrendingUp className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>{stats.leadsPenetrationGrowth}%</span>
          </div>
        </div>

        {/* Row 1, Col 2: Total Potential Leads */}
        <div className="py-3.5 sm:py-2 sm:px-4">
          <div className="text-xs text-slate-500 font-medium mb-1">
            Total Potential Leads
          </div>
          <div className="text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight">
            {formatNumber(stats.totalPotentialLeads)}
          </div>
          <div className="mt-1 text-[11px] text-slate-400 font-medium">
            Projected pipeline cap
          </div>
        </div>

        {/* Row 1, Col 3: Class Penetration */}
        <div className="py-3.5 sm:py-2 sm:pl-4">
          <div className="text-xs text-slate-500 font-medium mb-1">
            Class Penetration
          </div>
          <div className="text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight">
            {stats.classPenetration}
          </div>
          <div className="mt-1 flex items-center gap-1 text-xs font-bold text-rose-500">
            <TrendingDown className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>{Math.abs(stats.classPenetrationGrowth)}%</span>
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 border-t border-slate-100 mt-3 pt-2">
        {/* Row 2, Col 1: Total Potential Class */}
        <div className="py-3.5 sm:py-2 sm:pr-4">
          <div className="text-xs text-slate-500 font-medium mb-1">
            Total Potential Class
          </div>
          <div className="text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight">
            {formatNumber(stats.totalPotentialClass)}
          </div>
          <div className="mt-1 text-[11px] text-slate-400 font-medium">
            Total regional classrooms
          </div>
        </div>

        {/* Row 2, Col 2: Total Revenue */}
        <div className="py-3.5 sm:py-2 sm:px-4">
          <div className="text-xs text-slate-500 font-medium mb-1">
            Total Revenue
          </div>
          <div className="text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight">
            ${stats.totalRevenue}
          </div>
          <div className="mt-1 flex items-center gap-1 text-xs font-bold text-emerald-600">
            <TrendingUp className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>{stats.totalRevenueGrowth}%</span>
          </div>
        </div>

        {/* Row 2, Col 3: Lead CR */}
        <div className="py-3.5 sm:py-2 sm:pl-4">
          <div className="text-xs text-slate-500 font-medium mb-1">
            Lead CR
          </div>
          <div className="text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight">
            {stats.leadCR}%
          </div>
          <div className="mt-1 text-[11px] text-emerald-600 font-semibold">
            High conversion benchmark
          </div>
        </div>
      </div>

      {/* Info drawer tooltip */}
      {tooltipMetric && (
        <div className="mt-3 p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-start justify-between animate-fadeIn">
          <span>
            <strong>Leads Penetration:</strong> Total enrolled student candidates actively progressing through admissions touchpoints divided by target district demographics.
          </span>
          <button
            onClick={() => setTooltipMetric(null)}
            className="text-slate-400 hover:text-slate-600 font-bold ml-2"
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
};
