
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
    <section id="solutions" className="py-32 bg-gradient-to-b from-background to-muted/10 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 mb-6 bg-primary/10 rounded-full border border-primary/20">
            <span className="text-sm font-medium text-primary">🏢 Industry Solutions</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
            Solutions for <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Every Industry</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            No matter what business or industry you're in, our flexible platform 
            adapts to meet your specific requirements and challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {industries.map((industry, index) => (
            <Card 
              key={index} 
              className="group relative p-10 bg-background/90 backdrop-blur-sm border-2 border-border/50 hover:border-primary/30 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className={`w-20 h-20 bg-gradient-to-br ${industry.color} rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                  <industry.icon className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {industry.title}
                </h3>
                
                <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                  {industry.description}
                </p>
                
                <ul className="space-y-4 mb-8">
                  {industry.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-4 flex-shrink-0"></div>
                      <span className="text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="ghost" 
                  className="text-primary hover:text-primary hover:bg-primary/10 p-0 h-auto font-semibold text-lg group-hover:translate-x-2 transition-transform duration-300"
                >
                  Learn more →
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-24">
          <Card className="inline-block p-12 bg-gradient-to-r from-primary/10 via-purple-500/10 to-indigo-500/10 backdrop-blur-sm border-2 border-primary/20 rounded-3xl shadow-xl">
            <h3 className="text-3xl font-bold text-foreground mb-4">Need a custom solution?</h3>
            <p className="text-muted-foreground mb-8 text-lg">
              Our expert team can build tailored solutions for your specific industry requirements.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-primary to-purple-600 hover:opacity-90 px-10 py-4 text-lg font-semibold rounded-xl shadow-lg">
              Contact Sales Team
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}
