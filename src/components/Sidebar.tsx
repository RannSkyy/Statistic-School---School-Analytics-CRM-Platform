import React from 'react';
import { 
  Zap, 
  Calendar, 
  MessageSquare, 
  BarChart2, 
  FileText, 
  Layers, 
  LogOut 
} from 'lucide-react';
import { ActiveDashboardTab } from '../types';

interface SidebarProps {
  activeTab: ActiveDashboardTab;
  onTabChange: (tab: ActiveDashboardTab) => void;
  onOpenCalendar: () => void;
  onOpenChat: () => void;
  onOpenDocuments: () => void;
  onOpenLayers: () => void;
  onLogoutClick: () => void;
  unreadCount?: number;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  onTabChange,
  onOpenCalendar,
  onOpenChat,
  onOpenDocuments,
  onOpenLayers,
  onLogoutClick,
  unreadCount = 2
}) => {
  return (
    <aside
      id="dashboard-sidebar"
      className="w-20 md:w-24 bg-[#0B111E] flex flex-col items-center justify-between py-6 rounded-l-[32px] select-none shrink-0 transition-all duration-300 relative z-20 border-r border-slate-800/40"
      aria-label="Dashboard navigation"
    >
      {/* Top Brand / Lightning Icon */}
      <div className="pt-2">
        <button
          id="btn-sidebar-logo"
          onClick={() => onTabChange('overview')}
          title="Statistic School Home"
          className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg shadow-black/40 hover:scale-105 active:scale-95 transition-transform group"
        >
          <Zap className="w-6 h-6 text-[#635BFF] fill-[#635BFF] transition-transform group-hover:rotate-6" />
        </button>
      </div>

      {/* Middle Floating Navigation Dock */}
      <div className="bg-[#141C2E] p-2 rounded-[28px] flex flex-col items-center gap-3.5 shadow-inner border border-slate-800/60 my-auto">
        {/* 1. Calendar */}
        <div className="relative group">
          <button
            id="sidebar-nav-calendar"
            onClick={onOpenCalendar}
            aria-label="School Calendar and Visits"
            className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 ${
              activeTab === 'calendar'
                ? 'bg-[#635BFF] text-white shadow-md shadow-indigo-600/40'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/70'
            }`}
          >
            <Calendar className="w-5 h-5" />
          </button>
          <div className="hidden group-hover:block absolute left-14 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-xs px-2.5 py-1 rounded-md shadow-lg border border-slate-700 whitespace-nowrap z-30 pointer-events-none">
            Visits Calendar
          </div>
        </div>

        {/* 2. Messages / Chat */}
        <div className="relative group">
          <button
            id="sidebar-nav-chat"
            onClick={onOpenChat}
            aria-label="School Communication & PIC Chat"
            className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 relative ${
              activeTab === 'chat'
                ? 'bg-[#635BFF] text-white shadow-md shadow-indigo-600/40'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/70'
            }`}
          >
            <MessageSquare className="w-5 h-5" />
            {unreadCount > 0 && (
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-indigo-400 ring-2 ring-[#141C2E]" />
            )}
          </button>
          <div className="hidden group-hover:block absolute left-14 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-xs px-2.5 py-1 rounded-md shadow-lg border border-slate-700 whitespace-nowrap z-30 pointer-events-none">
            Messages ({unreadCount} new)
          </div>
        </div>

        {/* 3. Bar Chart (Primary Statistics - Active Highlighted in Ref Image) */}
        <div className="relative group">
          <button
            id="sidebar-nav-statistics"
            onClick={() => onTabChange('overview')}
            aria-label="Core School Statistics"
            className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 bg-[#635BFF] text-white shadow-lg shadow-indigo-600/50 hover:bg-[#5349ea] active:scale-95 ring-2 ring-[#635BFF]/30"
          >
            <BarChart2 className="w-5 h-5" />
          </button>
          <div className="hidden group-hover:block absolute left-14 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-xs px-2.5 py-1 rounded-md shadow-lg border border-slate-700 whitespace-nowrap z-30 pointer-events-none">
            School Statistics
          </div>
        </div>

        {/* 4. Bookmark / Document */}
        <div className="relative group">
          <button
            id="sidebar-nav-documents"
            onClick={onOpenDocuments}
            aria-label="Accreditation & Document Vault"
            className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 ${
              activeTab === 'documents'
                ? 'bg-[#635BFF] text-white shadow-md shadow-indigo-600/40'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/70'
            }`}
          >
            <FileText className="w-5 h-5" />
          </button>
          <div className="hidden group-hover:block absolute left-14 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-xs px-2.5 py-1 rounded-md shadow-lg border border-slate-700 whitespace-nowrap z-30 pointer-events-none">
            Documents & Reports
          </div>
        </div>

        {/* 5. Layers / District Multi-Campus */}
        <div className="relative group">
          <button
            id="sidebar-nav-layers"
            onClick={onOpenLayers}
            aria-label="District Campus Layers"
            className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 ${
              activeTab === 'layers'
                ? 'bg-[#635BFF] text-white shadow-md shadow-indigo-600/40'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/70'
            }`}
          >
            <Layers className="w-5 h-5" />
          </button>
          <div className="hidden group-hover:block absolute left-14 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-xs px-2.5 py-1 rounded-md shadow-lg border border-slate-700 whitespace-nowrap z-30 pointer-events-none">
            Campus Switcher
          </div>
        </div>
      </div>

      {/* Bottom Exit / Switch */}
      <div className="pb-2 relative group">
        <button
          id="btn-sidebar-logout"
          onClick={onLogoutClick}
          aria-label="Sign Out / Switch Session"
          className="w-11 h-11 rounded-full bg-[#141C2E] hover:bg-rose-950/40 text-slate-400 hover:text-rose-400 border border-slate-800 flex items-center justify-center transition-all duration-200"
        >
          <LogOut className="w-4 h-4" />
        </button>
        <div className="hidden group-hover:block absolute left-14 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-xs px-2.5 py-1 rounded-md shadow-lg border border-slate-700 whitespace-nowrap z-30 pointer-events-none">
          Admin Sign Out
        </div>
      </div>
    </aside>
  );
};
