import React from 'react';
import { Building2, CheckCircle2, Copy, Check, MapPin, ChevronDown } from 'lucide-react';
import { SchoolProfile } from '../types';

interface SchoolBannerProps {
  school: SchoolProfile;
  onSwitchSchoolClick: () => void;
  onCopySchoolId: () => void;
  copiedId: boolean;
}

export const SchoolBanner: React.FC<SchoolBannerProps> = ({
  school,
  onSwitchSchoolClick,
  onCopySchoolId,
  copiedId
}) => {
  return (
    <div
      id="school-info-banner"
      className="bg-[#DCE7F3]/75 backdrop-blur-md rounded-2xl p-4 md:p-5 border border-white/60 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4 transition-all hover:bg-[#DCE7F3]/90"
    >
      {/* Left School Icon & Name */}
      <div className="flex items-center gap-3.5 min-w-[240px]">
        <div className="w-12 h-12 rounded-full bg-white/90 shadow-sm flex items-center justify-center text-slate-700 shrink-0 border border-white">
          <Building2 className="w-6 h-6 text-slate-700" />
        </div>
        <div>
          <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
            School Name
          </span>
          <button
            id="btn-switch-school-banner"
            onClick={onSwitchSchoolClick}
            className="group flex items-center gap-1.5 text-left text-sm md:text-[15px] font-bold text-slate-800 hover:text-[#635BFF] transition-colors focus:outline-none"
            title="Click to switch school profile"
          >
            <span className="line-clamp-1">{school.name}</span>
            <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-[#635BFF] group-hover:translate-y-0.5 transition-transform shrink-0" />
          </button>
        </div>
      </div>

      {/* Grid items: Accreditation, School ID, Address */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-8 w-full md:w-auto text-xs md:text-sm">
        {/* Accreditation */}
        <div>
          <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-0.5">
            Accreditation
          </span>
          <div className="flex items-center gap-1.5 font-bold text-slate-800">
            <span>{school.accreditation}</span>
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 fill-emerald-100" />
          </div>
        </div>

        {/* School ID */}
        <div>
          <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-0.5">
            School ID
          </span>
          <button
            id="btn-copy-school-id"
            onClick={onCopySchoolId}
            className="flex items-center gap-1.5 font-bold text-slate-800 hover:text-indigo-600 transition-colors group"
            title="Click to copy School ID"
          >
            <span>{school.schoolId}</span>
            {copiedId ? (
              <Check className="w-3.5 h-3.5 text-emerald-600" />
            ) : (
              <Copy className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-600 opacity-70 group-hover:opacity-100" />
            )}
          </button>
        </div>

        {/* Address */}
        <div className="col-span-2 sm:col-span-1">
          <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-0.5">
            Address
          </span>
          <a
            id="link-school-address"
            href={`https://maps.google.com/?q=${encodeURI(school.address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-1 font-medium text-slate-700 hover:text-indigo-600 transition-colors line-clamp-1 max-w-[280px]"
            title={school.address}
          >
            <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
            <span className="truncate">{school.address}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
