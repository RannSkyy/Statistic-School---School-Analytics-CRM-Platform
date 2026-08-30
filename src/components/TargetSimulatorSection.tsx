import React, { useState } from 'react';
import { Calculator, Sparkles, TrendingUp, DollarSign, Users, Award, ArrowRight } from 'lucide-react';

export const TargetSimulatorSection: React.FC = () => {
  const [studentBase, setStudentBase] = useState(1500);
  const [leadPenetrationRate, setLeadPenetrationRate] = useState(45); // percent
  const [conversionRate, setConversionRate] = useState(60); // percent
  const [tuitionPerStudent, setTuitionPerStudent] = useState(1200);

  // Calculations
  const calculatedLeads = Math.round(studentBase * (leadPenetrationRate / 100));
  const projectedEnrolled = Math.round(calculatedLeads * (conversionRate / 100));
  const projectedRevenue = projectedEnrolled * tuitionPerStudent;
  const growthLiftVsBenchmark = Math.round(((conversionRate - 35) / 35) * 100);

  return (
    <section id="simulator" className="py-16 md:py-24 bg-[#E4E9F0]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-indigo-100 text-[#635BFF] mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive District Simulator</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Simulate Your Target & Revenue Trajectory
          </h2>
          <p className="mt-3 text-slate-600 text-sm md:text-base">
            Adjust student pool size, admissions penetration rate, and conversion thresholds to visualize projected institutional ROI.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Controls Column */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200 flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              {/* Slider 1: Student Demographic Pool */}
              <div>
                <div className="flex items-center justify-between text-xs font-bold text-slate-700 mb-2">
                  <span>Student Demographic Pool</span>
                  <span className="text-indigo-600 font-extrabold text-sm">{studentBase.toLocaleString()} Students</span>
                </div>
                <input
                  type="range"
                  min={500}
                  max={10000}
                  step={100}
                  value={studentBase}
                  onChange={(e) => setStudentBase(Number(e.target.value))}
                  className="w-full accent-[#635BFF] h-2 bg-slate-100 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                  <span>500 (Single Academy)</span>
                  <span>10,000 (Multi-District)</span>
                </div>
              </div>

              {/* Slider 2: Target Leads Penetration */}
              <div>
                <div className="flex items-center justify-between text-xs font-bold text-slate-700 mb-2">
                  <span>Target Leads Penetration</span>
                  <span className="text-indigo-600 font-extrabold text-sm">{leadPenetrationRate}%</span>
                </div>
                <input
                  type="range"
                  min={10}
                  max={90}
                  step={1}
                  value={leadPenetrationRate}
                  onChange={(e) => setLeadPenetrationRate(Number(e.target.value))}
                  className="w-full accent-[#635BFF] h-2 bg-slate-100 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                  <span>10% (Early Outreach)</span>
                  <span>90% (District Dominance)</span>
                </div>
              </div>

              {/* Slider 3: Admissions Conversion Rate (Lead CR) */}
              <div>
                <div className="flex items-center justify-between text-xs font-bold text-slate-700 mb-2">
                  <span>Admissions Conversion Rate (CR)</span>
                  <span className="text-indigo-600 font-extrabold text-sm">{conversionRate}%</span>
                </div>
                <input
                  type="range"
                  min={20}
                  max={85}
                  step={1}
                  value={conversionRate}
                  onChange={(e) => setConversionRate(Number(e.target.value))}
                  className="w-full accent-[#635BFF] h-2 bg-slate-100 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                  <span>20% (Standard)</span>
                  <span>85% (Optimal Pipeline)</span>
                </div>
              </div>

              {/* Slider 4: Average Annual Value / Tuition per Seat */}
              <div>
                <div className="flex items-center justify-between text-xs font-bold text-slate-700 mb-2">
                  <span>Institutional Revenue / Value Per Seat</span>
                  <span className="text-indigo-600 font-extrabold text-sm">${tuitionPerStudent.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min={300}
                  max={5000}
                  step={50}
                  value={tuitionPerStudent}
                  onChange={(e) => setTuitionPerStudent(Number(e.target.value))}
                  className="w-full accent-[#635BFF] h-2 bg-slate-100 rounded-lg cursor-pointer"
                />
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>Dynamic calculation model v2.4</span>
              <button
                onClick={() => {
                  setStudentBase(1500);
                  setLeadPenetrationRate(45);
                  setConversionRate(60);
                  setTuitionPerStudent(1200);
                }}
                className="text-[#635BFF] hover:underline font-semibold"
              >
                Reset Parameters
              </button>
            </div>
          </div>

          {/* Results Output Column */}
          <div className="lg:col-span-6 bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-300">
                  Projected Financial & Enrollment Output
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold bg-emerald-500/20 text-emerald-300 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                  <TrendingUp className="w-3 h-3" /> +{growthLiftVsBenchmark}% Lift
                </span>
              </div>

              {/* Big Revenue Stat */}
              <div>
                <span className="text-xs text-slate-300 block mb-1">Projected Annual Revenue Yield</span>
                <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                  ${(projectedRevenue / 1000).toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}k
                </div>
                <div className="text-xs text-indigo-200 mt-1 font-medium">
                  Equivalent to ${projectedRevenue.toLocaleString()} in annual institutional value
                </div>
              </div>

              {/* Secondary Metrics */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-3.5 bg-white/5 rounded-2xl border border-white/10">
                  <div className="flex items-center gap-2 text-xs text-slate-300 mb-1">
                    <Users className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Projected Leads Pool</span>
                  </div>
                  <div className="text-xl font-extrabold text-white">
                    {calculatedLeads.toLocaleString()}
                  </div>
                </div>

                <div className="p-3.5 bg-white/5 rounded-2xl border border-white/10">
                  <div className="flex items-center gap-2 text-xs text-slate-300 mb-1">
                    <Award className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Enrolled Classrooms</span>
                  </div>
                  <div className="text-xl font-extrabold text-white">
                    {projectedEnrolled.toLocaleString()}
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-6 mt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-slate-300 text-center sm:text-left">
                Ready to benchmark your actual school records?
              </span>
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#635BFF] hover:bg-[#5044ea] text-white text-xs font-bold shadow-lg shadow-indigo-600/40 transition-all hover:scale-102"
              >
                <span>Book Institutional Audit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
