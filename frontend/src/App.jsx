
import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturedTutors from '@/components/FeaturedTutors';
import FeaturesSection from '@/components/FeaturesSection';
import Footer from '@/components/Footer';
import HowItWorksSection from '@/components/HowItWorksSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CtaSection from '@/components/CtaSection';

function App() {
  return (
    <div className="selection:bg-fuchsia-500 selection:text-white">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <FeaturedTutors />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
  