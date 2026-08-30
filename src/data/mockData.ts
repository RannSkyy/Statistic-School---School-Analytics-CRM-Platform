import { SchoolProfile, SummaryStats, LeadDeal, TargetMetric, NotificationItem } from '../types';

export const initialSchoolProfile: SchoolProfile = {
  id: 'gwinnett-math',
  name: 'Gwinnett School of Mathematics',
  accreditation: 'A',
  schoolId: '12324335',
  address: '970 McElvaney Ln NW, Lawrenceville, GA 30044, United States',
  principal: 'Dr. Kimberly Howard',
  studentCount: 1250,
  facultyCount: 84
};

export const alternateSchools: SchoolProfile[] = [
  initialSchoolProfile,
  {
    id: 'thomas-jefferson',
    name: 'Thomas Jefferson High School for Science and Technology',
    accreditation: 'A+',
    schoolId: '84920194',
    address: '6560 Braddock Rd, Alexandria, VA 22312, United States',
    principal: 'Dr. Ann Bonitatibus',
    studentCount: 1800,
    facultyCount: 110
  },
  {
    id: 'stuyvesant-high',
    name: 'Stuyvesant High School of Manhattan',
    accreditation: 'A+',
    schoolId: '99201844',
    address: '345 Chambers St, New York, NY 10282, United States',
    principal: 'Seung C. Yu',
    studentCount: 3300,
    facultyCount: 165
  },
  {
    id: 'whitney-high',
    name: 'Gretchen Whitney High School',
    accreditation: 'A',
    schoolId: '54201992',
    address: '16800 Shoemaker Ave, Cerritos, CA 90703, United States',
    principal: 'Patricia E. Hager',
    studentCount: 1020,
    facultyCount: 72
  }
];

export const yearlySummaryData: Record<string, SummaryStats> = {
  '2022-2023': {
    leadsPenetration: 50000,
    leadsPenetrationGrowth: 30.5,
    totalPotentialLeads: 100000,
    classPenetration: 650,
    classPenetrationGrowth: -30.5,
    totalPotentialClass: 2000,
    totalRevenue: 1500,
    totalRevenueGrowth: 10.5,
    leadCR: 60
  },
  '2023-2024': {
    leadsPenetration: 68500,
    leadsPenetrationGrowth: 37.0,
    totalPotentialLeads: 120000,
    classPenetration: 820,
    classPenetrationGrowth: 26.2,
    totalPotentialClass: 2200,
    totalRevenue: 2450,
    totalRevenueGrowth: 63.3,
    leadCR: 68
  },
  '2024-2025': {
    leadsPenetration: 85200,
    leadsPenetrationGrowth: 24.4,
    totalPotentialLeads: 135000,
    classPenetration: 1100,
    classPenetrationGrowth: 34.1,
    totalPotentialClass: 2500,
    totalRevenue: 3800,
    totalRevenueGrowth: 55.1,
    leadCR: 74
  }
};

export const initialDeals: LeadDeal[] = [
  {
    id: 'deal-1',
    picName: 'Johanness Kim',
    picAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    picRole: 'Academic Director',
    picEmail: 'j.kim@gwinnett-stem.edu',
    picPhone: '+1 (404) 555-0142',
    schoolVisitDate: '10 Nov 2023',
    dealStatus: 'Won',
    budget: 22.00,
    notes: 'Signed 3-year enterprise license for STEM analytics & curriculum sync.',
    schoolName: 'Gwinnett School of Mathematics'
  },
  {
    id: 'deal-2',
    picName: 'Ribery Arsya',
    picAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    picRole: 'Regional Superintendent',
    picEmail: 'ribery.arsya@georgiaschools.gov',
    picPhone: '+1 (404) 555-0189',
    schoolVisitDate: '4 Nov 2023',
    dealStatus: 'Pending',
    budget: 32.00,
    notes: 'Budget meeting scheduled with school board for procurement review.',
    schoolName: 'Lawrenceville Central Academy'
  },
  {
    id: 'deal-3',
    picName: 'Julia Ninkanda',
    picAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
    picRole: 'Head of Admissions',
    picEmail: 'julia.n@stemnorth.org',
    picPhone: '+1 (404) 555-0211',
    schoolVisitDate: '2 Nov 2023',
    dealStatus: 'Process',
    budget: 12.00,
    notes: 'Reviewing pilot classroom penetration metrics and SIS data integration.',
    schoolName: 'North Atlanta Preparatory'
  },
  {
    id: 'deal-4',
    picName: 'Loreley Anissa',
    picAvatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
    picRole: 'Chief Financial Officer',
    picEmail: 'l.anissa@gwinnettschools.org',
    picPhone: '+1 (404) 555-0318',
    schoolVisitDate: '1 Nov 2023',
    dealStatus: 'Process',
    budget: 17.00,
    notes: 'Contract draft sent; waiting on legal terms confirmation for Q1.',
    schoolName: 'Peachtree Ridge STEM Institute'
  },
  {
    id: 'deal-5',
    picName: 'Marcus Sterling',
    picAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    picRole: 'Principal Counselor',
    picEmail: 'marcus.s@duluthacademy.edu',
    picPhone: '+1 (404) 555-0422',
    schoolVisitDate: '28 Oct 2023',
    dealStatus: 'Won',
    budget: 28.50,
    notes: 'Expanded to cover 45 AP science classes and dual-enrollment tracking.',
    schoolName: 'Duluth Science High'
  },
  {
    id: 'deal-6',
    picName: 'Elena Rostova',
    picAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    picRole: 'Curriculum Director',
    picEmail: 'elena.r@suwanee.edu',
    picPhone: '+1 (404) 555-0551',
    schoolVisitDate: '25 Oct 2023',
    dealStatus: 'Pending',
    budget: 45.00,
    notes: 'District-wide pilot proposal pending final approval next Tuesday.',
    schoolName: 'Suwanee Innovation Academy'
  }
];

export const initialTargets: TargetMetric[] = [
  {
    id: 'target-rev',
    title: 'Target Revenue',
    startDate: '1 November',
    endDate: '30 November',
    startValue: 201.20,
    currentValue: 1209,
    targetValue: 3000,
    unit: '$',
    color: 'purple'
  },
  {
    id: 'target-leads-1',
    title: 'Target Potential Leads',
    startDate: '1 November',
    endDate: '30 November',
    startValue: 201,
    currentValue: 620,
    targetValue: 3000,
    unit: '',
    color: 'orange'
  },
  {
    id: 'target-leads-2',
    title: 'Target Potential Leads',
    startDate: '1 November',
    endDate: '30 November',
    startValue: 201,
    currentValue: 620,
    targetValue: 3000,
    unit: '',
    color: 'orange'
  }
];

export const initialNotifications: NotificationItem[] = [
  {
    id: 'notif-1',
    title: 'Deal Won: Johanness Kim',
    description: 'Gwinnett School of Mathematics confirmed enterprise renewal of $22.00k.',
    time: '12 mins ago',
    unread: true,
    type: 'deal'
  },
  {
    id: 'notif-2',
    title: 'Upcoming School Visit Tomorrow',
    description: 'On-site consultation with Lawrenceville Central Academy at 09:30 AM.',
    time: '45 mins ago',
    unread: true,
    type: 'visit'
  },
  {
    id: 'notif-3',
    title: 'North Region Target Reached 40%',
    description: 'Current revenue reached $631.3k (+12% MoM growth achieved).',
    time: '2 hours ago',
    unread: false,
    type: 'target'
  },
  {
    id: 'notif-4',
    title: 'SIS Data Sync Completed',
    description: '2,450 student profiles & 650 classrooms synced successfully.',
    time: '5 hours ago',
    unread: false,
    type: 'system'
  }
];

export const featuresList = [
  {
    title: 'Real-Time Lead Penetration',
    description: 'Track lead volumes, conversion rates, and pipeline health across every educational campus with millisecond latency.',
    tag: 'Pipeline CRM',
    metrics: '50,000+ Tracked Leads',
    gradient: 'from-blue-600 to-indigo-600'
  },
  {
    title: 'Goal & Target Trajectory Tracking',
    description: 'Visual dynamic progress markers track revenue and conversion targets against monthly and quarterly quotas in real time.',
    tag: 'Forecasting',
    metrics: '$1,209k Target Progress',
    gradient: 'from-indigo-600 to-violet-600'
  },
  {
    title: 'Regional Revenue Intelligence',
    description: 'Deep dive into North, South, and District revenue performance with automated discrepancy alerts and growth indexing.',
    tag: 'Financial Analytics',
    metrics: '+12% North Region Lift',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'School Accreditation & Campus Profiling',
    description: 'Consolidated records for school accreditation, principal contacts, campus IDs, and student-to-faculty ratios.',
    tag: 'Institutional Directory',
    metrics: 'Grade A+ Verified',
    gradient: 'from-sky-600 to-blue-700'
  }
];

export const pricingPlans = [
  {
    name: 'Single Academy',
    description: 'Ideal for independent high schools and specialized STEM academies starting data-driven outreach.',
    priceMonthly: 199,
    priceAnnually: 159,
    badge: 'Standard',
    features: [
      'Up to 5,000 student lead records',
      'School summary & target tracking',
      'Single-campus PIC & deal pipeline',
      'Standard CSV & PDF report export',
      'Email & ticket support (24h SLA)'
    ],
    popular: false,
    buttonText: 'Start 14-Day Free Trial'
  },
  {
    name: 'District Pro',
    description: 'Designed for multi-campus public school districts and regional education boards.',
    priceMonthly: 499,
    priceAnnually: 399,
    badge: 'Most Popular',
    features: [
      'Unlimited student & classroom leads',
      'Multi-regional revenue intelligence',
      'Automated school visit scheduler',
      'Direct PowerSchool & Canvas SIS integration',
      'Custom KPI target markers & alerts',
      'Priority 24/7 dedicated account manager'
    ],
    popular: true,
    buttonText: 'Deploy District Pro'
  },
  {
    name: 'State Enterprise',
    description: 'For state-level departments of education, private school networks, and university consortia.',
    priceMonthly: 1199,
    priceAnnually: 959,
    badge: 'Enterprise',
    features: [
      'Full state-wide multi-tenant architecture',
      'Custom FERPA & HIPAA compliance audit vault',
      'Bespoke AI predictive enrollment models',
      'SSO (SAML, Okta, Google Workspace)',
      'Custom webhook & REST API endpoints',
      'Dedicated on-site implementation specialist'
    ],
    popular: false,
    buttonText: 'Contact Enterprise Sales'
  }
];

export const testimonials = [
  {
    quote: 'Statistic School completely shifted how our district forecasts enrollment and allocates teaching budgets. The leads penetration metrics helped us exceed our Q4 targets by 30.5%.',
    author: 'Dr. Kimberly Howard',
    role: 'Principal & Executive Director',
    institution: 'Gwinnett School of Mathematics, Science and Technology',
    avatar: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=150&auto=format&fit=crop&q=80',
    stat: '+30.5% Leads Growth'
  },
  {
    quote: 'Having the visual target sliders and real-time revenue tracking gives our school board crystal-clear confidence during quarterly reviews. The UI is unbelievably intuitive.',
    author: 'Marcus Sterling',
    role: 'Chief Technology Officer',
    institution: 'Lawrenceville Unified School District',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    stat: '100% On-Time Reporting'
  },
  {
    quote: 'Our admissions PICs schedule campus visits and close prospective classroom deals 2x faster. The deal status workflow has eliminated lost student follow-ups.',
    author: 'Julia Ninkanda',
    role: 'Head of Admissions & Outplacement',
    institution: 'North Atlanta STEM Preparatory',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
    stat: '60% Conversion Rate'
  }
];

export const faqs = [
  {
    question: 'How does Statistic School integrate with our existing Student Information System (SIS)?',
    answer: 'Statistic School provides native, one-click connectors for major SIS platforms including PowerSchool, Infinite Campus, Canvas LMS, Blackbaud, and Google Classroom. Our automated sync keeps student rosters, classroom capacity, and lead pipelines synchronized in real time.'
  },
  {
    question: 'Is student and school financial data compliant with FERPA and privacy laws?',
    answer: 'Yes, 100%. Statistic School is fully compliant with FERPA, COPPA, and GDPR. All data is encrypted using AES-256 at rest and TLS 1.3 in transit with strict role-based access control (RBAC) preventing unauthorized viewing.'
  },
  {
    question: 'Can we customize the Target Statistic markers and budget metrics for our district?',
    answer: 'Absolutely. You can define custom start and target thresholds, choose date windows (monthly, semester, annual), adjust currency or unit scales, and set automated alert triggers when targets are nearing deadlines.'
  },
  {
    question: 'How long does campus onboarding take?',
    answer: 'Most single academies are operational within 15 minutes. For multi-campus districts, our automated onboarding wizard and CSV import tools ensure full configuration within 24 to 48 hours with dedicated support.'
  },
  {
    question: 'Can we export reports for school board meetings and state accreditation audits?',
    answer: 'Yes, you can generate one-click executive PDF summaries, CSV spreadsheets, and high-resolution chart snapshots formatted specifically for board presentations and official accreditation dossiers.'
  }
];
