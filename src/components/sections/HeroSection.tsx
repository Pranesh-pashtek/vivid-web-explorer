
import { ArrowRight, Play, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export function HeroSection() {
  return (
    <section id="home" className="pt-24 pb-12 lg:pt-32 lg:pb-20">
      <div className="container mx-auto px-4 text-center">
        <div className="animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center px-3 py-1 mb-6 text-sm bg-primary/10 text-primary rounded-full border">
            <Star className="w-4 h-4 mr-2" />
            Trusted by 10,000+ companies worldwide
          </div>

          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Transform Your Business with{' '}
            <span className="text-gradient animate-gradient-shift bg-gradient-to-r from-primary via-purple-600 to-primary bg-[length:200%_auto]">
              Next-Gen SaaS
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Streamline operations, boost productivity, and scale effortlessly with our cutting-edge platform designed for modern businesses.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-purple-600 hover:opacity-90 px-8 py-3 text-lg"
            >
              Try Now - Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 text-lg">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Social proof */}
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {['TechCorp', 'InnovateNow', 'FutureScale', 'DataFlow', 'CloudSync'].map((company) => (
              <div key={company} className="text-lg font-semibold">
                {company}
              </div>
            ))}
          </div>
        </div>

        {/* Hero Image/Visual */}
        <div className="mt-16 relative">
          <Card className="p-8 bg-gradient-to-br from-background to-muted/50 animate-float">
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play className="w-8 h-8 text-primary" />
                </div>
                <p className="text-muted-foreground">Interactive Product Demo</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
