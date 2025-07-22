
import { ArrowRight, Play, Star, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-r from-primary/5 to-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-32">
        <div className="text-center mb-20">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 mb-8 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20">
            <span className="text-sm font-medium text-primary">
              ✨ Trusted by 50,000+ businesses worldwide
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[0.85] tracking-tight">
            <span className="block text-foreground mb-2">Empower Your</span>
            <span className="block text-foreground mb-2">Business with </span>
            <span className="block bg-gradient-to-r from-primary via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Smarter Platform
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            Transform your workflow with our AI-powered platform. 
            <span className="text-foreground font-medium"> Scale effortlessly</span>, 
            <span className="text-foreground font-medium"> innovate fearlessly</span>, and 
            <span className="text-foreground font-medium"> grow exponentially</span>.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 px-12 py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Get Started Free
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-12 py-4 text-lg font-semibold rounded-xl border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
            >
              <Play className="mr-3 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto mb-20">
            {[
              { value: '99.9%', label: 'Uptime', sublabel: 'Guaranteed' },
              { value: '<100ms', label: 'Response', sublabel: 'Lightning Fast' },
              { value: '50K+', label: 'Users', sublabel: 'Active Monthly' },
              { value: 'SOC 2', label: 'Security', sublabel: 'Enterprise Grade' }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl font-black text-primary group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-foreground">{stat.label}</div>
                <div className="text-xs text-muted-foreground">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="relative max-w-6xl mx-auto">
          <div className="relative">
            <Card className="p-12 bg-gradient-to-br from-background to-muted/30 backdrop-blur-sm border-2 border-primary/10 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500">
              <div className="aspect-[16/9] bg-gradient-to-br from-primary/5 via-purple-500/5 to-indigo-500/5 rounded-2xl flex items-center justify-center relative overflow-hidden border border-primary/10">
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute top-4 left-4 w-2 h-2 bg-primary/20 rounded-full"></div>
                  <div className="absolute top-8 left-12 w-2 h-2 bg-primary/20 rounded-full"></div>
                  <div className="absolute top-12 left-8 w-2 h-2 bg-primary/20 rounded-full"></div>
                  <div className="absolute top-16 left-20 w-2 h-2 bg-primary/20 rounded-full"></div>
                </div>
                
                <div className="text-center z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                    <Play className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">Interactive Dashboard</h3>
                  <p className="text-muted-foreground text-lg">Experience the future of business management</p>
                </div>
              </div>
            </Card>
          </div>
          
          {/* Floating elements */}
          <div className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-3xl rotate-12 blur-sm"></div>
          <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-purple-600/20 to-indigo-600/20 rounded-full blur-sm"></div>
        </div>
      </div>
    </section>
  );
}
