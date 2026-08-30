import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  Calendar, 
  Mail, 
  Phone, 
  DollarSign, 
  Building, 
  User, 
  FileText, 
  Download, 
  ExternalLink,
  MapPin,
  TrendingUp,
  Layers,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { LeadDeal, SchoolProfile, DealStatus } from '../types';

/* 1. Lead Detail Modal */
interface LeadDetailModalProps {
  deal: LeadDeal | null;
  onClose: () => void;
  onUpdateStatus: (dealId: string, newStatus: DealStatus) => void;
}

export const LeadDetailModal: React.FC<LeadDetailModalProps> = ({
  deal,
  onClose,
  onUpdateStatus
}) => {
  if (!deal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-100 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-4 mb-5">
          <img
            src={deal.picAvatar}
            alt={deal.picName}
            referrerPolicy="no-referrer"
            className="w-14 h-14 rounded-full object-cover ring-4 ring-indigo-50"
          />
          <div>
            <h3 className="text-lg font-bold text-slate-900">{deal.picName}</h3>
            <p className="text-xs text-slate-500 font-medium">{deal.picRole || 'Person in Charge'}</p>
            <p className="text-xs text-indigo-600 font-semibold">{deal.schoolName}</p>
          </div>
        </div>

        <div className="space-y-3.5 py-3 border-y border-slate-100 text-xs">
          <div className="flex items-center justify-between">
            <span className="text-slate-500 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" /> School Visit Date:
            </span>
            <span className="font-bold text-slate-800">{deal.schoolVisitDate}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-slate-500 flex items-center gap-1.5">
              <DollarSign className="w-3.5 h-3.5" /> Deal Budget:
            </span>
            <span className="font-extrabold text-slate-900 text-sm">${deal.budget.toFixed(2)}k</span>
          </div>

          {deal.picEmail && (
            <div className="flex items-center justify-between">
              <span className="text-slate-500 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5" /> Contact Email:
              </span>
              <a href={`mailto:${deal.picEmail}`} className="text-indigo-600 font-semibold hover:underline">
                {deal.picEmail}
              </a>
            </div>
          )}

          {deal.picPhone && (
            <div className="flex items-center justify-between">
              <span className="text-slate-500 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5" /> Phone:
              </span>
              <span className="font-semibold text-slate-700">{deal.picPhone}</span>
            </div>
          )}

          {deal.notes && (
            <div className="pt-2">
              <span className="text-slate-500 block mb-1 font-medium">Internal Notes & Action Item:</span>
              <div className="p-3 bg-slate-50 rounded-xl text-slate-700 leading-relaxed">
                {deal.notes}
              </div>
            </div>
          )}
        </div>

        {/* Change status buttons */}
        <div className="mt-5">
          <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-2">
            Update Deal Pipeline Status:
          </label>
          <div className="grid grid-cols-3 gap-2">
            {(['Won', 'Pending', 'Process'] as const).map((st) => (
              <button
                key={st}
                onClick={() => onUpdateStatus(deal.id, st)}
                className={`py-2 rounded-xl text-xs font-bold transition-all ${
                  deal.dealStatus === st
                    ? 'bg-[#635BFF] text-white shadow-md shadow-indigo-600/30'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {st}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/* 2. Add New Lead Modal */
interface AddLeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddLead: (lead: Omit<LeadDeal, 'id'>) => void;
}

export const AddLeadModal: React.FC<AddLeadModalProps> = ({ isOpen, onClose, onAddLead }) => {
  const [picName, setPicName] = useState('');
  const [picRole, setPicRole] = useState('Admissions Director');
  const [schoolName, setSchoolName] = useState('');
  const [schoolVisitDate, setSchoolVisitDate] = useState('15 Nov 2023');
  const [dealStatus, setDealStatus] = useState<DealStatus>('Process');
  const [budget, setBudget] = useState(25);
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!picName.trim()) return;

    onAddLead({
      picName,
      picRole,
      schoolName: schoolName || 'Regional High School',
      picAvatar: `https://images.unsplash.com/photo-${1530000000000 + Math.floor(Math.random() * 900000)}?w=150&auto=format&fit=crop&q=80`,
      picEmail: `${picName.toLowerCase().replace(/\s+/g, '.')}@district.edu`,
      picPhone: '+1 (404) 555-' + Math.floor(1000 + Math.random() * 9000),
      schoolVisitDate,
      dealStatus,
      budget,
      notes: notes || 'New lead created from quick entry.'
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-100 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="text-lg font-bold text-slate-900 mb-1">Add School Lead</h3>
        <p className="text-xs text-slate-500 mb-4">Record new institutional PIC contact & target budget.</p>

        <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
          <div>
            <label className="font-semibold text-slate-700 block mb-1">PIC Full Name *</label>
            <input
              type="text"
              required
              value={picName}
              onChange={(e) => setPicName(e.target.value)}
              placeholder="e.g. Dr. Arthur Vance"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="font-semibold text-slate-700 block mb-1">Role / Position</label>
              <input
                type="text"
                value={picRole}
                onChange={(e) => setPicRole(e.target.value)}
                placeholder="e.g. Superintendent"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>
            <div>
              <label className="font-semibold text-slate-700 block mb-1">Visit Date</label>
              <input
                type="text"
                value={schoolVisitDate}
                onChange={(e) => setSchoolVisitDate(e.target.value)}
                placeholder="15 Nov 2023"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="font-semibold text-slate-700 block mb-1">School / Institution Name</label>
            <input
              type="text"
              value={schoolName}
              onChange={(e) => setSchoolName(e.target.value)}
              placeholder="e.g. Norcross High Academy"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="font-semibold text-slate-700 block mb-1">Budget ($k)</label>
              <input
                type="number"
                step="0.5"
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>
            <div>
              <label className="font-semibold text-slate-700 block mb-1">Initial Status</label>
              <select
                value={dealStatus}
                onChange={(e) => setDealStatus(e.target.value as DealStatus)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none bg-white"
              >
                <option value="Process">Process</option>
                <option value="Pending">Pending</option>
                <option value="Won">Won</option>
              </select>
            </div>
          </div>

          <div>
            <label className="font-semibold text-slate-700 block mb-1">Meeting Notes</label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Discussion points or curriculum requirements..."
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none resize-none"
            />
          </div>

          <div className="pt-2 flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-slate-600 hover:bg-slate-100 font-semibold"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-[#635BFF] hover:bg-[#5044ea] text-white font-bold shadow-md shadow-indigo-600/30"
            >
              Save Lead
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

/* 3. Switch School Profile Modal */
interface SchoolSwitcherModalProps {
  isOpen: boolean;
  schools: SchoolProfile[];
  selectedSchool: SchoolProfile;
  onSelectSchool: (s: SchoolProfile) => void;
  onClose: () => void;
}

export const SchoolSwitcherModal: React.FC<SchoolSwitcherModalProps> = ({
  isOpen,
  schools,
  selectedSchool,
  onSelectSchool,
  onClose
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-100 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="text-lg font-bold text-slate-900 mb-1">Select School Campus</h3>
        <p className="text-xs text-slate-500 mb-4">Switch active institutional dashboard data view.</p>

        <div className="space-y-3 max-h-[380px] overflow-y-auto pr-1">
          {schools.map((school) => {
            const isSelected = selectedSchool.id === school.id;
            return (
              <div
                key={school.id}
                onClick={() => {
                  onSelectSchool(school);
                  onClose();
                }}
                className={`p-4 rounded-xl border transition-all cursor-pointer ${
                  isSelected
                    ? 'border-[#635BFF] bg-indigo-50/40 ring-2 ring-indigo-500/20'
                    : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{school.name}</h4>
                    <p className="text-xs text-slate-500 mt-0.5">{school.address}</p>
                    <div className="flex items-center gap-3 mt-2 text-[11px] text-slate-600 font-semibold">
                      <span>Accreditation: <strong className="text-slate-900">{school.accreditation}</strong></span>
                      <span>ID: {school.schoolId}</span>
                      <span>Students: {school.studentCount}</span>
                    </div>
                  </div>
                  {isSelected && (
                    <CheckCircle2 className="w-5 h-5 text-[#635BFF] shrink-0" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

/* 4. Regional Revenue Breakdown Modal */
interface RegionalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RegionalRevenueModal: React.FC<RegionalModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const subDistricts = [
    { name: 'Lawrenceville Central', revenue: '$240.5k', growth: '+15.2%', schools: 18 },
    { name: 'Duluth STEM Cluster', revenue: '$185.0k', growth: '+11.8%', schools: 12 },
    { name: 'Suwanee Innovation Zone', revenue: '$125.8k', growth: '+8.4%', schools: 9 },
    { name: 'Peachtree Ridge East', revenue: '$80.0k', growth: '+10.1%', schools: 6 },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-100 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">
            NR
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">Revenue School North Region</h3>
            <p className="text-xs text-slate-500">Comprehensive November 2023 sub-district distribution</p>
          </div>
        </div>

        <div className="bg-blue-50/70 border border-blue-100 p-4 rounded-xl mb-4 flex items-center justify-between">
          <div>
            <span className="text-xs text-blue-700 font-semibold block">Total North Region Yield</span>
            <span className="text-2xl font-extrabold text-blue-900">$631,300</span>
          </div>
          <div className="text-right">
            <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded-full">
              <TrendingUp className="w-3 h-3" /> +12.0% MoM
            </span>
            <span className="text-[11px] text-slate-500 block mt-1">45 Partner Schools</span>
          </div>
        </div>

        <div className="space-y-2.5 text-xs mb-5">
          <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
            Sub-District Breakdown
          </div>
          {subDistricts.map((sd) => (
            <div key={sd.name} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-slate-100/80">
              <div>
                <div className="font-bold text-slate-800">{sd.name}</div>
                <div className="text-slate-500 text-[11px]">{sd.schools} Active Campuses</div>
              </div>
              <div className="text-right">
                <div className="font-extrabold text-slate-900">{sd.revenue}</div>
                <div className="text-emerald-600 font-semibold text-[11px]">{sd.growth}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="w-full py-2.5 rounded-xl bg-[#635BFF] text-white font-bold text-xs shadow-md shadow-indigo-600/30"
          >
            Close Breakdown
          </button>
        </div>
      </div>
    </div>
  );
};
