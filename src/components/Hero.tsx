
import React from 'react';
import { Button } from '@/components/ui/button';
import { ShieldCheck, ArrowDown } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';

const Hero = () => {
  const scrollToAnalyzer = () => {
    const element = document.getElementById('analyzer');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 py-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-blue-accent opacity-5 rounded-full filter blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-blue-accent opacity-5 rounded-full filter blur-[100px]" />
      </div>
      
      <div className="container max-w-5xl mx-auto text-center z-10">
        <FadeIn delay="100">
          <div className="inline-flex items-center justify-center mb-6 bg-blue-accent/10 px-4 py-2 rounded-full">
            <ShieldCheck className="w-4 h-4 mr-2 text-blue-accent" />
            <p className="text-sm font-medium text-blue-accent">AI-Powered Review Analysis</p>
          </div>
        </FadeIn>
        
        <FadeIn delay="200">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-gray-dark">
            Detect <span className="text-blue-accent">Fake Reviews</span> With Advanced AI
          </h1>
        </FadeIn>
        
        <FadeIn delay="300">
          <p className="text-lg md:text-xl text-gray-medium max-w-2xl mx-auto mb-10 text-balance">
            Our sophisticated algorithm analyzes language patterns, sentiment consistency, and contextual clues to identify synthetic and manipulated reviews with industry-leading accuracy.
          </p>
        </FadeIn>
        
        <FadeIn delay="400">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={scrollToAnalyzer}
              className="bg-blue-accent hover:bg-blue-accent/90 text-white px-8 py-6 rounded-lg shadow-button transition-all duration-300 hover:translate-y-[-2px]"
              size="lg"
            >
              Analyze A Review
            </Button>
            <Button 
              variant="outline" 
              className="border-gray-medium/30 text-gray-dark hover:bg-gray-light/80 px-8 py-6 rounded-lg transition-all duration-300"
              size="lg"
            >
              Learn How It Works
            </Button>
          </div>
        </FadeIn>
        
        <FadeIn delay="500">
          <button 
            onClick={scrollToAnalyzer}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center mt-20 text-gray-medium hover:text-blue-accent transition-colors duration-300"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown className="w-5 h-5 animate-float" />
          </button>
        </FadeIn>
      </div>
    </section>
  );
};

export default Hero;
