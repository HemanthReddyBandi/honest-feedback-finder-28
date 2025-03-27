
import React from 'react';
import { Brain, Shield, LineChart, MessageSquare, Database, Sparkles } from 'lucide-react';
import BlurContainer from '@/components/ui/BlurContainer';
import FadeIn from '@/components/animations/FadeIn';

const features = [
  {
    icon: <Brain className="h-6 w-6 text-blue-accent" />,
    title: 'AI-Powered Analysis',
    description: 'Utilizes advanced machine learning algorithms to detect language patterns indicative of fake reviews.'
  },
  {
    icon: <Shield className="h-6 w-6 text-blue-accent" />,
    title: 'Sentiment Analysis',
    description: 'Examines emotional consistency and extremity that often characterize manipulated content.'
  },
  {
    icon: <LineChart className="h-6 w-6 text-blue-accent" />,
    title: 'Statistical Modeling',
    description: 'Compares review content against millions of verified reviews to identify outlier patterns.'
  },
  {
    icon: <MessageSquare className="h-6 w-6 text-blue-accent" />,
    title: 'Linguistic Markers',
    description: 'Identifies specific word choices and sentence structures commonly found in synthetic content.'
  },
  {
    icon: <Database className="h-6 w-6 text-blue-accent" />,
    title: 'Continuous Learning',
    description: 'Our system improves over time as it analyzes more reviews, increasing detection accuracy.'
  },
  {
    icon: <Sparkles className="h-6 w-6 text-blue-accent" />,
    title: 'Nuanced Results',
    description: 'Provides confidence scores rather than binary judgments, acknowledging the complexity of language.'
  }
];

const Features = () => {
  return (
    <section className="py-20 px-4 bg-gray-light">
      <div className="container max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-4">
              How Our Technology Works
            </h2>
            <p className="text-gray-medium max-w-2xl mx-auto">
              Our fake review detection system combines multiple advanced technologies to provide highly accurate results.
            </p>
          </div>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FadeIn key={index} delay={`${(index % 3 + 1) * 100}` as "100" | "200" | "300"}>
              <BlurContainer hoverEffect className="h-full">
                <div className="p-2 rounded-full bg-blue-50 w-fit mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-dark">
                  {feature.title}
                </h3>
                <p className="text-gray-medium">
                  {feature.description}
                </p>
              </BlurContainer>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
