
import { ArrowRight, Play, Star, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export function HeroSection() {
  return (
    <section id="home" className="pt-24 pb-20 lg:pt-32 lg:pb-32 relative overflow-hidden bg-background">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-foreground">Empower Your</span>
            <span className="block">Business with </span>
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Smarter Platform
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            An excellent way to get faster time-to-value from your business intelligence investment. 
            Use it to build your next strategic business framework easily.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 px-8 py-3 text-white rounded-lg font-semibold"
            >
              Get Started
            </Button>
            <Button 
              variant="ghost" 
              size="lg" 
              className="px-8 py-3 rounded-lg font-semibold text-foreground hover:bg-muted"
            >
              Live Preview
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto mb-20">
            {[
              { value: '99.9%', label: 'Uptime' },
              { value: '+100ms', label: 'Response' },
              { value: '15K+', label: 'Users' },
              { value: 'SOC 2', label: 'Security' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="relative max-w-5xl mx-auto">
          <Card className="p-8 glass-effect border border-border/50 rounded-3xl shadow-2xl">
            <div className="aspect-[16/10] bg-gradient-to-br from-muted/50 to-muted rounded-2xl flex items-center justify-center relative overflow-hidden">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Play className="w-8 h-8 text-white" />
                </div>
                <p className="text-lg font-semibold text-foreground mb-2">Interactive Dashboard Preview</p>
                <p className="text-muted-foreground">See how our platform transforms your business</p>
              </div>
            </div>
          </Card>
          
          {/* Floating elements */}
          <div className="absolute -top-4 -left-4 w-20 h-20 bg-primary/20 rounded-2xl rotate-12"></div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-500/20 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
