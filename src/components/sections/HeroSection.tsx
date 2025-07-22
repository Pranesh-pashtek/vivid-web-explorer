
import { ArrowRight, Play, Star, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export function HeroSection() {
  return (
    <section id="home" className="pt-24 pb-12 lg:pt-32 lg:pb-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 text-center">
        <div className="animate-fade-in-up">
          {/* Premium Badge */}
          <div className="inline-flex items-center px-4 py-2 mb-8 glass-effect rounded-full border gradient-border">
            <div className="gradient-border">
              <div className="flex items-center px-3 py-1">
                <Sparkles className="w-4 h-4 mr-2 text-primary" />
                <span className="text-sm font-medium bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  Trusted by 50,000+ innovators worldwide
                </span>
              </div>
            </div>
          </div>

          {/* Main headline with enhanced typography */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[0.9] tracking-tight">
            <span className="block">Transform Your</span>
            <span className="block text-gradient bg-gradient-to-r from-primary via-indigo-500 to-purple-600 bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_auto]">
              Digital Future
            </span>
            <span className="block text-muted-foreground text-2xl md:text-3xl lg:text-4xl font-normal mt-4">
              with Next-Gen SaaS
            </span>
          </h1>

          {/* Enhanced subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-4xl mx-auto leading-relaxed font-light">
            Unleash unprecedented productivity with our AI-powered platform. 
            <span className="text-primary font-medium"> Scale effortlessly</span>, 
            <span className="text-primary font-medium"> innovate fearlessly</span>, and 
            <span className="text-primary font-medium"> grow exponentially</span>.
          </p>

          {/* Premium CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-purple-600 hover:opacity-90 px-10 py-4 text-lg font-semibold rounded-xl shadow-2xl hover-lift glow-effect"
              onClick={() => window.open('http://ec2-52-0-133-11.compute-1.amazonaws.com:3000/login', '_blank')}
            >
              Start Journey
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-10 py-4 text-lg font-semibold rounded-xl glass-effect hover-lift border-2"
            >
              <Play className="mr-3 h-5 w-5" />
              Watch Magic Happen
            </Button>
          </div>

          {/* Enhanced social proof */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 opacity-60 mb-16">
            {[
              { name: 'TechCorp', metric: '500% Growth' },
              { name: 'InnovateNow', metric: '99.9% Uptime' },
              { name: 'FutureScale', metric: '1M+ Users' },
              { name: 'DataFlow', metric: 'SOC2 Certified' },
              { name: 'CloudSync', metric: '24/7 Support' }
            ].map((company, index) => (
              <div key={company.name} className="text-center">
                <div className="text-lg font-bold text-foreground mb-1">{company.name}</div>
                <div className="text-xs text-primary font-medium">{company.metric}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Premium Hero Visual */}
        <div className="mt-20 relative">
          <div className="relative mx-auto max-w-5xl">
            <Card className="p-8 glass-effect rounded-3xl shadow-2xl hover-lift border-2 border-primary/20">
              <div className="aspect-video bg-gradient-to-br from-primary/20 via-indigo-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center relative overflow-hidden">
                {/* Animated background pattern */}
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent"></div>
                
                <div className="text-center z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl glow-effect">
                    <Play className="w-10 h-10 text-white" />
                  </div>
                  <p className="text-xl font-semibold text-foreground mb-2">Interactive Product Demo</p>
                  <p className="text-muted-foreground">Experience the future in 3 minutes</p>
                </div>
              </div>
            </Card>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-primary to-purple-600 rounded-2xl opacity-20 animate-float"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-purple-600 to-primary rounded-full opacity-20 animate-float delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
