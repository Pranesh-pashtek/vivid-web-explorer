
import { CheckCircle, Zap, Shield, Globe, BarChart3, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Built for speed with modern architecture and optimized performance.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade security with SOC 2 compliance and end-to-end encryption.',
  },
  {
    icon: Globe,
    title: 'Global Scale',
    description: 'Deploy worldwide with our distributed infrastructure and CDN.',
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Real-time insights and comprehensive reporting for data-driven decisions.',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Seamless collaboration tools for teams of any size.',
  },
  {
    icon: CheckCircle,
    title: '99.9% Uptime',
    description: 'Reliable service with guaranteed uptime and 24/7 monitoring.',
  },
];

const benefits = [
  'Reduce operational costs by up to 40%',
  'Increase team productivity by 3x',
  'Scale without infrastructure worries',
  'Integrate with 500+ existing tools',
  'Get started in under 5 minutes',
];

export function ProductSection() {
  return (
    <section id="product" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Powerful Features for{' '}
            <span className="text-gradient">Modern Teams</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive platform provides everything you need to streamline operations, 
            enhance collaboration, and drive growth.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-6">Why Choose SaaSFlow?</h3>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                  <span className="text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-purple-600/5">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">500K+</div>
                <div className="text-muted-foreground mb-4">Active Users</div>
                <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
                <div className="text-muted-foreground mb-4">Uptime SLA</div>
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Expert Support</div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
