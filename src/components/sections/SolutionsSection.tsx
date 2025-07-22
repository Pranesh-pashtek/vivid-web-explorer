
import { Building2, Heart, ShoppingCart, Briefcase } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const industries = [
  {
    icon: Building2,
    title: 'Architecture & Construction',
    description: 'Streamline project management and collaboration for architects and construction teams with advanced planning tools.',
    features: ['Project Planning', 'Resource Management', 'Team Collaboration', 'Progress Tracking'],
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Heart,
    title: 'Healthcare & Medical',
    description: 'Secure patient data management and healthcare workflow optimization solutions for medical professionals.',
    features: ['Patient Records', 'Appointment Scheduling', 'Medical Analytics', 'HIPAA Compliance'],
    color: 'from-red-500 to-pink-500',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce & Retail', 
    description: 'Complete e-commerce solutions with inventory management, sales analytics, and customer engagement tools.',
    features: ['Inventory Control', 'Sales Tracking', 'Customer Analytics', 'Payment Processing'],
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Briefcase,
    title: 'Business & Finance',
    description: 'Financial management tools and business intelligence solutions for growing companies and enterprises.',
    features: ['Financial Reports', 'Budget Planning', 'Performance Metrics', 'Compliance Tools'],
    color: 'from-green-500 to-emerald-500',
  },
];

export function SolutionsSection() {
  return (
    <section id="solutions" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Solutions for Every Industry
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No matter what business or industry you're in, our flexible platform 
            can be customized to meet your specific needs and requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {industries.map((industry, index) => (
            <Card key={index} className="p-8 border border-border/50 hover:shadow-lg transition-all duration-300 bg-background group">
              <div className={`w-16 h-16 bg-gradient-to-r ${industry.color} rounded-2xl flex items-center justify-center mb-6`}>
                <industry.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">{industry.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{industry.description}</p>
              <ul className="space-y-3 mb-6">
                {industry.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button variant="ghost" className="text-primary hover:text-primary hover:bg-primary/10 p-0 h-auto font-semibold">
                Learn more →
              </Button>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <Card className="p-8 bg-muted/30 border-border/50">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Need a custom solution?</h3>
            <p className="text-muted-foreground mb-6">
              Our team can build a tailored solution for your specific industry requirements.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              Contact Sales Team
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}
