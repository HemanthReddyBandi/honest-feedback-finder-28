
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle, Check, X, BarChart3, RefreshCw } from 'lucide-react';
import BlurContainer from '@/components/ui/BlurContainer';
import FadeIn from '@/components/animations/FadeIn';

type AnalysisResult = {
  genuine: boolean;
  score: number;
  confidence: string;
  indicators: string[];
};

const ReviewAnalyzer = () => {
  const [review, setReview] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);

  const handleAnalyze = () => {
    if (!review.trim()) return;
    
    setIsAnalyzing(true);
    
    // Simulate API call with setTimeout
    setTimeout(() => {
      // This is mock data - in a real app, you'd call an actual API
      const isFake = review.length < 50 || /amazing|fantastic|best ever/i.test(review);
      const score = isFake ? Math.random() * 0.4 + 0.6 : Math.random() * 0.3;
      
      setResult({
        genuine: !isFake,
        score: parseFloat(score.toFixed(2)),
        confidence: score > 0.8 ? 'High' : score > 0.6 ? 'Medium' : 'Low',
        indicators: isFake 
          ? ['Excessive positive language', 'Limited specific details', 'Generic phrasing'] 
          : ['Specific product details', 'Balanced perspective', 'Natural language flow']
      });
      
      setIsAnalyzing(false);
    }, 2000);
  };

  const resetAnalysis = () => {
    setReview('');
    setResult(null);
  };

  return (
    <section id="analyzer" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-4">
              Review Analysis Tool
            </h2>
            <p className="text-gray-medium max-w-2xl mx-auto">
              Paste any product or service review below to analyze its authenticity. Our AI will identify patterns that indicate potentially fake or manipulated content.
            </p>
          </div>
        </FadeIn>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <FadeIn delay="100" direction="right">
            <BlurContainer className="h-full">
              <div className="flex flex-col h-full">
                <h3 className="text-xl font-semibold mb-4">Enter Review Text</h3>
                <Textarea
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  placeholder="Paste a review here to analyze its authenticity..."
                  className="flex-1 min-h-[200px] resize-none mb-4 bg-white bg-opacity-50 border-gray-200"
                />
                <div className="flex justify-end">
                  <Button
                    onClick={handleAnalyze}
                    disabled={!review.trim() || isAnalyzing}
                    className="bg-blue-accent hover:bg-blue-accent/90 text-white px-6"
                  >
                    {isAnalyzing ? (
                      <>
                        <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                        Analyzing...
                      </>
                    ) : (
                      <>Analyze Review</>
                    )}
                  </Button>
                </div>
              </div>
            </BlurContainer>
          </FadeIn>
          
          <FadeIn delay="200" direction="right">
            <BlurContainer className="h-full">
              {!result ? (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center text-gray-medium">
                    <BarChart3 className="h-16 w-16 mx-auto mb-4 opacity-30" />
                    <p>Analysis results will appear here</p>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col h-full">
                  <h3 className="text-xl font-semibold mb-4">Analysis Results</h3>
                  
                  <Alert className={`mb-6 ${result.genuine ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
                    <div className="flex items-center gap-3">
                      {result.genuine ? (
                        <div className="p-2 rounded-full bg-green-100">
                          <Check className="h-5 w-5 text-green-600" />
                        </div>
                      ) : (
                        <div className="p-2 rounded-full bg-red-100">
                          <X className="h-5 w-5 text-red-600" />
                        </div>
                      )}
                      <div>
                        <AlertTitle className={result.genuine ? 'text-green-800' : 'text-red-800'}>
                          {result.genuine ? 'Likely Genuine Review' : 'Potential Fake Review'}
                        </AlertTitle>
                        <AlertDescription className={result.genuine ? 'text-green-600' : 'text-red-600'}>
                          Confidence: {result.confidence} ({result.score * 100}%)
                        </AlertDescription>
                      </div>
                    </div>
                  </Alert>
                  
                  <Card className="mb-4 bg-white bg-opacity-50 border-gray-200">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base font-medium">Key Indicators</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {result.indicators.map((indicator, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className={`p-1 rounded-full mt-0.5 ${result.genuine ? 'bg-green-100' : 'bg-red-100'}`}>
                              {result.genuine ? (
                                <Check className="h-3 w-3 text-green-600" />
                              ) : (
                                <AlertCircle className="h-3 w-3 text-red-600" />
                              )}
                            </div>
                            <span className="text-sm text-gray-dark">{indicator}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <div className="mt-auto flex justify-end">
                    <Button
                      variant="outline"
                      onClick={resetAnalysis}
                      className="text-gray-dark hover:bg-gray-100"
                    >
                      Analyze Another Review
                    </Button>
                  </div>
                </div>
              )}
            </BlurContainer>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default ReviewAnalyzer;
