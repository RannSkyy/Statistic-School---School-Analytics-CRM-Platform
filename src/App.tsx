import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { DashboardView } from './components/DashboardView';
import { FeaturesSection } from './components/FeaturesSection';
import { TargetSimulatorSection } from './components/TargetSimulatorSection';
import { PricingSection } from './components/PricingSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { DemoModal } from './components/DemoModal';

export default function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | undefined>(undefined);

  const handleJumpToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectPlan = (planName: string) => {
    setSelectedPlan(planName);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#E4E9F0] text-slate-800 selection:bg-[#635BFF] selection:text-white font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Sticky Main Navigation */}
      <Navbar
        onOpenDemoModal={() => setIsDemoModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1 space-y-2">
        {/* 1. Live Interactive Dashboard Showcase (Matches exact uploaded reference) */}
        <DashboardView
          onOpenDemoRequestModal={() => setIsDemoModalOpen(true)}
        />

        {/* 2. Platform Capabilities & Features */}
        <FeaturesSection />

        {/* 3. District ROI & Target Penetration Simulator */}
        <TargetSimulatorSection />

        {/* 4. Transparent Institutional Pricing */}
        <PricingSection onSelectPlan={handleSelectPlan} />

        {/* 5. Proven Outcomes & Testimonials */}
        <TestimonialsSection />

        {/* 6. FAQ Accordion */}
        <FaqSection />

        {/* 7. Working Contact & Consultation Booking Form */}
        <ContactSection prefilledPlan={selectedPlan} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Back to Top Button with Scroll Progress Indicator */}
      <BackToTop />

      {/* Interactive Sandbox Tour Modal */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        onJumpToSection={handleJumpToSection}
      />
    </div>
  );
}

