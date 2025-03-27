
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import BlurContainer from '@/components/ui/BlurContainer';
import FadeIn from '@/components/animations/FadeIn';
import { Mail, MessageSquare, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <FadeIn>
            <div>
              <div className="inline-flex items-center justify-center mb-6 bg-blue-accent/10 px-4 py-2 rounded-full">
                <MessageSquare className="w-4 h-4 mr-2 text-blue-accent" />
                <p className="text-sm font-medium text-blue-accent">Get In Touch</p>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-6">
                Have Questions About Our Technology?
              </h2>
              <p className="text-gray-medium mb-8">
                We're here to help businesses and consumers protect themselves from fraudulent review content. Contact us to learn more about our API, enterprise solutions, or to request a demo.
              </p>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-full bg-blue-50">
                  <Mail className="h-6 w-6 text-blue-accent" />
                </div>
                <div>
                  <p className="text-sm text-gray-medium">Email Us At</p>
                  <p className="text-gray-dark font-medium">contact@reviewguard.ai</p>
                </div>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn delay="200">
            <BlurContainer className="h-full">
              <form className="space-y-5">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-dark">
                    Your Name
                  </label>
                  <Input 
                    id="name" 
                    placeholder="Enter your name" 
                    className="bg-white bg-opacity-50 border-gray-200" 
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-dark">
                    Email Address
                  </label>
                  <Input 
                    id="email" 
                    type="email"
                    placeholder="Enter your email" 
                    className="bg-white bg-opacity-50 border-gray-200" 
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-dark">
                    Your Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="What would you like to know?" 
                    className="resize-none min-h-[120px] bg-white bg-opacity-50 border-gray-200" 
                  />
                </div>
                
                <Button className="w-full bg-blue-accent hover:bg-blue-accent/90 text-white transition-all duration-300 hover:translate-y-[-2px]">
                  Send Message
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </BlurContainer>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Contact;
