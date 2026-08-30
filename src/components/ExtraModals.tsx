import React, { useState } from 'react';
import { 
  X, 
  Calendar as CalendarIcon, 
  MessageSquare, 
  FileText, 
  Send, 
  Download, 
  Layers, 
  Check, 
  Sparkles,
  Clock,
  UserCheck
} from 'lucide-react';
import { LeadDeal } from '../types';

/* 1. Calendar & Visit Scheduler Modal */
interface CalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
  deals: LeadDeal[];
}

export const CalendarModal: React.FC<CalendarModalProps> = ({ isOpen, onClose, deals }) => {
  const [selectedDay, setSelectedDay] = useState('10 Nov');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-100 relative">
        <button onClick={onClose} className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100">
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-[#635BFF] text-white flex items-center justify-center">
            <CalendarIcon className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">School Visits & Schedule</h3>
            <p className="text-xs text-slate-500">Upcoming administrator briefings & campus visits</p>
          </div>
        </div>

        <div className="space-y-3 my-4">
          {deals.slice(0, 4).map((deal, idx) => (
            <div key={deal.id} className="p-3.5 rounded-xl border border-slate-100 bg-slate-50 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white shadow-xs flex items-center justify-center font-bold text-[#635BFF] text-xs">
                  #{idx + 1}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">{deal.picName}</h4>
                  <p className="text-[11px] text-slate-500">{deal.schoolName || 'District Campus'}</p>
                </div>
              </div>
              <div className="text-right">
                <span className="inline-block px-2 py-0.5 rounded-md text-[11px] font-bold bg-indigo-50 text-[#635BFF]">
                  {deal.schoolVisitDate}
                </span>
                <span className="block text-[10px] text-slate-400 mt-0.5">09:30 AM EST</span>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={onClose}
          className="w-full py-2.5 rounded-xl bg-[#635BFF] text-white font-bold text-xs shadow-md shadow-indigo-600/30"
        >
          Confirm Schedule
        </button>
      </div>
    </div>
  );
};

/* 2. Messages & Communication Modal */
interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ChatModal: React.FC<ChatModalProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Dr. Kimberly Howard', text: 'Hi! We received the updated lead CR forecast for 2023-2024. Looks very solid.', time: '10:14 AM' },
    { id: 2, sender: 'You', text: 'Great to hear Dr. Howard! We also included the North Region target revenue breakdown.', time: '10:18 AM' },
    { id: 3, sender: 'Johanness Kim', text: 'We would love to finalize the dual-enrollment STEM curriculum sync before our Friday board meeting.', time: '10:45 AM' },
  ]);
  const [inputText, setInputText] = useState('');

  if (!isOpen) return null;

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    setMessages([
      ...messages,
      { id: Date.now(), sender: 'You', text: inputText, time: 'Just now' }
    ]);
    setInputText('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-100 relative flex flex-col h-[520px]">
        <button onClick={onClose} className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100">
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
          <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center">
            <MessageSquare className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">Admissions & PIC Chat</h3>
            <p className="text-xs text-slate-500">Live district communication thread</p>
          </div>
        </div>

        {/* Message Feed */}
        <div className="flex-1 overflow-y-auto space-y-3 pr-1 text-xs">
          {messages.map((m) => {
            const isMe = m.sender === 'You';
            return (
              <div key={m.id} className={`flex flex-col ${isMe ? 'items-end' : 'items-start'}`}>
                <span className="text-[10px] font-semibold text-slate-400 mb-0.5">{m.sender} • {m.time}</span>
                <div className={`p-3 rounded-2xl max-w-[80%] leading-relaxed ${
                  isMe ? 'bg-[#635BFF] text-white rounded-br-none' : 'bg-slate-100 text-slate-800 rounded-bl-none'
                }`}>
                  {m.text}
                </div>
              </div>
            );
          })}
        </div>

        {/* Input */}
        <form onSubmit={handleSend} className="mt-3 pt-3 border-t border-slate-100 flex items-center gap-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type a message to district team..."
            className="flex-1 px-3.5 py-2 rounded-xl bg-slate-100 text-xs text-slate-800 outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="p-2.5 rounded-xl bg-[#635BFF] hover:bg-[#5044ea] text-white transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};

/* 3. Documents & Vault Modal */
interface DocumentsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DocumentsModal: React.FC<DocumentsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const docs = [
    { name: 'Gwinnett_School_Accreditation_Report_2023.pdf', size: '2.4 MB', date: '10 Nov 2023', type: 'PDF' },
    { name: 'North_Region_Leads_Penetration_Audit.xlsx', size: '1.1 MB', date: '04 Nov 2023', type: 'XLSX' },
    { name: 'District_STEM_Classroom_Agreement.pdf', size: '4.8 MB', date: '02 Nov 2023', type: 'PDF' },
    { name: 'Target_Statistic_November_Summary.csv', size: '340 KB', date: '01 Nov 2023', type: 'CSV' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-100 relative">
        <button onClick={onClose} className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100">
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">Documents & Reports Vault</h3>
            <p className="text-xs text-slate-500">Official accreditation files and export archives</p>
          </div>
        </div>

        <div className="space-y-2.5 my-4">
          {docs.map((doc) => (
            <div key={doc.name} className="p-3 rounded-xl border border-slate-100 bg-slate-50 flex items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2.5">
                <FileText className="w-4 h-4 text-indigo-600 shrink-0" />
                <div>
                  <div className="font-bold text-slate-800 truncate max-w-[240px]">{doc.name}</div>
                  <div className="text-[11px] text-slate-400">{doc.size} • {doc.date}</div>
                </div>
              </div>
              <button 
                onClick={() => alert(`Downloading ${doc.name}...`)}
                className="p-2 rounded-lg bg-white hover:bg-indigo-50 text-indigo-600 shadow-xs border border-slate-200"
              >
                <Download className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        <button
          onClick={onClose}
          className="w-full py-2.5 rounded-xl bg-[#635BFF] text-white font-bold text-xs shadow-md shadow-indigo-600/30"
        >
          Close Document Vault
        </button>
      </div>
    </div>
  );
};
