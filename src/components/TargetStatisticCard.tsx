import React, { useState } from 'react';
import { Bookmark, SlidersHorizontal, Sparkles, RefreshCw } from 'lucide-react';
import { TargetMetric } from '../types';

interface TargetStatisticCardProps {
  targets: TargetMetric[];
  onUpdateTarget?: (targetId: string, newValue: number) => void;
  onResetTargets?: () => void;
}

export const TargetStatisticCard: React.FC<TargetStatisticCardProps> = ({
  targets,
  onUpdateTarget,
  onResetTargets
}) => {
  const [activeSlider, setActiveSlider] = useState<string | null>(null);

  // Helper to calculate percentage along the bar:
  const getPercentage = (min: number, current: number, max: number) => {
    if (max <= min) return 0;
    const ratio = (current - min) / (max - min);
    return Math.min(Math.max(ratio * 100, 0), 100);
  };

  return (
    <div
      id="target-statistic-card"
      className="bg-white rounded-2xl p-5 md:p-6 shadow-sm border border-slate-100/90 relative"
    >
      {/* Top Header matching reference image: Bookmark icon + "Target Statistic" */}
      <div className="flex items-center justify-between mb-6 pb-2">
        <div className="flex items-center gap-2.5">
          <div className="text-slate-700">
            <Bookmark className="w-5 h-5 fill-slate-700" />
          </div>
          <h2 className="text-base md:text-lg font-bold text-slate-900 tracking-tight">
            Target Statistic
          </h2>
        </div>

        {onResetTargets && (
          <button
            onClick={onResetTargets}
            title="Reset targets to default"
            className="text-slate-400 hover:text-indigo-600 transition-colors p-1 rounded-lg hover:bg-slate-50"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Target Progress Rows */}
      <div className="space-y-6">
        {targets.map((target, idx) => {
          const percent = getPercentage(target.startValue, target.currentValue, target.targetValue);
          const isPurple = target.color === 'purple';

          return (
            <div key={`${target.id}-${idx}`} className="space-y-2">
              {/* Title */}
              <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
                <span>{target.title}</span>
                <span className="text-[11px] text-slate-400 font-medium">
                  {Math.round(percent)}% Achieved
                </span>
              </div>

              {/* Start & End labels */}
              <div className="flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-slate-900">
                    {target.unit === '$' ? `$${target.startValue.toFixed(2)}` : target.startValue}
                  </div>
                  <div className="text-[10px] text-slate-400 font-medium">
                    {target.startDate}
                  </div>
                </div>

                <div className="text-right">
                  <div className="font-bold text-slate-900">
                    {target.unit === '$' ? `$${target.targetValue}` : target.targetValue}
                  </div>
                  <div className="text-[10px] text-slate-400 font-medium">
                    {target.endDate}
                  </div>
                </div>
              </div>

              {/* Progress Slider Track with Marker */}
              <div className="relative pt-1 pb-4">
                {/* Track Background */}
                <div className="h-1.5 w-full bg-slate-100 rounded-full relative overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-300 ${
                      isPurple ? 'bg-[#635BFF]' : 'bg-[#F97316]'
                    }`}
                    style={{ width: `${percent}%` }}
                  />
                </div>

                {/* Vertical Marker & Floating Value Indicator matching reference image */}
                <div
                  className="absolute top-0 -translate-x-1/2 flex flex-col items-center cursor-pointer transition-all duration-150 group"
                  style={{ left: `${percent}%` }}
                  onMouseEnter={() => setActiveSlider(target.id)}
                  onMouseLeave={() => setActiveSlider(null)}
                >
                  {/* Vertical bar handle */}
                  <div
                    className={`w-1 h-3.5 rounded-full ${
                      isPurple ? 'bg-[#635BFF]' : 'bg-[#F97316]'
                    } shadow-sm group-hover:scale-125 transition-transform`}
                  />

                  {/* Below marker text label */}
                  <div className="mt-1 text-xs font-extrabold text-slate-900 tracking-tight select-none">
                    {target.unit === '$' ? `$${target.currentValue}` : target.currentValue}
                  </div>
                </div>

                {/* Interactive range input slider overlay for live adjustments */}
                <input
                  type="range"
                  min={target.startValue}
                  max={target.targetValue}
                  value={target.currentValue}
                  onChange={(e) => {
                    if (onUpdateTarget) {
                      onUpdateTarget(target.id, Number(e.target.value));
                    }
                  }}
                  className="absolute inset-0 w-full opacity-0 cursor-ew-resize z-10"
                  aria-label={`Adjust ${target.title}`}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
