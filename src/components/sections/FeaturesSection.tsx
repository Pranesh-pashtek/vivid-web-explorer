import { Code2, Database, Shield, Zap, Globe, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export function FeaturesSection() {
  const features = [
    {
      icon: Database,
      title: "Database",
      description: "High-performance database solutions with real-time synchronization and advanced security features.",
      color: "bg-blue-500"
    },
    {
      icon: Globe,
      title: "API Interface",
      description: "RESTful APIs with comprehensive documentation and seamless integration capabilities.",
      color: "bg-green-500"
    },
    {
      icon: Shield,
      title: "Authentication",
      description: "Enterprise-grade security with multi-factor authentication and role-based access control.",
      color: "bg-red-500"
    },
    {
      icon: Code2,
      title: "Integration",
      description: "Easy integration with your existing tools and workflows through our comprehensive SDK.",
      color: "bg-yellow-500"
    },
    {
      icon: Zap,
      title: "Real-time",
      description: "Lightning-fast real-time updates and notifications to keep your team synchronized.",
      color: "bg-purple-500"
    },
    {
      icon: Smartphone,
      title: "Multi-Platform",
      description: "Cross-platform compatibility ensuring seamless experience across all devices.",
      color: "bg-indigo-500"
    }
  ];

  return (
    <section className="py-32 bg-muted/20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/10 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 mb-6 bg-primary/10 rounded-full border border-primary/20">
            <span className="text-sm font-medium text-primary">🚀 Modern Development</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
            Built for <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Modern Development</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our platform combines cutting-edge technology with intuitive design, 
            providing everything you need to build scalable, secure applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group p-8 bg-background/80 backdrop-blur-sm border-2 border-border/50 hover:border-primary/30 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="flex items-start space-x-6">
                <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-20">
          <Card className="inline-block p-8 bg-gradient-to-r from-primary/10 via-purple-500/10 to-indigo-500/10 border border-primary/20 rounded-2xl">
            <h3 className="text-2xl font-bold text-foreground mb-4">Ready to get started?</h3>
            <p className="text-muted-foreground mb-6">Join thousands of developers building the future</p>
            <Button size="lg" className="bg-gradient-to-r from-primary to-purple-600 hover:opacity-90 px-8 py-3">
              Start Building Today
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}