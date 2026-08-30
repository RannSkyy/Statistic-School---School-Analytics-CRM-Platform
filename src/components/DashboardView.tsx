import React, { useState } from 'react';
import { 
  Bell, 
  ChevronDown, 
  SlidersHorizontal,
  Sparkles,
  Download,
  PlusCircle,
  CheckCircle2,
  Calendar as CalendarIcon,
  MessageSquare,
  BarChart2,
  FileText,
  Layers,
  LogOut,
  RefreshCw,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { Sidebar } from './Sidebar';
import { SchoolBanner } from './SchoolBanner';
import { SummaryDataCard } from './SummaryDataCard';
import { DealsTableCard } from './DealsTableCard';
import { TargetStatisticCard } from './TargetStatisticCard';
import { RegionalRevenueCard } from './RegionalRevenueCard';
import { 
  LeadDetailModal, 
  AddLeadModal, 
  SchoolSwitcherModal, 
  RegionalRevenueModal 
} from './Modals';
import { 
  CalendarModal, 
  ChatModal, 
  DocumentsModal 
} from './ExtraModals';
import { 
  SchoolProfile, 
  SummaryStats, 
  LeadDeal, 
  TargetMetric, 
  NotificationItem, 
  ActiveDashboardTab,
  DealStatus
} from '../types';
import { 
  initialSchoolProfile, 
  alternateSchools, 
  yearlySummaryData, 
  initialDeals, 
  initialTargets, 
  initialNotifications 
} from '../data/mockData';

interface DashboardViewProps {
  onOpenDemoRequestModal?: () => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({ onOpenDemoRequestModal }) => {
  // State
  const [currentSchool, setCurrentSchool] = useState<SchoolProfile>(initialSchoolProfile);
  const [selectedYear, setSelectedYear] = useState<string>('2022-2023');
  const [deals, setDeals] = useState<LeadDeal[]>(initialDeals);
  const [targets, setTargets] = useState<TargetMetric[]>(initialTargets);
  const [activeTab, setActiveTab] = useState<ActiveDashboardTab>('overview');
  const [copiedId, setCopiedId] = useState(false);
  const [notifications, setNotifications] = useState<NotificationItem[]>(initialNotifications);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  // Modals state
  const [selectedDeal, setSelectedDeal] = useState<LeadDeal | null>(null);
  const [isAddLeadOpen, setIsAddLeadOpen] = useState(false);
  const [isSchoolSwitcherOpen, setIsSchoolSwitcherOpen] = useState(false);
  const [isRegionalModalOpen, setIsRegionalModalOpen] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isDocumentsOpen, setIsDocumentsOpen] = useState(false);

  // Derived stats
  const currentStats = yearlySummaryData[selectedYear] || yearlySummaryData['2022-2023'];
  const unreadNotifCount = notifications.filter(n => n.unread).length;

  // Handlers
  const handleCopySchoolId = () => {
    navigator.clipboard.writeText(currentSchool.schoolId);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2000);
  };

  const handleUpdateDealStatus = (dealId: string, newStatus: DealStatus) => {
    setDeals(prev => prev.map(d => d.id === dealId ? { ...d, dealStatus: newStatus } : d));
    if (selectedDeal && selectedDeal.id === dealId) {
      setSelectedDeal(prev => prev ? { ...prev, dealStatus: newStatus } : null);
    }
  };

  const handleAddLead = (newLeadData: Omit<LeadDeal, 'id'>) => {
    const newLead: LeadDeal = {
      ...newLeadData,
      id: `deal-${Date.now()}`
    };
    setDeals(prev => [newLead, ...prev]);
  };

  const handleUpdateTarget = (targetId: string, newValue: number) => {
    setTargets(prev => prev.map(t => t.id === targetId ? { ...t, currentValue: newValue } : t));
  };

  const handleResetTargets = () => {
    setTargets(initialTargets);
  };

  const handleExportCSV = () => {
    const headers = ['PIC Name', 'Visit Date', 'Deal Status', 'Budget ($k)', 'School Name', 'Email'];
    const rows = deals.map(d => [
      `"${d.picName}"`,
      `"${d.schoolVisitDate}"`,
      `"${d.dealStatus}"`,
      `"${d.budget.toFixed(2)}"`,
      `"${d.schoolName || ''}"`,
      `"${d.picEmail || ''}"`
    ]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `School_Statistics_Deals_${selectedYear}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="dashboard" className="py-6 md:py-10 px-2 sm:px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title Banner for Landing Page context */}
        <div className="text-center mb-6 md:mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-indigo-100/70 text-[#635BFF] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Live School Dashboard</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Institutional Intelligence & CRM Platform
          </h1>
          <p className="mt-2 text-xs sm:text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
            Experience real-time lead penetration, school accreditation profiling, target trajectories, and regional revenue intelligence.
          </p>
        </div>

        {/* ============================================================ */}
        {/* EXACT REFERENCE CARD CONTAINER MATCHING THE UPLOADED SCREENSHOT */}
        {/* ============================================================ */}
        <div 
          id="exact-reference-dashboard-card"
          className="bg-[#E9EFF6] rounded-[28px] md:rounded-[36px] shadow-2xl shadow-slate-400/40 border border-white/80 overflow-hidden flex flex-col md:flex-row min-h-[720px] transition-all duration-300 relative"
        >
          {/* 1. Left Curved Dark Sidebar */}
          <div className="hidden md:flex">
            <Sidebar
              activeTab={activeTab}
              onTabChange={(tab) => setActiveTab(tab)}
              onOpenCalendar={() => setIsCalendarOpen(true)}
              onOpenChat={() => setIsChatOpen(true)}
              onOpenDocuments={() => setIsDocumentsOpen(true)}
              onOpenLayers={() => setIsSchoolSwitcherOpen(true)}
              onLogoutClick={() => {
                if (confirm('Are you sure you want to log out of the District Admin session?')) {
                  alert('Logged out safely. Demo session reset.');
                }
              }}
              unreadCount={unreadNotifCount}
            />
          </div>

          {/* Mobile top bar for sidebar navigation on small screens */}
          <div className="flex md:hidden bg-[#0B111E] p-3 items-center justify-between text-white rounded-t-[28px]">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-[#635BFF]" />
              </div>
              <span className="font-bold text-sm">Statistic School</span>
            </div>
            <div className="flex items-center gap-1.5">
              <button 
                onClick={() => setIsCalendarOpen(true)} 
                className="p-2 rounded-full bg-slate-800 text-slate-300"
                aria-label="Open visits calendar"
              >
                <CalendarIcon className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setIsChatOpen(true)} 
                className="p-2 rounded-full bg-slate-800 text-slate-300 relative"
                aria-label="Open messages chat"
              >
                <MessageSquare className="w-4 h-4" />
                {unreadNotifCount > 0 && <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-indigo-500" />}
              </button>
              <button 
                onClick={() => setIsSchoolSwitcherOpen(true)} 
                className="p-2 rounded-full bg-slate-800 text-slate-300"
                aria-label="Switch school campus"
              >
                <Layers className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 2. Main Content Canvas */}
          <main className="flex-1 p-4 sm:p-6 md:p-8 flex flex-col gap-5 overflow-y-auto">
            {/* Top Dashboard Header: "Statistic School" + Notification Bell + User Avatar */}
            <div className="flex items-center justify-between">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                Statistic School
              </h2>

              <div className="flex items-center gap-3 relative">
                {/* Notification Bell */}
                <div className="relative">
                  <button
                    id="btn-dashboard-notifications"
                    onClick={() => setShowNotifications(!showNotifications)}
                    className="w-10 h-10 rounded-full bg-white/80 hover:bg-white text-slate-700 shadow-sm flex items-center justify-center transition-colors relative"
                    aria-label="View notifications"
                  >
                    <Bell className="w-5 h-5 text-slate-700" />
                    {unreadNotifCount > 0 && (
                      <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#635BFF] ring-2 ring-white" />
                    )}
                  </button>

                  {/* Notification Dropdown */}
                  {showNotifications && (
                    <div className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 p-4 z-40 animate-fadeIn text-xs">
                      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                        <span className="font-bold text-slate-900">Notifications ({unreadNotifCount})</span>
                        <button
                          onClick={() => {
                            setNotifications(prev => prev.map(n => ({ ...n, unread: false })));
                            setShowNotifications(false);
                          }}
                          className="text-[11px] text-[#635BFF] hover:underline font-semibold"
                        >
                          Mark all as read
                        </button>
                      </div>

                      <div className="space-y-2.5 my-3 max-h-64 overflow-y-auto pr-1">
                        {notifications.map((n) => (
                          <div
                            key={n.id}
                            className={`p-2.5 rounded-xl transition-colors ${
                              n.unread ? 'bg-indigo-50/70 border border-indigo-100' : 'bg-slate-50'
                            }`}
                          >
                            <div className="font-bold text-slate-800 flex items-center justify-between">
                              <span>{n.title}</span>
                              <span className="text-[10px] text-slate-400 font-normal">{n.time}</span>
                            </div>
                            <p className="text-[11px] text-slate-600 mt-0.5">{n.description}</p>
                          </div>
                        ))}
                      </div>

                      <button
                        onClick={() => setShowNotifications(false)}
                        className="w-full py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-center"
                      >
                        Close
                      </button>
                    </div>
                  )}
                </div>

                {/* User Avatar with photo matching reference */}
                <div className="relative">
                  <button
                    id="btn-dashboard-user-profile"
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="w-11 h-11 rounded-full ring-2 ring-white shadow-sm overflow-hidden focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:opacity-90 transition-opacity"
                    aria-label="User profile menu"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
                      alt="User Avatar"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </button>

                  {showUserMenu && (
                    <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-slate-100 p-3 z-40 animate-fadeIn text-xs">
                      <div className="flex items-center gap-2.5 pb-2.5 border-b border-slate-100">
                        <img
                          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
                          alt="Admin"
                          referrerPolicy="no-referrer"
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <div>
                          <div className="font-bold text-slate-900">Dr. Kimberly Howard</div>
                          <div className="text-[11px] text-slate-400">Principal Admin</div>
                        </div>
                      </div>
                      <div className="py-2 space-y-1">
                        <button
                          onClick={() => {
                            setIsSchoolSwitcherOpen(true);
                            setShowUserMenu(false);
                          }}
                          className="w-full text-left px-2.5 py-1.5 rounded-lg text-slate-700 hover:bg-slate-100"
                        >
                          Switch Campus Profile
                        </button>
                        <button
                          onClick={() => {
                            setIsCalendarOpen(true);
                            setShowUserMenu(false);
                          }}
                          className="w-full text-left px-2.5 py-1.5 rounded-lg text-slate-700 hover:bg-slate-100"
                        >
                          School Visits Calendar
                        </button>
                        <button
                          onClick={() => {
                            setIsDocumentsOpen(true);
                            setShowUserMenu(false);
                          }}
                          className="w-full text-left px-2.5 py-1.5 rounded-lg text-slate-700 hover:bg-slate-100"
                        >
                          Accreditation Documents
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* School Info Banner (Frosted light-blue card) */}
            <SchoolBanner
              school={currentSchool}
              onSwitchSchoolClick={() => setIsSchoolSwitcherOpen(true)}
              onCopySchoolId={handleCopySchoolId}
              copiedId={copiedId}
            />

            {/* Two-Column Grid matching reference image */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
              {/* Left Column (Main Area): Summary Data + Deals Table */}
              <div className="lg:col-span-8 flex flex-col gap-5">
                {/* Summary Data Card with 2x3 metrics */}
                <div id="summary">
                  <SummaryDataCard
                    stats={currentStats}
                    selectedYear={selectedYear}
                    onYearChange={(year) => setSelectedYear(year)}
                    availableYears={['2022-2023', '2023-2024', '2024-2025']}
                  />
                </div>

                {/* PIC / User Deals Table */}
                <div id="deals">
                  <DealsTableCard
                    deals={deals}
                    onSelectDeal={(deal) => setSelectedDeal(deal)}
                    onAddNewLead={() => setIsAddLeadOpen(true)}
                    onExportCSV={handleExportCSV}
                  />
                </div>
              </div>

              {/* Right Column: Target Statistic + Revenue North Region */}
              <div id="targets" className="lg:col-span-4 flex flex-col gap-5">
                {/* Target Statistic Card with interactive sliders */}
                <TargetStatisticCard
                  targets={targets}
                  onUpdateTarget={handleUpdateTarget}
                  onResetTargets={handleResetTargets}
                />

                {/* Revenue School North Region (Electric Blue Card) */}
                <RegionalRevenueCard
                  onOpenRegionalModal={() => setIsRegionalModalOpen(true)}
                />
              </div>
            </div>
          </main>
        </div>

        {/* Quick Help & Interactive Demo Trigger Bar */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 p-4 rounded-2xl bg-white/70 backdrop-blur-md border border-slate-200 shadow-sm text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span><strong>Live Interactive Mode:</strong> Click any table row to update deal pipelines, drag progress sliders to recalculate targets, or switch academic years.</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleExportCSV}
              className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold transition-colors flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export CSV</span>
            </button>
            <button
              onClick={() => setIsAddLeadOpen(true)}
              className="px-3 py-1.5 rounded-xl bg-[#635BFF] hover:bg-[#5249ea] text-white font-semibold transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <PlusCircle className="w-3.5 h-3.5" />
              <span>Add Lead</span>
            </button>
          </div>
        </div>
      </div>

      {/* Modals & Dialogs */}
      <LeadDetailModal
        deal={selectedDeal}
        onClose={() => setSelectedDeal(null)}
        onUpdateStatus={handleUpdateDealStatus}
      />

      <AddLeadModal
        isOpen={isAddLeadOpen}
        onClose={() => setIsAddLeadOpen(false)}
        onAddLead={handleAddLead}
      />

      <SchoolSwitcherModal
        isOpen={isSchoolSwitcherOpen}
        schools={alternateSchools}
        selectedSchool={currentSchool}
        onSelectSchool={(s) => setCurrentSchool(s)}
        onClose={() => setIsSchoolSwitcherOpen(false)}
      />

      <RegionalRevenueModal
        isOpen={isRegionalModalOpen}
        onClose={() => setIsRegionalModalOpen(false)}
      />

      <CalendarModal
        isOpen={isCalendarOpen}
        onClose={() => setIsCalendarOpen(false)}
        deals={deals}
      />

      <ChatModal
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
      />

      <DocumentsModal
        isOpen={isDocumentsOpen}
        onClose={() => setIsDocumentsOpen(false)}
      />
    </section>
  );
};
