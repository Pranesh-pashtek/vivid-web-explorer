
import { Building2, Heart, Brain, TrendingUp, Factory, GraduationCap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const industries = [
  {
    icon: Building2,
    title: 'Finance & Banking',
    description: 'Secure, compliant solutions for financial institutions with real-time processing and advanced risk management.',
    features: ['Regulatory compliance', 'Risk analytics', 'Real-time transactions', 'Audit trails'],
  },
  {
    icon: Heart,
    title: 'Healthcare',
    description: 'HIPAA-compliant platform for healthcare providers with patient data protection and workflow optimization.',
    features: ['HIPAA compliance', 'Patient portals', 'EHR integration', 'Telehealth support'],
  },
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Advanced infrastructure for AI companies with GPU clusters, model deployment, and MLOps automation.',
    features: ['GPU acceleration', 'Model versioning', 'Auto-scaling', 'ML pipelines'],
  },
  {
    icon: TrendingUp,
    title: 'E-commerce',
    description: 'Complete e-commerce solutions with inventory management, payment processing, and customer analytics.',
    features: ['Inventory sync', 'Payment gateways', 'Customer insights', 'Order automation'],
  },
  {
    icon: Factory,
    title: 'Manufacturing',
    description: 'Industrial IoT solutions for manufacturing with supply chain optimization and predictive maintenance.',
    features: ['IoT integration', 'Supply chain', 'Predictive analytics', 'Quality control'],
  },
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'Educational technology platforms with learning management, student analytics, and collaboration tools.',
    features: ['LMS integration', 'Student analytics', 'Virtual classrooms', 'Assessment tools'],
  },
];

export function SolutionsSection() {
  return (
    <section id="solutions" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Industry-Specific{' '}
            <span className="text-gradient">Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tailored solutions designed for the unique challenges and requirements of your industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <Card key={index} className="relative group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-background to-muted/30">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <industry.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{industry.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {industry.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {industry.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <Card className="p-8 bg-gradient-to-r from-primary/5 to-purple-600/5 border-primary/20">
            <h3 className="text-2xl font-bold mb-4">Don't see your industry?</h3>
            <p className="text-muted-foreground mb-6">
              Our flexible platform adapts to any business model. Let's discuss your specific needs.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-primary to-purple-600">
              Contact Our Experts
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}
