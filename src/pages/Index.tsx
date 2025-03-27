
import React from 'react';
import Hero from '@/components/Hero';
import ReviewAnalyzer from '@/components/ReviewAnalyzer';
import Features from '@/components/Features';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <ReviewAnalyzer />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
