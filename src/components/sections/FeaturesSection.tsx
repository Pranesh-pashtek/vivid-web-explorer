import { Code2, Database, Shield, Zap, Globe, Smartphone } from 'lucide-react';
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
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Built for Modern Development
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our platform is designed with modern development practices in mind, 
            providing you with all the tools you need to build scalable applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 border border-border/50 hover:shadow-lg transition-all duration-300 bg-background">
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center flex-shrink-0`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}