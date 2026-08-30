export type DealStatus = 'Won' | 'Pending' | 'Process' | 'Lost';

export interface LeadDeal {
  id: string;
  picName: string;
  picAvatar: string;
  picRole?: string;
  picEmail?: string;
  picPhone?: string;
  schoolVisitDate: string;
  dealStatus: DealStatus;
  budget: number;
  notes?: string;
  schoolName?: string;
}

export interface SummaryStats {
  leadsPenetration: number;
  leadsPenetrationGrowth: number;
  totalPotentialLeads: number;
  classPenetration: number;
  classPenetrationGrowth: number;
  totalPotentialClass: number;
  totalRevenue: number;
  totalRevenueGrowth: number;
  leadCR: number;
}

export interface TargetMetric {
  id: string;
  title: string;
  startDate: string;
  endDate: string;
  startValue: number;
  currentValue: number;
  targetValue: number;
  unit: '$' | '' | 'Leads';
  color: 'purple' | 'orange';
}

export interface SchoolProfile {
  id: string;
  name: string;
  accreditation: string;
  schoolId: string;
  address: string;
  principal: string;
  studentCount: number;
  facultyCount: number;
}

export interface NotificationItem {
  id: string;
  title: string;
  description: string;
  time: string;
  unread: boolean;
  type: 'visit' | 'deal' | 'target' | 'system';
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  schoolName: string;
  role: string;
  studentCapacity: string;
  preferredDate: string;
  message: string;
  agreedToTerms: boolean;
}

export type ActiveDashboardTab = 'overview' | 'calendar' | 'chat' | 'documents' | 'layers';
