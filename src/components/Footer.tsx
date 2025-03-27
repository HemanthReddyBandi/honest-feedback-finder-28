
import React from 'react';
import { ShieldCheck } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-10 px-4 border-t border-gray-100">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <div className="p-2 rounded-full bg-blue-accent/10 mr-3">
              <ShieldCheck className="h-5 w-5 text-blue-accent" />
            </div>
            <span className="text-xl font-semibold text-gray-dark">ReviewGuard</span>
          </div>
          
          <div className="flex flex-wrap gap-8 justify-center md:justify-end mb-6 md:mb-0">
            <a href="#" className="text-gray-medium hover:text-blue-accent transition-colors">Home</a>
            <a href="#" className="text-gray-medium hover:text-blue-accent transition-colors">How It Works</a>
            <a href="#" className="text-gray-medium hover:text-blue-accent transition-colors">API</a>
            <a href="#" className="text-gray-medium hover:text-blue-accent transition-colors">Pricing</a>
            <a href="#" className="text-gray-medium hover:text-blue-accent transition-colors">Contact</a>
          </div>
          
          <div className="text-gray-medium text-sm">
            &copy; {new Date().getFullYear()} ReviewGuard
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
