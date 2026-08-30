import React, { useState, useMemo } from 'react';
import { 
  Search, 
  ArrowUpRight, 
  MoreHorizontal, 
  FileText, 
  Plus, 
  CheckCircle, 
  Clock, 
  RefreshCw, 
  Download,
  Filter
} from 'lucide-react';
import { LeadDeal, DealStatus } from '../types';

interface DealsTableCardProps {
  deals: LeadDeal[];
  onSelectDeal: (deal: LeadDeal) => void;
  onAddNewLead: () => void;
  onExportCSV: () => void;
}

export const DealsTableCard: React.FC<DealsTableCardProps> = ({
  deals,
  onSelectDeal,
  onAddNewLead,
  onExportCSV
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'All' | DealStatus>('All');
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [activeMenuId, setActiveMenuId] = useState<string | null>(null);

  const filteredDeals = useMemo(() => {
    return deals.filter((d) => {
      const matchesSearch = 
        d.picName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (d.schoolName && d.schoolName.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (d.picRole && d.picRole.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesStatus = statusFilter === 'All' || d.dealStatus === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [deals, searchQuery, statusFilter]);

  const getStatusBadge = (status: DealStatus) => {
    switch (status) {
      case 'Won':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
            <CheckCircle className="w-3 h-3 text-emerald-600" />
            Won
          </span>
        );
      case 'Pending':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200">
            <Clock className="w-3 h-3 text-amber-600" />
            Pending
          </span>
        );
      case 'Process':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
            <RefreshCw className="w-3 h-3 text-blue-500 animate-spin-slow" />
            Process
          </span>
        );
      case 'Lost':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-rose-50 text-rose-700 border border-rose-200">
            Lost
          </span>
        );
    }
  };

  return (
    <div
      id="deals-table-card"
      className="bg-white rounded-2xl p-5 md:p-6 shadow-sm border border-slate-100/90 relative"
    >
      {/* Top Search bar & Actions matching screenshot */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-5">
        {/* Search User Pill Input */}
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <Search className="w-4 h-4" />
          </div>
          <input
            id="input-search-user"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search User"
            className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-[#F0F4F9] border-none text-xs md:text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:ring-2 focus:ring-indigo-500 transition-all outline-none"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-xs text-slate-400 hover:text-slate-600"
            >
              Clear
            </button>
          )}
        </div>

        {/* Quick Action Button `↗` and Filter `...` */}
        <div className="flex items-center gap-2 justify-end">
          {/* Quick Add / Export button ↗ */}
          <button
            id="btn-quick-add-lead"
            onClick={onAddNewLead}
            title="Add New School Lead"
            className="w-10 h-10 rounded-full bg-[#F0F4F9] hover:bg-[#635BFF] text-slate-700 hover:text-white flex items-center justify-center transition-all duration-200 shadow-sm active:scale-95 group"
          >
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          {/* Filter options `...` */}
          <div className="relative">
            <button
              id="btn-deals-filter-menu"
              onClick={() => setShowFilterDropdown(!showFilterDropdown)}
              title="Filter & Export Options"
              className="w-10 h-10 rounded-full bg-[#F0F4F9] hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-all duration-200 shadow-sm"
            >
              <MoreHorizontal className="w-5 h-5" />
            </button>

            {showFilterDropdown && (
              <div
                id="deals-filter-popover"
                className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-30 animate-fadeIn text-xs"
              >
                <div className="px-3 py-1 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Filter by Status
                </div>
                {(['All', 'Won', 'Pending', 'Process'] as const).map((status) => (
                  <button
                    key={status}
                    onClick={() => {
                      setStatusFilter(status);
                      setShowFilterDropdown(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 flex items-center justify-between hover:bg-slate-50 ${
                      statusFilter === status ? 'font-bold text-[#635BFF] bg-indigo-50/50' : 'text-slate-700'
                    }`}
                  >
                    <span>{status === 'All' ? 'All Deals' : status}</span>
                    {statusFilter === status && <span className="w-1.5 h-1.5 rounded-full bg-[#635BFF]" />}
                  </button>
                ))}
                <div className="my-1 border-t border-slate-100" />
                <button
                  onClick={() => {
                    onExportCSV();
                    setShowFilterDropdown(false);
                  }}
                  className="w-full text-left px-3 py-1.5 flex items-center gap-2 text-slate-700 hover:bg-slate-50"
                >
                  <Download className="w-3.5 h-3.5 text-slate-500" />
                  <span>Export CSV Report</span>
                </button>
                <button
                  onClick={() => {
                    onAddNewLead();
                    setShowFilterDropdown(false);
                  }}
                  className="w-full text-left px-3 py-1.5 flex items-center gap-2 text-[#635BFF] font-semibold hover:bg-indigo-50/50"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add New Contact</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Active Filter Chips */}
      {statusFilter !== 'All' && (
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs text-slate-400">Filtered by:</span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 text-[#635BFF]">
            {statusFilter}
            <button
              onClick={() => setStatusFilter('All')}
              className="hover:text-rose-600 font-bold"
            >
              ×
            </button>
          </span>
        </div>
      )}

      {/* Table matching reference screenshot */}
      <div className="overflow-x-auto -mx-5 md:-mx-6 px-5 md:px-6">
        <table className="w-full text-left border-collapse min-w-[500px]">
          <thead>
            <tr className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider border-b border-slate-100">
              <th className="pb-3 font-semibold">PIC</th>
              <th className="pb-3 font-semibold">School Visit Date</th>
              <th className="pb-3 font-semibold">Deal Status</th>
              <th className="pb-3 font-semibold">Budget</th>
              <th className="pb-3 font-semibold text-right pr-2">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100/70 text-xs md:text-sm">
            {filteredDeals.length === 0 ? (
              <tr>
                <td colSpan={5} className="py-8 text-center text-slate-400">
                  No records match your search query "{searchQuery}".
                </td>
              </tr>
            ) : (
              filteredDeals.map((deal) => (
                <tr
                  key={deal.id}
                  className="hover:bg-slate-50/80 transition-colors group cursor-pointer"
                  onClick={() => onSelectDeal(deal)}
                >
                  {/* PIC Avatar + Name */}
                  <td className="py-3.5 pr-3">
                    <div className="flex items-center gap-3">
                      <img
                        src={deal.picAvatar}
                        alt={deal.picName}
                        referrerPolicy="no-referrer"
                        className="w-9 h-9 rounded-full object-cover ring-2 ring-white shadow-sm shrink-0"
                      />
                      <div>
                        <div className="font-bold text-slate-800 group-hover:text-[#635BFF] transition-colors">
                          {deal.picName}
                        </div>
                        {deal.picRole && (
                          <div className="text-[11px] text-slate-400 font-medium">
                            {deal.picRole}
                          </div>
                        )}
                      </div>
                    </div>
                  </td>

                  {/* Visit Date */}
                  <td className="py-3.5 text-slate-600 font-medium whitespace-nowrap">
                    {deal.schoolVisitDate}
                  </td>

                  {/* Deal Status */}
                  <td className="py-3.5 whitespace-nowrap">
                    {getStatusBadge(deal.dealStatus)}
                  </td>

                  {/* Budget */}
                  <td className="py-3.5 font-bold text-slate-800 whitespace-nowrap">
                    ${deal.budget.toFixed(2)}
                  </td>

                  {/* Action icon (More or Document file icon matching reference image) */}
                  <td className="py-3.5 text-right pr-2">
                    <div className="inline-flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
                      {deal.dealStatus === 'Process' ? (
                        <button
                          onClick={() => onSelectDeal(deal)}
                          title="View Process Brief"
                          className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                        >
                          <FileText className="w-4 h-4" />
                        </button>
                      ) : (
                        <button
                          onClick={() => onSelectDeal(deal)}
                          title="View Deal Details"
                          className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                        >
                          <MoreHorizontal className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
