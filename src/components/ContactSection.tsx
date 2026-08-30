import React, { useState } from 'react';
import { 
  Send, 
  CheckCircle2, 
  Mail, 
  Phone, 
  Building2, 
  User, 
  Calendar, 
  MessageSquare, 
  Sparkles,
  ShieldCheck,
  Check
} from 'lucide-react';
import { ContactFormData } from '../types';

interface ContactSectionProps {
  prefilledPlan?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ prefilledPlan }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    schoolName: '',
    role: 'Principal / Headmaster',
    studentCapacity: '1,000 - 2,500 students',
    preferredDate: '',
    message: prefilledPlan ? `Inquiry regarding the ${prefilledPlan} plan.` : '',
    agreedToTerms: true
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.fullName.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMessage('Please provide a valid institutional email address.');
      return;
    }
    if (!formData.schoolName.trim()) {
      setErrorMessage('Please enter your school or district name.');
      return;
    }
    if (!formData.agreedToTerms) {
      setErrorMessage('Please accept the FERPA privacy and terms agreement.');
      return;
    }

    setIsSubmitting(true);
    // Simulate instantaneous clean submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 800);
  };

  const handleResetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      schoolName: '',
      role: 'Principal / Headmaster',
      studentCapacity: '1,000 - 2,500 students',
      preferredDate: '',
      message: '',
      agreedToTerms: true
    });
    setIsSuccess(false);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-indigo-50 text-[#635BFF]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Admissions & Demo Consultation</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Transform Your School's Intelligence in Under 48 Hours
            </h2>

            <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
              Schedule a 1-on-1 walkthrough with an educational technology specialist. We will benchmark your existing student database, demonstrate SIS connectors, and configure custom Target Statistic dashboards.
            </p>

            <div className="space-y-4 pt-4 border-t border-slate-100 text-xs">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">FERPA & Student Privacy Certified</h4>
                  <p className="text-slate-500">Zero third-party telemetry or unsecured ad tracking.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Custom Multi-Campus Onboarding</h4>
                  <p className="text-slate-500">White-glove data migration from CSV, PowerSchool, or Canvas.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Direct Institutional SLA</h4>
                  <p className="text-slate-500">24/7 dedicated support phone line and emergency incident escalation.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Form */}
          <div className="lg:col-span-7 bg-[#F4F7FB] rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200 shadow-sm relative">
            {isSuccess ? (
              <div className="py-12 text-center space-y-4 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Consultation Request Received!</h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                  Thank you, <strong>{formData.fullName}</strong>. An educational data director from our team will contact you at <strong>{formData.email}</strong> within 1 business day.
                </p>
                <div className="pt-4">
                  <button
                    onClick={handleResetForm}
                    className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    Request Live Consultation
                  </h3>
                  <span className="text-[11px] text-slate-400 font-medium">Fields marked * are required</span>
                </div>

                {errorMessage && (
                  <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 font-medium animate-fadeIn">
                    {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="font-bold text-slate-700 block mb-1.5">
                      Full Name *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Dr. Kimberly Howard"
                        className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                      />
                    </div>
                  </div>

                  {/* Institutional Email */}
                  <div>
                    <label className="font-bold text-slate-700 block mb-1.5">
                      Work / Institutional Email *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="k.howard@gwinnett-math.edu"
                        className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* School / District Name */}
                  <div>
                    <label className="font-bold text-slate-700 block mb-1.5">
                      School or District Name *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        name="schoolName"
                        required
                        value={formData.schoolName}
                        onChange={handleChange}
                        placeholder="Gwinnett School of Mathematics"
                        className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="font-bold text-slate-700 block mb-1.5">
                      Phone Number
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                        <Phone className="w-4 h-4" />
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (404) 555-0142"
                        className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Role */}
                  <div>
                    <label className="font-bold text-slate-700 block mb-1.5">
                      Your Institutional Role
                    </label>
                    <select
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-800 focus:ring-2 focus:ring-indigo-500 outline-none"
                    >
                      <option value="Principal / Headmaster">Principal / Headmaster</option>
                      <option value="District Superintendent">District Superintendent</option>
                      <option value="Admissions Director">Admissions Director</option>
                      <option value="Chief Technology Officer">Chief Technology Officer</option>
                      <option value="Curriculum Coordinator">Curriculum Coordinator</option>
                    </select>
                  </div>

                  {/* Student Capacity */}
                  <div>
                    <label className="font-bold text-slate-700 block mb-1.5">
                      Total Student Capacity
                    </label>
                    <select
                      name="studentCapacity"
                      value={formData.studentCapacity}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-800 focus:ring-2 focus:ring-indigo-500 outline-none"
                    >
                      <option value="Under 500 students">Under 500 students</option>
                      <option value="500 - 1,000 students">500 - 1,000 students</option>
                      <option value="1,000 - 2,500 students">1,000 - 2,500 students</option>
                      <option value="2,500 - 10,000 students">2,500 - 10,000 students</option>
                      <option value="Over 10,000 students (District)">Over 10,000 students (District)</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="font-bold text-slate-700 block mb-1.5">
                    Specific Requirements or Focus Areas
                  </label>
                  <textarea
                    rows={3}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your current student tracking challenges or target analytics goals..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-indigo-500 outline-none resize-none"
                  />
                </div>

                {/* Terms checkbox */}
                <div className="flex items-start gap-2.5 pt-1">
                  <input
                    type="checkbox"
                    id="agreedToTerms"
                    name="agreedToTerms"
                    checked={formData.agreedToTerms}
                    onChange={handleChange}
                    className="mt-0.5 w-4 h-4 rounded text-[#635BFF] focus:ring-indigo-500 accent-[#635BFF]"
                  />
                  <label htmlFor="agreedToTerms" className="text-[11px] text-slate-600 cursor-pointer">
                    I agree to the institutional data processing terms and consent to receive demonstration materials under FERPA compliance guidelines.
                  </label>
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-2xl bg-[#635BFF] hover:bg-[#5244ea] text-white font-bold text-xs sm:text-sm shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2 transition-all hover:scale-101 active:scale-99 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span>Sending Request...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Confirm & Schedule Demonstration</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
